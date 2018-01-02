import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert
} from 'react-native';

import firebase from './firebase';


export default class CreateAccount extends Component<{}> {
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    };
  }

  createUser(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(response => this.props.setUser(response.email))
      //catch error here
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.login}>
          Create Account Here
        </Text>
        <TextInput
          style={{height:40}}
          placeholder="email"
          onChangeText={(text) => this.setState({email: text})}
        />
        <TextInput
          style={{height:40}}
          placeholder="password"
          onChangeText={(text) => this.setState({password: text})}
        />
        <Button
          onPress={() => this.createUser(this.state.email, this.state.password)}
          title="Create Account"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  login: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 24,
    marginBottom: 5,
  },
});
