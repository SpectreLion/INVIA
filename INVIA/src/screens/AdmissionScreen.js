/*
**
 * INVIA
 * Admission Screen
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  ImageBackground,
  View,
  StatusBar,
  ScrollView
} from 'react-native';

//import documentsList from './../components/documentsList';

export default class AdmissionScreen extends Component<{}> {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <ImageBackground
          style = {styles.header}>
          source={require('./../images/header_admission.png')}>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
  },
  header: {
    width: 400
  },
  docsContainer: {
    flex: 1,
    width: 300,
    backgroundColor: 'orange'
  }
});
