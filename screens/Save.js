import React, { Component } from 'react';

import { View,ScrollView,ActivityIndicator, Text} from 'react-native';
import firebase from 'firebase';
import Info from '../components/SavedInfo';
import { Spinner } from 'native-base';

export default class SaveScreen extends Component {
  static navigationOptions = {
    title: 'Find Saved Verses',
    headerTintColor: 'orange',
    headerTitleStyle: {
      fontFamily: 'Raleway-Bold'
    }
  }

  constructor(props){
    super(props);
    console.log('Constructor');
    console.log(this.props);
    this.state = {
      verses: [],
      loaded: false,
    }
  }

  componentDidMount(){
    const email = firebase.auth().currentUser.email.split('@')[0];
    console.log(email + '- Save - Email');
    const verses = [];
    firebase.database().ref(email + '/').orderByChild('chapter').on('value',(snapshot) => {
       snapshot.forEach(item => {
         const verse = item.val();
         verses.push(verse);
         return false;
       });  

       this.setState({
         verses:verses
       },() => this.setState({loaded: true})); 
    
    })
  }

  displayDetails = () => {
    if(!this.state.loaded){
      return <ActivityIndicator size = "large" color = "orange"/>
    }else{
      return <Info verses = {this.state.verses} />
    }
  }

  render() {
    return (
      <ScrollView >
       <View style={{alignItems:'center'}}>
        <View style={{height:70,paddingTop:30,marginTop:20,justifyContent:"center",alignItems:"center",justifyContent:'space-between',flexDirection:'row'}}>
            
        <Text style={{fontFamily:'Poppins',fontSize:23}}>Your saved Verses</Text> 
                
        </View>
        </View>
        {this.state.verses.length == 0 ? (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <View style={{marginTop:50}}>
        <Text style={{fontFamily:'Poppins',fontSize:20}}>You don't have any saved verses!</Text>
        </View>
      </View>
         ) : (
        <View>
          {this.state.loaded == true ? (
            <View>
              {this.displayDetails()}

            </View>
          ):(
            <View>
              <Spinner color='red' />
            </View>
          )}
          
        </View>
          )}
      </ScrollView>
    )
  }
}
