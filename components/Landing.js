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
import PropTypes from 'prop-types';


export default class Landing extends Component<{}> {
  constructor(){
    super()
  }

  signOut() {
    this.props.setUser();
    firebase.auth().signOut();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Construction Forms
        </Text>
        <Image source={require('../assets/logo.png')}
        style={styles.logo}/>
        <Text style={styles.user}>
          Welcome, {this.props.user}!
        </Text>
        <Text style={styles.title}>
          Choose your form to complete!
        </Text>
        <Button
          style={styles.formButton}
          onPress={() => this.props.setView('hotwork')}
          title="HotWork Permit"
        />
        <Button
          style={styles.formButton}
          onPress={() => this.props.setView('pretask')}
          title="Pretask Plan Form"
        />
        <Button
          style={styles.formButton}
          onPress={() => this.signOut()}
          title="Sign Out"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8C712',
    alignItems: 'center'
  },
  header: {
    marginTop: 100,
    fontSize: 36,
    textAlign: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 20,
    marginBottom: 20
  },
  user : {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 30,
    fontWeight: 'bold'
  },
  title : {
    textAlign: 'center',
    marginBottom: 10,
  },
  formButton: {
    height: 50,
    width: 200,
    color: 'blue'
  }
});
