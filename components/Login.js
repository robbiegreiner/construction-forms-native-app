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

import firebase from '../firebase';
import CreateAccount from './CreateAccount';


export default class Login extends Component<{}> {
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
      .then(response => this.props.setUser(response.email))
      //catch error here
  }


  render() {
    if(!this.state.createAccount){
      return (
        <View style={styles.container}>
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
            secureTextEntry="true"
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
    marginTop: 180,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8C712',
  },
  login: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 24,
    marginBottom: 5,
  },
});
