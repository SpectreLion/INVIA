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

export default class AdmissionScreen extends Component<{}> {
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
              source={require('./../images/header_admission.png')}>
            </ImageBackground>
            <View>
              <TouchableHighlight
                onPress={ this.goBackScreen.bind(this) }>
                <Image style={styles.iconBack} source={require('./../images/back-btn.jpg')}></Image>
              </TouchableHighlight>
            </View>
            <View style={styles.mainData}>
              <Text style={styles.docsText}>Fecha: Lunes 1 de Diciembre de 2018</Text>
              <Text style={styles.docsText}>Lugar: Salon 2105</Text>
              <Text style={styles.docsText}>+Requisitos para el día del examen</Text>
              <Text style={styles.docsText}>+Materiales</Text>
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.docsText}>Presentate con lapiz del No 2 y sacapuntas</Text>
            </View>
            <View style={styles.pdfData}>
              <Image style={styles.icon} source={require('./../images/btn_pdf.png')}></Image>
              <Text style={styles.docsText}>Guia de Estudio</Text>
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
    icon: {
      width: 50,
      height: 50,
      marginRight: 5,
    },
    dataContainer: {
      flex: 1,
      flexDirection: 'row',
      height:40,
      padding:8,
      marginTop:20,
      marginBottom:30,
      alignItems:'center',
      backgroundColor: '#d9dbdd'
    },
    mainData: {
      flex: 1,
      alignItems:'center',
      marginTop:20,
    },
    questionData: {
      flex: 1,
      alignItems:'center',
      marginTop:20,
    },
    pdfData: {
      flex: 1,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'center',
      marginTop:20,
      marginLeft:40
    },
    docsText: {
      fontFamily:'Avenir',
      fontSize:20
    }
  });
