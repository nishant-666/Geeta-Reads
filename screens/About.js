import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {Text, ScrollView, View} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { List, ListItem  } from 'native-base';
import * as Font from 'expo-font';
import Image from '../components/Image'
let customFonts = {
    'Sacramento': require('../assets/fonts/Sacramento-Regular.ttf'),
    'Karla': require('../assets/fonts/Karla-Regular.ttf'),
    'Poppins': require('../assets/fonts/Poppins-Regular.ttf')
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
                <Text style={{fontFamily:'Poppins',padding:20,fontSize:18}}>The Bhagavad Gita(The song of God), often referred to as the Gita, is a 700-verse Hindu scripture that is part of the epic Mahabharata (chapters 23–40 of Bhishma Parva), commonly dated to the second century BCE.</Text>
                <Text style={{fontFamily:'Poppins',padding:20,fontSize:18}}>The Bhagavad Gita is a dialogue between Arjuna, a supernaturally gifted warrior and his guide and charioteer Lord Krishna on the battlefield of Kurukshetra. As both armies stand ready for the battle, the mighty warrior Arjuna, on observing the warriors on both sides becomes overwhelmed with grief and compassion due to the fear of losing his relatives and friends and the consequent sins attributed to killing his own relatives. So, he surrenders to Lord Krishna, seeking a solution. Thus, follows the wisdom of the Bhagavad Gita. Over 18 chapters, Gita packs an intense analysis of life, emotions and ambitions, discussion of various types of yoga, including Jnana, Bhakti, Karma and Raja, the difference between Self and the material body as well as the revelation of the Ultimate Purpose of Life.</Text>
                <Text style={{fontFamily:'Poppins',padding:20,fontSize:20,textDecorationLine: 'underline',textAlign:'center',fontStyle: 'italic'}}>Quotes from Bhagwat Gita</Text>
                <ListItem>
              <Text style={{fontFamily:'Poppins',fontSize:16}}>Whenever dharma declines and the purpose of life is forgotten, I manifest myself on earth. I am born in every age to protect the good, to destroy evil, and to reestablish dharma.</Text>
            </ListItem>
            <ListItem>
              <Text style={{fontFamily:'Poppins',fontSize:16}}>As they approach me, so I receive them. All paths, Arjuna, lead to me.</Text>
            </ListItem>
            <ListItem>
              <Text style={{fontFamily:'Poppins',fontSize:16}}>I am the beginning, middle, and end of creation.</Text>
            </ListItem>
            <ListItem>
              <Text style={{fontFamily:'Poppins',fontSize:16}}>Among animals I am the lion; among birds, the eagle Garuda. I am Prahlada, born among the demons, and of all that measures, I am time.</Text>
            </ListItem>
            <ListItem>
              <Text style={{fontFamily:'Poppins',fontSize:16}}>I am death, which overcomes all, and the source of all beings still to be born.</Text>
            </ListItem>
            <ListItem>
              <Text style={{fontFamily:'Poppins',fontSize:16}}>Just remember that I am, and that I support the entire cosmos with only a fragment of my being.</Text>
            </ListItem>
            <ListItem>
              <Text style={{fontFamily:'Poppins',fontSize:16}}>Behold, Arjuna, a million divine forms, with an infinite variety of color and shape. Behold the gods of the natural world, and many more wonders never revealed before. Behold the entire cosmos turning within my body, and the other things you desire to see.</Text>
            </ListItem>
            <ListItem>
              <Text style={{fontFamily:'Poppins',fontSize:16}}>I am time, the destroyer of all; I have come to consume the world.</Text>
            </ListItem>
            <ListItem>
              <Text style={{fontFamily:'Poppins',fontSize:16}}>That one is dear to me who runs not after the pleasant or away from the painful, grieves not, lusts not, but lets things come and go as they happen.</Text>
            </ListItem>
            <ListItem>
              <Text style={{fontFamily:'Poppins',fontSize:16}}>Just as a reservoir is of little use when the whole countryside is flooded, scriptures are of little use to the illumined man or woman, who sees the Lord everywhere.</Text>
            </ListItem>
            <ListItem>
              <Text style={{fontFamily:'Poppins',fontSize:16}}>They alone see truly who see the Lord the same in every creature, who see the deathless in the hearts of all that die. Seeing the same Lord everywhere, they do not harm themselves or others. Thus they attain the supreme goal.</Text>
            </ListItem>
            <ListItem>
              <Text style={{fontFamily:'Poppins',fontSize:16}}>With a drop of my energy I enter the earth and support all creatures. Through the moon, the vessel of life-giving fluid, I nourish all plants. I enter breathing creatures and dwell within as the life-giving breath. I am the fire in the stomach which digests all food.</Text>
            </ListItem>
            <ListItem>
              <Text style={{fontFamily:'Poppins',fontSize:16}}>There are three gates to this self-destructive hell: lust, anger, and greed. Renounce these three.</Text>
            </ListItem>
            <ListItem>
              <Text style={{fontFamily:'Poppins',fontSize:16}}>Pleasure from the senses seems like nectar at first, but it is bitter as poison in the end.</Text>
            </ListItem>
            <ListItem>
              <Text style={{fontFamily:'Poppins',fontSize:16}}>That which seems like poison at first, but tastes like nectar in the end - this is the joy of sattva, born of a mind at peace with itself.</Text>
            </ListItem>
            </ScrollView>
        )
    }
}
