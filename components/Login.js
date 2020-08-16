import React from 'react';
import { View,StyleSheet, Text,ToastAndroid } from 'react-native';
import { Container, Content, Form, Item, Input, Button } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { EvilIcons } from '@expo/vector-icons';
import * as firebase from 'firebase'
import * as Font from 'expo-font';
import config from '../config/config'
import Image from '../components/Krishna'
let customFonts = {
    'Sacramento': require('../assets/fonts/Sacramento-Regular.ttf'),
    'Karla': require('../assets/fonts/Karla-Regular.ttf')
  };
export default class Login extends React.Component {

    state = {
        fontsLoaded: false,
        email:"",
        password:"",
        errorMessage:null
      };

      handleLogin = () =>{
        const {email,password} = this.state
        firebase.auth().signInWithEmailAndPassword(email, password).
        then(user => {
          ToastAndroid.show(
            'You are now logged in!',
            ToastAndroid.SHORT
          );
        }).catch(error => this.setState({errorMessage: error.message}))
      }

      
    
      async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }
    
      componentDidMount() {
        this._loadFontsAsync();
      }
    
  render() {
    return (
        <View style={styles.container}>
           
           <View style={{padding:30,borderRadius:30}}>
           
           <Image/>
              <Text style={{fontSize:18,color:"#212121",fontFamily:'Karla',marginTop:25}}>Sign in to start reading Bhagwat Gita!</Text>
             
              <View style={{marginTop:20}}>  
 
             <Item regular style={{backgroundColor:'#fff9c4',borderRadius:18,borderColor:"#ff9800",borderBottomWidth:2.1,height:50}} >
             <EvilIcons name="user" size={24} color="black" style={{marginLeft:10}}/>
             <Input 
             style={{fontFamily:'Karla',fontSize:16}}
             onChangeText={email => this.setState({email})}
             placeholder='Enter your Email' 
             value = {this.state.email}
             blurOnSubmit = {true}
             />
             
           </Item>
           <Item regular style={{backgroundColor:'#fff9c4',borderRadius:18,borderColor:"#ff9800",borderBottomWidth:2.1,marginTop:10,height:50}} >
           <EvilIcons name="lock" size={24} color="black" style={{marginLeft:10}}/>
             <Input
             style={{fontFamily:'Karla'}}
             placeholder="Enter your Password"
             secureTextEntry={true}
             value = {this.state.password}
             onChangeText={password => this.setState({password})}
             blurOnSubmit = {true}
             />
             
           </Item>
           <View style={{marginTop:10}}>
              {this.state.errorMessage && <Text style={{fontSize:18,color:"#f44336",fontFamily:'Karla'}}>{this.state.errorMessage}</Text>}

           </View>
           <View style={{marginTop:20}}>
           <Button iconLeft block danger style={{borderRadius:10,backgroundColor:"#2196f3"}} onPress={this.handleLogin}> 
           <EvilIcons name="sc-telegram" size={24} color="#fafafa"/> 
            <Text style={{color:'#fafafa',fontSize:15,marginLeft:5,fontFamily:'Karla'}} >Login</Text>
           </Button>
 
           <Button iconLeft block danger style={{borderRadius:10,backgroundColor:"#ff9800",marginTop:10}} onPress={()=> this.props.navigation.navigate("Register")}> 
           <MaterialIcons name="person-add" size={24} color="#fafafa" />
            
             <Text style={{color:'#fafafa',fontSize:15,marginLeft:5,fontFamily:'Karla'}}>Sign Up</Text>
           </Button>

           
           
           
           </View>
           </View>
           </View>
           <StatusBar style="dark" />

     </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      justifyContent:"center",
      flex:1,
      backgroundColor:"white"
      
    },

    
  });
  