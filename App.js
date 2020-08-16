import React from 'react';
import Main from './screens/MainScreen'
import { enableScreens } from 'react-native-screens';
enableScreens();

export default class AppContainer extends React.Component {
  
  render(){
    

    return (
      <Main/>
    );
  }
  
  }
