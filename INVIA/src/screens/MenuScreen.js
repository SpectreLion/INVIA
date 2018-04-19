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
  ImageBackground,
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
                  {id:2,title:'EXAMEN DE ADMISIÓN',image:require('./../images/btn_examen.png')},
                  {id:3,title:'LENGUA EXTRANJERA',image:require('./../images/btn_lengua_ex.png')},
                  {id:4,title:'CURSO DE INDUCCIÓN',image:require('./../images/btn_curso_induccion.png')},
                  {id:5,title:'INDUCCION DE PLATAFORMA',image:require('./../images/btn_plataforma.png')},
                  {id:6,title:'CREDENCIAL',image:require('./../images/btn_credencial.png')},
                  {id:7,title:'INICIO DE CLASES',image:require('./../images/btn_inicio_clases.png')},
                  {id:8,title:'DIRECTORIO',image:require('./../images/btn_directorioo.png')},
                  {id:9,title:'BECAS Y APOYOS',image:require('./../images/btn_becas_apoyo.png')},
                  {id:10,title:'MAPA',image:require('./../images/btn_mapa_campus.png')}]
      }
    }

  renderMenuIcons(items){
          return this.state.items.map( item => {
            return (<MenuItems
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    goToScreen={this.goToScreen.bind(this)}
                    image={item.image}/>)
            });
    }

    goToScreen(id){
      switch(id) {
          case 1:
              this.props.navigation.navigate('Docs');
              break;
          case 2:
              this.props.navigation.navigate('Admission');
              break;
          case 3:
              this.props.navigation.navigate('Language');
              break;
          case 4:
              this.props.navigation.navigate('Induction');
              break;
          case 5:
              this.props.navigation.navigate('Platform');
              break;
          case 6:
              this.props.navigation.navigate('Credential');
              break;
          case 7:
              this.props.navigation.navigate('First');
              break;
          case 8:
              this.props.navigation.navigate('Directory');
              break;
          case 9:
              this.props.navigation.navigate('Schoolar');
              break;
          case 10:
              this.props.navigation.navigate('Map');
              break;
      }
    }
    goToProfile(){
      this.props.navigation.navigate('Profile');
    }

  render() {

    return (
      <View
        style={styles.container}>
        <ScrollView>
          <ImageBackground
            style = {styles.headerContainer}
            source={require('./../images/header_welcome.png')}>
            <TouchableHighlight
            onPress={ () => { this.goToProfile(this) }}>
              <View style={styles.headerFunction}>
                  <Image
                    style={styles.profileicon}
                    source={require('./../images/btn_mi_perfil.png')}/>
                  <Text style={ styles.welcomeText }>BIENVENIDO</Text>
              </View>
            </TouchableHighlight>
          </ImageBackground>
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
  itemsContainer: {
    flex:1,
    flexDirection:'row',
    flexWrap:'wrap',
    marginRight:10,
    marginTop:20,
    marginLeft:5
  },
  iconText:{
    fontSize: 10,
    color:'gray'
  },
  headerContainer: {
    flex:1,
    height:190
  },
  headerFunction: {
    flexDirection:'row',
    flexWrap:'wrap'
  },
  profileicon: {
    width:80,
    height:80,
    marginLeft:20,
    marginTop:50,
    marginRight:10
  },

  welcomeText:{
    fontSize:32,
    marginLeft:20,
    marginTop:70,
    fontFamily: 'Avenir',
    color: 'white'
  },
});
