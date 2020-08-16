import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet,View,ActivityIndicator,ScrollView,ToastAndroid,YellowBox, Text} from 'react-native';
import axios from 'axios';  
import {f, auth, database, storage } from '../config/config'
import * as firebase from 'firebase'
import { Container, Header, Content, Input, Item, Button } from 'native-base';
import { StatusBar } from 'expo-status-bar';
import Details from '../components/Details'
import * as Font from 'expo-font';
import { Feather } from '@expo/vector-icons';
import Heading from '../components/Heading'
let customFonts = {
    'Sacramento': require('../assets/fonts/Sacramento-Regular.ttf'),
    'Karla': require('../assets/fonts/Karla-Regular.ttf'),
    'Poppins': require('../assets/fonts/Poppins-Regular.ttf')
  };
export default class Home extends Component {

    state = {
        fontsLoaded: false,
      };

      async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }
    

 
  static navigationOptions = {
    title: 'Search for Verses',
    headerTintColor: 'orange',
    headerTitleStyle: {
    fontFamily: 'Raleway-Bold'
    }
}
constructor(props){
    super(props);
    // Navigation.events().bindComponent(this);
    this.state = {
        chap_num: '',
        verse_num: '' ,
        access_token: '',
        info: [],
        loading: false,
        display: false,
    }
    YellowBox.ignoreWarnings(['Setting a timer']);
}

//Setting up the access token, as soon as the component loads
    componentDidMount(){
    this._loadFontsAsync();
    firebase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? "App" : "Auth")
    })

    var headers = {
        'accept': 'application/json',
        'content-type': 'application/x-www-form-urlencoded'
    };

    var dataString = 'client_id=NAM6hdeBvZrpApBezRt2i3cnXT02E9WmGiRxd74g&client_secret=oYDsWMTnxgBfpxrd4EBZngQTypjOJQTqtkbgWIdR1idFMPmEPJ&grant_type=client_credentials&scope=verse%20chapter';

    axios.post('https://bhagavadgita.io/auth/oauth/token', dataString, {headers:headers})
    .then((response) => {
        this.setState({
            access_token: response.data.access_token
        }, () => {
            console.log(this.state.access_token);
        })
    })
    .catch((error) => {
        console.log(error.message);
    });
}

    getDetails = () => {
    // Set loading to true
    this.setState({
        display: true,
        loading: true
    })
    // Retrieve the inputs
    const chapter = this.state.chap_num;
    const verse = this.state.verse_num;
    // Log it to confirm it
    console.log(chapter + '-' + verse);
    // Get request
    axios.get(
        'https://bhagavadgita.io/api/v1/chapters/' + chapter + '/verses/' + verse,
        {
            params: {
                access_token:this.state.access_token
            }
        }
    ).then((response) => {
        //console.log(response.data);
        this.setState({
            info: response.data
        }, () => {
            console.log(this.state.info);
            this.setState({
                loading: false
            })
        })
    });
}

saveToFavorites = () => {
    const data = {
        meaning: this.state.info.meaning,
        text: this.state.info.text,
        transliteration: this.state.info.transliteration,
        chapter: this.state.chap_num,
        verse: this.state.verse_num
    };
    const email = firebase.auth().currentUser.email.split('@')[0];
    console.log('email: ' + email);
    firebase.database().ref(email + '/')
        .push(data)
        .then((data) => console.log(data))
        .then(() => ToastAndroid.show(
            'Verse added to Favorites!',
            ToastAndroid.SHORT
        ))
        .catch((err) => console.log(err));
}

displayDetails(){
    if(this.state.display){
        if(this.state.loading){
            return <ActivityIndicator size="large" color="orange"/>
        }
        return <Details info = {this.state.info} save = {this.saveToFavorites} view = {() => this.props.navigation.navigate('Save')} />
    }else{
        return <Text></Text>
    }
}

  render() {
    return (
      <View style={{flex:1,backgroundColor:"white",alignItems:'center'}}>
            
            <View style={{height:70,paddingTop:30,marginTop:20,justifyContent:"center",alignItems:"center",justifyContent:'space-between',flexDirection:'row'}}>
            
            <Text style={{fontFamily:'Poppins',fontSize:23,marginLeft:0}}>Welcome to Gita Reads</Text> 
            
            </View>

            <Heading/>
            <View style={{width:'100%',padding:10}}>
            <Item regular style={{backgroundColor:'#fff9c4',borderRadius:18,borderColor:"#fb8c00",borderBottomWidth:2.1,height:50}} >
            
             <Input 
             style={{fontFamily:'Poppins'}}
             onChangeText = {chap_num => this.setState({chap_num})}
             placeholder='Enter a chapter' 
             value = {this.state.chap_num}
             blurOnSubmit = {true}
             />
             
           </Item>
            
           <Item regular style={{backgroundColor:'#fff9c4',borderRadius:18,borderColor:"#fb8c00",borderBottomWidth:2.1,marginTop:10,height:50}} >
            
            <Input 
            style={{fontFamily:'Poppins'}}
            onChangeText = {verse_num => this.setState({verse_num})} 
            placeholder='Enter a verse' 
            value = {this.state.verse_num}
            blurOnSubmit = {true}
            />
            
          </Item>
          </View>
          <View style={{width:'100%',padding:10}}>
          <Button iconLeft block  style={{borderRadius:10,backgroundColor:"#2196f3",marginLeft:180,marginRight:180}} onPress = {this.getDetails}> 
        
             <Text style={{color:'#fafafa',fontSize:17,marginLeft:5,fontFamily:'Poppins'}}>Search</Text>
           </Button>
           </View>
          <ScrollView style={{textAlign:'left'}}>
            {this.displayDetails()}
          </ScrollView>   
            <StatusBar style="dark" />
        </View>
    )
  }
}
