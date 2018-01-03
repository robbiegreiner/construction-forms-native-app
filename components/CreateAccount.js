import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Picker
} from 'react-native';

import firebase from '../firebase';


export default class CreateAccount extends Component<{}> {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      position: '',
      phone: '',
      name: ''
    };
  }

  createUser(email, password, position, phone, name) {
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(response => this.props.setUser(response.email))
      .then(this.postEmployee(email, position, phone, name))
      //catch error here
  }

  postEmployee(email, position, phone, name) {
    fetch(`http://localhost:4000/api/v1/employees`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          email, position, phone, name
        })
      }
    )
    .then(res => res.json())
    .catch(error => { throw error; })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.login}>
          Create Account Here
        </Text>
        <TextInput
          style={{height:40}}
          placeholder="name"
          onChangeText={(text) => this.setState({name: text})}
        />
        <TextInput
          style={{height:40}}
          placeholder="position"
          onChangeText={(text) => this.setState({position: text})}
        />
        <TextInput
          style={{height:40}}
          placeholder="phone"
          onChangeText={(text) => this.setState({phone: text})}
        />
        <TextInput
          style={{height:40}}
          placeholder="email"
          onChangeText={(text) => this.setState({email: text})}
        />
        <TextInput
          style={{height:40}}
          secureTextEntry="true"
          placeholder="password"
          onChangeText={(text) => this.setState({password: text})}
        />

        <Button
          onPress={() => this.createUser(
            this.state.email,
            this.state.password,
            this.state.position,
            this.state.phone,
            this.state.name
          )}
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
