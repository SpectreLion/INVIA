/*
**
 * INVIA
 *Directory Screen
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

export default class DirectoryScreen extends Component<{}> {
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
              source={require('./../images/header_directory.png')}>
            </ImageBackground>
            <View>
              <TouchableHighlight
                onPress={ this.goBackScreen.bind(this) }>
                <Image style={styles.iconBack} source={require('./../images/back-btn.jpg')}></Image>
              </TouchableHighlight>
            </View>
            <View style={styles.videoData}>
              <Text style={styles.specialText}>Video de Bienvenida Rector</Text>
            </View>
            <View style={styles.grayData}>
              <Text style={styles.docsText}>SERVICIOS ESCOLARES</Text>
              <Text style={styles.docsText}>3184 0000 EXT. 3654</Text>
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.docsText}>FINANZAS/TESOSRERÍA</Text>
              <Text style={styles.docsText}>3184 0000 EXT. 6468</Text>
            </View>
            <View style={styles.grayData}>
             <Text style={styles.docsText}>JEFE DE CARRERA</Text>
             <Text style={styles.docsText}>Ing. Joel Flores</Text>
             <Text style={styles.docsText}>3184 0000 EXT. 4018</Text>
            </View>
            <View style={styles.dataContainer}>
              <Text style={styles.docsText}>COORDINADORA DE INGENIERIAS</Text>
              <Text style={styles.docsText}>Ing. Sandra Contreras</Text>
              <Text style={styles.docsText}>3184 0000 EXT. 6468</Text>
            </View>
            <View style={styles.grayData}>
             <Text style={styles.docsText}>JEFE DE INGENIERIAS</Text>
             <Text style={styles.docsText}>María Elena Pacheco</Text>
             <Text style={styles.docsText}>3184 0000 EXT. 4011</Text>
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
      height:90,
      padding:8,
      alignItems:'center',
      backgroundColor: '#d9dbdd'
    },
    dataContainer: {
      flex: 1,
      height:90,
      padding:8,
      alignItems:'center',
    },
    mainData: {
      flex: 1,
      alignItems:'center',
      marginTop:20,
      marginBottom: 20
    },
    videoData: {
      flex: 1,
      height:150,
      padding:20,
      justifyContent:'center',
      backgroundColor: 'black',
      alignItems:'center',
      marginTop:20,
      marginBottom: 20
    },
    docsText: {
      fontFamily:'Avenir',
      fontSize:18
    },
    specialText: {
      fontFamily:'Avenir',
      fontSize:18,
      color: 'white'
    }
  });
