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
        <View style = {styles.header}>
          <Image
            source={require('./../images/header_mi_perfil.png')}>
          </Image>
        </View>
        <TouchableHighlight
         onPress={ this.goBackScreen.bind(this) }>
          <Image style={styles.iconBack} source={require('./../images/back-btn.jpg')}></Image>
        </TouchableHighlight>
          <View>
          <Image style={styles.iconBack} source={require('./../images/back-btn.jpg')}></Image>
          <Text style={styles.docsText}>
            Entrega los siguientes documentos en Servicios de Educación Superior [Arriba de Cafetería].
          </Text>
          </View>
          <View style={styles.docsContainer}>

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
    height:100,
    marginBottom:30
  },
  iconBack: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  docsContainer: {
    flex: 1,
    marginTop:20,
    backgroundColor: '#d9dbdd'
  },
  docsText: {
    fontFamily:'Avenir',
    fontSize:2
  }
});
