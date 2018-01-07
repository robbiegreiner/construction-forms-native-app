import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  Picker,
  Image
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
    if(!name.length && !position.length && !phone.length){
      Alert.alert('Please complete all fields');
      return;
    }

    firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(() => this.postEmployee(email, position, phone, name))
      .catch(error => {
        Alert.alert(error.message);
        this.setState({email:'', password:'', position:'', phone:'', name:''})
        this.props.setUser(null,null,null)
      })
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
    .then(response => this.props.setUser(email, response.id, 'WTF!'))
    .catch(error => { throw error; })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Construction Forms
        </Text>
        <Image source={require('../assets/logo.png')} style={styles.logo}/>
        <Text style={styles.login}>
          Create Account Here
        </Text>
        <TextInput
          style={{height:40, width:200}}
          placeholder="name"
          value={this.state.name}
          onChangeText={(text) => this.setState({name: text})}
        />
        <TextInput
          style={{height:40, width:200}}
          placeholder="position"
          value={this.state.position}
          onChangeText={(text) => this.setState({position: text})}
        />
        <TextInput
          style={{height:40, width:200}}
          value={this.state.phone}
          placeholder="phone"
          onChangeText={(text) => this.setState({phone: text})}
        />
        <TextInput
          style={{height:40, width:200}}
          value={this.state.email}
          placeholder="email"
          onChangeText={(text) => this.setState({email: text})}
        />
        <TextInput
          style={{height:40, width:200}}
          secureTextEntry={true}
          value={this.state.password}
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
          title="Submit"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
    backgroundColor: '#E8C712',
  },
  header: {
    marginTop: 0,
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
