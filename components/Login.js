import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Image
} from 'react-native';

import firebase from '../firebase';
import CreateAccount from './CreateAccount';


export default class Login extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      createAccount: null
    };
  }

  login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(response => this.getEmployeeData(email))
      //catch error here
  }

  getEmployeeData(email) {
    fetch(`http://localhost:4000/api/v1/employees`)
      .then(response => response.json())
      .then((parsedResponse) => {
        const employee = parsedResponse.filter(person => {
          return person.email === email;
        })
        this.props.setUser(employee[0].email, employee[0].id, employee[0].name)
      });
  }


  render() {
    if(!this.state.createAccount){
      return (
        <View style={styles.container}>
          <Text style={styles.header}>
            Construction Forms
          </Text>
          <Image source={require('../assets/logo.png')} style={styles.logo}/>
          <Text style={styles.login}>
            Login Here
          </Text>
          <TextInput
            style={{height:40, width:200}}
            placeholder="email"
            onChangeText={(text) => this.setState({email: text})}
          />
          <TextInput
            style={{height:40, width: 200}}
            secureTextEntry={true}
            placeholder="password"
            onChangeText={(text) => this.setState({password: text})}
          />

          <Button
            onPress={() => this.login(this.state.email, this.state.password)}
            title="Login"
          />

          <Button
            onPress={() => {this.setState({createAccount: true})}}
            title="Create Account Here"
          />
        </View>

      );
    } else {
      return (
        <CreateAccount setUser={this.props.setUser}/>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8C712',
  },
  header: {
    fontSize: 36,
    textAlign: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 20,
    marginBottom: 20
  },
  login: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 24,
    marginBottom: 5,
  },
});
