/*
**
 * INVIA
 * documentation Screen
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

import DocumentsList from './../components/DocumentsList';
const screen = Dimensions.get('window');
export default class DocumentationScreen extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      documentos: [{id:1, nombre:'Acta de Nacimiento', completed: false},
                   {id:2, nombre:'Certificado de Preparatoria', completed: false},
                   {id:3, nombre:'4 Fotografías infantiles', completed: false},
                   {id:4, nombre:'Solicitud de inscripción', completed: false},
                   {id:5, nombre:'CURP', completed: false},
                   {id:6, nombre:'Aviso de Privacidad', completed: false},
                   {id:7, nombre:'Copia identificación oficial', completed: false}]
    }
  }

  goBackScreen(){
    this.props.navigation.goBack();
  }

  toggleDoc(docId){
    let documentos = [...this.state.documentos];
    let currentDoc = documentos.find( doc => doc.id === docId );
    currentDoc.completed = !currentDoc.completed;
    this.setState( documentos );
  }

  renderDocs(docs){
    return docs.map( doc => {
      return (<DocumentsList
                key={doc.id}
                id={doc.id}
                nombre={doc.nombre}
                completed={doc.completed}
                toggleDoc={this.toggleDoc.bind(this)}/>)
    });
  }

  render() {
    return (
       <View style = {styles.container}>

        <View style = {styles.header}>
          <Image
            source={require('./../images/header_documentation.png')}>
          </Image>
        </View>
        <TouchableHighlight
         onPress={ this.goBackScreen.bind(this) }>
          <Image style={styles.iconBack} source={require('./../images/back-btn.jpg')}></Image>
        </TouchableHighlight>
          <Text style={styles.docsText}>
            Entrega los siguientes documentos en Servicios de Educación Superior [Arriba de Cafetería].
          </Text>
          <View style={styles.docsContainer}>
          <ScrollView >
            {this.renderDocs(this.state.documentos)}
          </ScrollView>
           </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
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
    height: 300,
    marginTop:20,
    backgroundColor: '#d9dbdd'
  },
  docsText: {
    fontFamily:'Avenir',
    fontSize:20
  }
});
