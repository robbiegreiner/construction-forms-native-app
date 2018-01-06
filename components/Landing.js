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


export default class Landing extends Component<{}> {
  constructor(){
    super()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>
          Construction Forms
        </Text>
        <Text style={styles.user}>
          Welcome, {this.props.user}
        </Text>
        <Text style={styles.user}>
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
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8C712',
  },
  header: {
    marginTop: 180,
    fontSize: 36,
    textAlign: 'center',
  },
  user : {
    textAlign: 'center'
  },
  formButton: {
    height: 50,
    width: 200,
    color: 'blue'
  }
});
