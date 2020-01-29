import React, {Component} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/App';

export default class App extends Component {
  state = {
    texto: 'Meu primeiro App',
  };
  alterar = () => {
    this.setState({
      texto: this.state.texto ? '' : 'Meu primeiro App',
    });
  };

  render() {
    return (
       
      <View style={styles.content}>
        <TouchableOpacity style = {styles.botao} onPress = {this.alterar}>
          <Text>Mudar Estado</Text>
        </TouchableOpacity>
        <Text style={styles.titulo}> Atenção </Text>
        <Text style={styles.texto}> {this.state.texto} </Text>
      </View>
      
    );
  }
}
