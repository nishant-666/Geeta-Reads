import React, { Component } from 'react'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import { StyleSheet, Text, View } from "react-native";
import Login from '../components/Login'
import Register from '../components/Register'
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Feather } from '@expo/vector-icons';
import Home from './Home'
import Saved from './Save'
import About from './About'
import Settings from './Settings'

const AppTabNavigator = createBottomTabNavigator(
  {
    Home:{
      screen: Home,
      navigationOptions:{
        tabBarIcon:({tintColor})=><Feather name="home" size={24} color={tintColor}/>
    }
    },
    Saved:{
      screen: Saved,
      navigationOptions:{
        tabBarIcon:({tintColor})=><Feather name="save" size={24} color={tintColor}/>
    }
    },
    About:{
      screen: About,
      navigationOptions:{
        tabBarIcon:({tintColor})=><Feather name="heart" size={24} color={tintColor}/>
    }
    },
    Settings:{
      screen: Settings,
      navigationOptions:{
        tabBarIcon:({tintColor})=><Feather name="settings" size={24} color={tintColor}/>
    }
    },
    
    
    
  },
  {
    tabBarOptions:{
      style: {
        backgroundColor: "white",
        
        borderTopColor: "#fafafa"
    },
      activeTintColor: "#212121",
      inactiveTintColor:"#2196f3",
      showLabel:false
    }
  }
)

const AuthStack = createStackNavigator({
    Login :{
      screen: Login,
      navigationOptions: {
        header: null,
    },
    },

    Register :{
        screen: Register,
        navigationOptions: {
          header: null,
      },
      },

      Home :{
        screen: Home,
        navigationOptions: {
          header: null,
      },
      }
  })
  

  

export default createAppContainer(
  
    createSwitchNavigator(
        {
           
            Auth: AuthStack,
            App: AppTabNavigator,
        },
        {
            initialRouteName: "App",
           
        }
    )
)
