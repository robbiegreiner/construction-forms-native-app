import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';


export default class Login extends Component<{}> {
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    };
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.login}>
          Login Here
        </Text>
        <Text>
          {this.state.email}
        </Text>
        <Text>
          {this.state.password}
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
