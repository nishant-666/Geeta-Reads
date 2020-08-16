import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {View, Text,ToastAndroid} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import { Container, Header, Content, Input, Item, Button } from 'native-base';
import { Feather } from '@expo/vector-icons';
import * as firebase from 'firebase'

let customFonts = {
    'Sacramento': require('../assets/fonts/Sacramento-Regular.ttf'),
    'Karla': require('../assets/fonts/Karla-Regular.ttf')
  };
export default class About extends Component {
  
    state = {
        fontsLoaded: false,
      };
    
      async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this._loadFontsAsync();
      }
      
      signOut = ()=>{
        firebase.auth().signOut().then(function() {
            // Sign-out successful.
          }).then(user => {
            ToastAndroid.show(
              'You have been logged out!',
              ToastAndroid.SHORT
            );
          }).catch(function(error) {
            // An error happened.
          });
    }
    
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
            <StatusBar style="auto"/>
            
            <Button iconLeft block  style={{borderRadius:10,backgroundColor:"#2196f3",marginLeft:80,marginRight:80}} onPress={this.signOut}> 
            <Feather name="log-out" size={20} style={{marginLeft:20,color:"#fafafa"}} />
             <Text style={{color:'#fafafa',fontSize:17,marginLeft:5,fontFamily:'Karla'}}> Logout</Text>
           </Button>
            </View>
        )
    }
}
