import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Text, ScrollView} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import Image from './Image'
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
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <ScrollView style={{flex:1}}>
                 <StatusBar style="auto" />
                <Image/>
                <Text style={{fontFamily:'Karla',padding:20,fontSize:18}}>The Bhagavad Gita(The song of God), often referred to as the Gita, is a 700-verse Hindu scripture that is part of the epic Mahabharata (chapters 23–40 of Bhishma Parva), commonly dated to the second century BCE.</Text>
                <Text style={{fontFamily:'Karla',padding:20,fontSize:18}}>The Bhagavad Gita is a dialogue between Arjuna, a supernaturally gifted warrior and his guide and charioteer Lord Krishna on the battlefield of Kurukshetra. As both armies stand ready for the battle, the mighty warrior Arjuna, on observing the warriors on both sides becomes overwhelmed with grief and compassion due to the fear of losing his relatives and friends and the consequent sins attributed to killing his own relatives. So, he surrenders to Lord Krishna, seeking a solution. Thus, follows the wisdom of the Bhagavad Gita. Over 18 chapters, Gita packs an intense analysis of life, emotions and ambitions, discussion of various types of yoga, including Jnana, Bhakti, Karma and Raja, the difference between Self and the material body as well as the revelation of the Ultimate Purpose of Life.</Text>
            </ScrollView>
        )
    }
}
