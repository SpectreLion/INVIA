/**
 * INVIA App
 * MenuItems  Component
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View,
  Dimensions
} from 'react-native';
import Colors from './../theme/colors';
import Typografy from './../theme/typografy';


const width = Dimensions.get('window').width;
export default class MenuItems extends Component<{}> {

  constructor(props){
    super(props);
  }

  render() {
    const { id,title,image } = this.props;
    return (
        <TouchableHighlight
            underlayColor={Colors.touchableHover}>
          <View style={styles.container}>
            <Image
              style={styles.icon}
              source={image}/>
            <Text style={ styles.categoryText }>{title}</Text>
          </View>
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width:width/3-15,
    marginLeft:5,
  },
  icon: {
    width:100,
    height:100
  },
  categoryText: {
    ...Typografy.avenirFont,
    color: Colors.categoriesText,
    fontSize: 10,
    color:'gray',
    textAlign:'center',
    marginTop:10,
    marginBottom:20
  }
});
