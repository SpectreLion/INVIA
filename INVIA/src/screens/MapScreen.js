/*
**
 * INVIA
 * Map Screen
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


export default class MapScreen extends Component<{}> {
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
              source={require('./../images/map_header.png')}>
            </ImageBackground>
            <View>
              <TouchableHighlight
                onPress={ this.goBackScreen.bind(this) }>
                <Image style={styles.iconBack} source={require('./../images/back-btn.jpg')}></Image>
              </TouchableHighlight>
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

  });
