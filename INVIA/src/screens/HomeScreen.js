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
  StatusBar
} from 'react-native';
import Colors from './../theme/colors';

export default class HomeScreen extends Component<{}> {

  goToLoginScreen(){
    this.props.navigation.navigate('Login');
  }

  render() {

    return (
      <ImageBackground
        style={styles.container}
        source={require('./../images/fondo_home.png')}>
        <StatusBar
          barStyle="light-content"
       />
        <TouchableHighlight
          underlayColor={Colors.touchableHover}
          onPress={this.goToLoginScreen.bind(this)}>
          <Image
            style={styles.remindMeLogo}
            source={require('./../images/logo_invia.png')}/>
        </TouchableHighlight>
        <Text style={styles.homeButtonText}>By Pyxidis</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    resizeMode: 'cover'
  },
  remindMeLogo:{
    marginTop: 200
  },
  homeButtonText: {
    marginTop: 180,
    fontFamily: 'Avenir',
    fontSize: 17,
    color: 'white'
  }
});
