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
  View,
  StatusBar,
  ScrollView
} from 'react-native';

import documentsList from './../components/documentsList';

export default class MapScreen extends Component<{}> {
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
                toggleDoc={this.toggleDoc.bind(this)}/>)
    });
  }

  render() {
    return (
       <View>
        <Image
          style = {styles.header}>
          source={require('./../images/header_documentation.png')}>
        </Image>
        <View style = {styles.container}>
          <Text>
            Entrega los siguientes documentos en Servicios de Educación Superior Arriba de Cafetería.
          </Text>
          <ScrollView style={styles.docsContainer}>
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
    alignItems: 'center',
    backgroundColor: 'white'
  },
  header: {
    width: 400
  },
  docsContainer: {
    flex: 1,
    width: 300,
    backgroundColor: 'blue'
  }
});
