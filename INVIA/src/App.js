/**
 *INVIA
 *@authors: Jose Luis Tinajero,Ivan Ruiz, Miguel Guevara, Pablo Rodriguez, Juan Pablo Vazquez
 *
 */

import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import MenuScreen from './screens/MenuScreen';
import * as firebase from 'firebase';
// Initialize Firebase
  const config = {
    apiKey: "AIzaSyDxLo-_q_b4hwJTnil8TaJNCWneFB8KKp0",
    authDomain: "invia-5b246.firebaseapp.com",
    databaseURL: "https://invia-5b246.firebaseio.com",
    projectId: "invia-5b246",
    storageBucket: "invia-5b246.appspot.com",
    messagingSenderId: "499747991252"
  };
  firebase.initializeApp(config);

export default App = StackNavigator(
    {
      Home: { screen: HomeScreen },
      Login: { screen: LoginScreen },
      Menu: { screen: MenuScreen }
    },
    {
      headerMode: 'none'
    }
);
