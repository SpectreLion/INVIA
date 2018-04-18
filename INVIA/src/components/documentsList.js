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

export default class documentsList extends Component<{}> {
  constructor(props){
    super(props);
  }

  render() {

    const { id, nombre } = this.props;
    let { completed } = this.props;

    return (
        <TouchableHighlight
          style = {styles.touchableArea}>
            underlayColor={Colors.touchableHover}
            onPress={ () => { this.props.toggleDoc(id) } }>
          <View
            style = {styles.container}>
            <CheckBox
              value= {completed}
              onValueChange={completed:!completed }
            />
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
    height: 60,
    padding: 15
  }
}
