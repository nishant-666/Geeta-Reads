import React, { Component } from 'react';
import { View,StyleSheet,Text,ScrollView} from 'react-native';

let customFonts = {
    'Sacramento': require('../assets/fonts/Sacramento-Regular.ttf'),
    'Karla': require('../assets/fonts/Karla-Regular.ttf'),
    'Poppins': require('../assets/fonts/Poppins-Regular.ttf')
  };
class Info extends Component{
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
    
    setData = () => {
        return this.props.verses.map((item,index) => {
            return(
                <View>
                
                <View key = {index} style = {styles.container}>
                    
                    <Text style={styles.header}>Chapter {item.chapter} Verse {item.verse}</Text>
                    <View>
                        <Text style = {styles.text}>Text: {item.text}</Text>
                        <Text style = {styles.text}>Transliteration: {item.transliteration}</Text>
                        <Text style = {styles.text}>Meaning: {item.meaning}</Text>
                    </View>
                    
                </View>
                </View>
            );
        });
       
    }
    render(){
        return(
            <View style={{alignItems:'center',justifyContent:'center'}}>
        
            <ScrollView style={{marginTop:10}}>
                {this.setData()}
            </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        margin: 15,
       
    },
    text: {
        color: 'black',
        fontSize: 18,
        marginBottom: 10,
        fontFamily:'Poppins'
    },
    header: {
        color:'#ff9800',
      
        fontSize: 22,
        marginBottom: 16,
        fontFamily:'Poppins'
       
    }
})

export default Info;