/*
**
 * INVIA
 * Profile Screen
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  ImageBackground,
  View,
  Dimensions,
  StatusBar,
  ScrollView
} from 'react-native';

const screen = Dimensions.get('window');
export default class DocumentationScreen extends Component<{}> {
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
            source={require('./../images/header_mi_perfil.png')}>
          </ImageBackground>
          <View>
            <TouchableHighlight
              onPress={ this.goBackScreen.bind(this) }>
              <Image style={styles.iconBack} source={require('./../images/back-btn.jpg')}></Image>
            </TouchableHighlight>
          </View>
          <View style={styles.mainData}>
            <Image style={styles.icon} source={require('./../images/btn_mi_perfil.png')}></Image>
            <Text style={styles.docsText}>Nombre: José Ivan Sanchez</Text>
            <Text style={styles.docsText}>Matricula: 012171854</Text>
          </View>
          <View style={styles.dataContainer}>
            <Text style={styles.docsText}>Programa: ISTI</Text>
            <Text style={styles.docsText}>Turno: Matutino</Text>
            <Text style={styles.docsText}>Domicilio: 5 de marzo #2345</Text>
            <Text style={styles.docsText}>Municipio: Zapopan</Text>
            <Text style={styles.docsText}>Estado: Jalisco</Text>
            <Text style={styles.docsText}>C.P: 47850</Text>
            <Text style={styles.docsText}>Celular: 33124567856</Text>
            <Text style={styles.docsText}>Telefono: 36965284</Text>
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
    width: 100,
    height: 100,
    marginBottom:10
  },
  dataContainer: {
    flex: 1,
    marginTop:20,
    alignItems:'center',
    backgroundColor: '#d9dbdd'
  },
  mainData: {
    flex: 1,
    alignItems:'center',
    marginTop:20,
  },
  docsText: {
    fontFamily:'Avenir',
    fontSize:20
  }
});
