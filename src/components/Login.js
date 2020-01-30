import React, {Component} from 'react';
import {View, Text, Image, TextInput, TouchableOpacity, Alert} from 'react-native';
import styles from '../styles/App';

export default class Login extends Component {
  state = {
    email: ''
  }
  clicou = () => {
    Alert.alert("LOGIN", this.state.email)
  }

  render() {
    return (
      <View style={styles.content}>
        <Image
          source={require('../assets/beats_seo_card_1200x630-3.jpg')}
          style={styles.logo}></Image>
          <TextInput
            style = {styles.input}
            placeholder = "Digite seu e-mail"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          ></TextInput>
          <TextInput
            style = {styles.input}
            secureTextEntry = {true}
            placeholder = "Digite sua senha"
          ></TextInput>
          <TouchableOpacity 
            style = {styles.botao}
            onPress = { () => {this.clicou()}}
          >
            <Text style = {styles.btntxt}>Login</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
