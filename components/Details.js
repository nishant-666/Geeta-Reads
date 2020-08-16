import React from 'react'
import {View,StyleSheet,ScrollView, Text} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Button } from 'native-base';

const Details = (props) => {
    let customFonts = {
        'Sacramento': require('../assets/fonts/Sacramento-Regular.ttf'),
        'Karla': require('../assets/fonts/Karla-Regular.ttf'),
        'Poppins': require('../assets/fonts/Poppins-Regular.ttf')
      };
  return (
      
    <ScrollView>
            
            <View style = {styles.container}>
                <Text style = {styles.heading}>Text</Text>
                <Text style = {styles.textInput}>{props.info.text}</Text>
            </View>
            <View style = {styles.container}>
                <Text style = {styles.heading}>Meaning</Text>
                <Text style = {styles.textInput}>{props.info.meaning}</Text>
            </View>
            
            <View style = {styles.container}>
                <Text style = {styles.heading}>Transliteration</Text>
                <Text style = {styles.textInput}>{props.info.transliteration}</Text>
            </View>
            <View style = {styles.container}>
                <Text style = {styles.heading}>Word-meaning</Text>
                <Text style = {styles.textInput}>{props.info.word_meanings}</Text>
            </View>
            <View>
            <Button iconLeft block  style={{borderRadius:10,backgroundColor:"#2196f3",marginLeft:80,marginRight:80,marginBottom:10}} onPress = {props.save}> 
          <Feather name="save" size={20} style={{marginLeft:20,color:"#fafafa"}} />
             <Text style={{color:'#fafafa',fontSize:17,marginLeft:5,fontFamily:'Karla'}}> Save Chapter</Text>
           </Button> 
            </View>
            </ScrollView>
      
  );
}
const styles = StyleSheet.create({
    heading: {
        fontFamily:'Poppins',
        color:'#ff9800',
        fontSize: 24,
        marginTop:10,
        marginBottom:10,
        textAlign:'left',
      
       
    },
    textInput: {
        fontFamily:'Poppins',
        fontSize:18,
        color: 'black',
        textAlign:'left',
    },

    container: {

        borderRadius: 10,
        textAlign:'left',
        paddingLeft:15,
        paddingRight:15
    }
})
export default Details;
