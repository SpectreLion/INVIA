/*
**
 * INVIA
 * home Screen
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  Image,
  View,
  StatusBar,
  ScrollView
} from 'react-native';
import Colors from './../theme/colors';
import MenuItems from './../components/MenuItems';

export default class MenuScreen extends Component<{}> {
  constructor(props){
    super(props);
    this.state={
      items:[{id:1,title:'DOCUMENTACIÓN',image:require('./../images/btn_documentacion.png')},
                  {id:2,title:'EXAMENES',image:require('./../images/btn_examen.png')},
                  {id:3,title:'INDUCCIÓN',image:require('./../images/btn_curso_induccion.png')},
                  {id:4,title:'CREDENCIAL',image:require('./../images/btn_credencial.png')},
                  {id:5,title:'INICIO DE CLASES',image:require('./../images/btn_inicio_clases.png')},
                  {id:6,title:'DIRECTORIO',image:require('./../images/btn_directorioo.png')},
                  {id:7,title:'BECAS Y APOYOS',image:require('./../images/btn_becas_apoyo.png')},
                  {id:8,title:'MAPA',image:require('./../images/btn_mapa_campus.png')}]
      }
    }

  renderMenuIcons(items){
          return this.state.items.map( item => {
            return (<MenuItems
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    image={item.image}/>)
            });
    }

  render() {

    return (
      <View
        style={styles.container}>
        <ScrollView >
            <View style={styles.itemsContainer}>
              {this.renderMenuIcons(this.state.items)}
            </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  remindMeLogo:{
    marginTop: 80
  },
  itemsContainer: {
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    marginTop:20,
    marginRight:10,
    marginLeft:5
  }
});
