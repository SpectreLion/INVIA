import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  ImageBackground,
  View,
  StatusBar,
  ScrollView,
  CheckBox
} from 'react-native';
import Colors from './../theme/colors';
import Typografy from './../theme/typografy';

export default class DocumentsList extends Component<{}> {
  constructor(props){
    super(props);
  }

  render() {
    const { id, nombre } = this.props;
    let { completed } = this.props;
    let icon = completed ? require('./../images/icon-checked.png') : require('./../images/icon-circle.png');
    return (
      <TouchableHighlight
            style={styles.touchableArea}
            underlayColor={Colors.touchableHover}
            onPress={ () => { this.props.toggleDoc(id) }}>
          <View style={styles.container}>
            <Image
              style={styles.iconUnchecked}
              source={icon}/>
            <Text style={ completed ? styles.taskCompletedText : styles.taskText }>{nombre}</Text>
          </View>
        </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  touchableArea:{
  height: 60
},
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    padding: 15
  },
  iconUnchecked: {
    width: 20,
    height: 20,
    marginRight: 10,
    marginTop: 4
  },
  taskText: {
    ...Typografy.avenirFont,
    color: Colors.primaryText,
    fontSize: 18,
  },
  taskCompletedText: {
    ...Typografy.avenirFont,
    fontSize: 18,
    color: Colors.gray
  }
});
