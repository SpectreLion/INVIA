/*
**
 * INVIA
 * Language Screen
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

export default class LanguageScreen extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  goBackScreen(){
      this.props.navigation.goBack();
    }

    render() {
      return (
         <ScrollView style = {styles.container}>
            <ImageBackground
              style = {styles.header}
              source={require('./../images/language_header.png')}>
            </ImageBackground>
            <View>
              <TouchableHighlight
                onPress={ this.goBackScreen.bind(this) }>
                <Image style={styles.iconBack} source={require('./../images/back-btn.jpg')}></Image>
              </TouchableHighlight>
            </View>
            <View style={styles.mainData}>
              <Text style={styles.docsText}>Exámen para ubicar tu nivel de lengua extranjera [Inglés]</Text>
            </View>
            <View style={styles.grayData}>
              <Text style={styles.docsText}>FECHA:</Text>
              <Text style={styles.docsText}>Viernes 11 de agosto de 2018</Text>
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.docsText}>HORA:</Text>
              <Text style={styles.docsText}>12:00 p.m.</Text>
            </View>
            <View style={styles.grayData}>
             <Text style={styles.docsText}>LUGAR:</Text>
             <Text style={styles.docsText}>Salón 3204</Text>
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.docsText}>CONTACTO CELE:</Text>
              <Text style={styles.docsText}>3184 0000 EXT. 5120</Text>
            </View>
         </ScrollView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    header: {
      flex:1,
      height:120,
      marginBottom:30
    },
    iconBack: {
      width: 20,
      height: 20,
      marginTop: 10,
      marginBottom:10
    },
    grayData: {
      flex: 1,
      height:80,
      padding:8,
      alignItems:'center',
      backgroundColor: '#d9dbdd'
    },
    dataContainer: {
      flex: 1,
      height:80,
      padding:8,
      alignItems:'center',
    },
    mainData: {
      flex: 1,
      alignItems:'center',
      marginTop:20,
      marginBottom: 20
    },
    docsText: {
      fontFamily:'Avenir',
      fontSize:20
    }
  });
