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
  ImageBackground,
  View,
  StatusBar,
  ScrollView
} from 'react-native';

//import documentsList from './../components/documentsList';

export default class AdmissionScreen extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {
      documentos: [{id:1, nombre:'Acta de Nacimiento', completed: false},
                   {id:2, nombre:'Certificado de Preparatoria', completed: false},
                   {id:3, nombre:'4 Fotografías infantiles', completed: false},
                   {id:4, nombre:'Solicitud de inscripción', completed: false},
                   {id:5, nombre:'CURP', completed: false},
                   {id:6, nombre:'Aviso de Privacidad', completed: false},
                   {id:7, nombre:'Copia identificación oficial', completed: false}];
    }
  }

  toggleDoc(docId){
    let documentos = [...this.state.documentos];
    let currentDoc = documentos.find( doc => doc.id === docId );
    currentDoc.completed = !currentDoc.completed;
    this.setState( documentos );
  }

  renderDocs(docs){
    return docs.map( doc => {
      return (<documentsList
                key={doc.id}
                id={doc.id}
                nombre={doc.nombre}
                completed={doc.completed}
                toggleDoc={doc.toggleDoc.bind(this)}/>)
    });
  }

  render() {
    return (
        <ImageBackground
          style = {styles.header}>
          source={require('./../images/header_admission.png')}>
        </ImageBackground>
        <View
          style = {styles.container}>
          <Text>
            Fecha: Lunes Viernes 1 de Diciembre.
          </Text>
        </View>
        <ScrollView style={styles.docsContainer}>
          {this.renderDocs(this.state.documentos)}
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white
  },
  header: {
    width: 400
  },
  docsContainer: {
    flex: 1,
    width: 300
    backgroundColor: Colors.orange
  }
});
