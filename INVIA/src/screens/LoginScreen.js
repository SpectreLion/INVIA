/*
**
 * INVIA
 * home Screen
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  ImageBackground,
  View,
  ScrollView,
  TextInput,
  StatusBar,
  Platform
} from 'react-native';
import Colors from './../theme/colors';

export default class LoginScreen extends Component<{}> {

  goToMenuScreen(){
    this.props.navigation.navigate('Menu');
  }

  render() {

    return (
      <ImageBackground
        style={styles.container}
        source={require('./../images/login_background.png')}>
        <StatusBar
          barStyle="light-content"
       />

       <Image
         style={styles.remindMeLogo}
         source={require('./../images/logo_invia.png')}/>
      <TextInput
         style={styles.inputText}
         placeholder="Email"
         />
      <TextInput
        style={styles.inputText}
        secureTextEntry={true}
        placeholder="Contraseña"
        />
        <TouchableHighlight
          style={styles.loginButton}
          underlayColor={Colors.touchableHover}
          onPress={this.goToMenuScreen.bind(this)}>
          <Text style={styles.loginButtonText}>ENTRAR</Text>
        </TouchableHighlight>
        <Text style={styles.loginText1}>¿olvidaste tu contraseña?</Text>
        <Text style={styles.loginText2}>Haz click aquí</Text>

      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center'
  },
  remindMeLogo:{
    marginTop: 150,
    width:150,
    height:200
  },
  loginButton: {
      marginTop: 10,
      width: 270,
      height: 50,
      paddingTop: 12,
      borderRadius: 27,
      borderStyle: 'solid',
      borderWidth: 2,
      borderColor: '#ffffff',
      alignItems:'center'
  },
  loginButtonText: {
    fontFamily: 'Avenir',
    fontSize: 18,
    color: 'white'
  },
  loginText1: {
    marginTop: 20,
    fontFamily: 'Avenir',
    fontSize: 12,
    color: 'white'
  },
  loginText2: {
    fontFamily: 'Avenir',
    fontSize: 12,
    color: 'white'
  },
  inputText:{
    marginTop: 10,
    width: 325,
    fontFamily: 'Avenir',
    fontSize: 18,
    textAlign: 'left',
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: 'white',
    borderColor: '#ffffff',
    borderBottomWidth: Platform.OS === 'ios' ? 2 : 0,
    borderBottomColor: Colors.separator
  }
});
