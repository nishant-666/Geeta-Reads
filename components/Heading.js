import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {View,Text} from 'react-native'
import * as Font from 'expo-font';

let customFonts = {
    'Sacramento': require('../assets/fonts/Sacramento-Regular.ttf'),
    'Karla': require('../assets/fonts/Karla-Regular.ttf'),
    'Poppins': require('../assets/fonts/Poppins-Regular.ttf')
  };
export default class Heading extends Component {

    
    state = {
        fontsLoaded: false,
       
      };
      async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
      }
      componentDidMount =() => {
        this._loadFontsAsync();
        
      }
    render() {
        return (
            <View style={{alignItems:'center',marginTop:20}}>
            
              <Text style={{fontFamily:'Poppins',fontSize:18,marginBottom:10}}>Read chapters and verses from the holy Gita.</Text>
              <Text style={{fontFamily:'Poppins',fontSize:18,marginBottom:10}}>Select a chapter and a verse.</Text>
            </View>
        )
    }
}
