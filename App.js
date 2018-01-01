import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import CreateAccount from './CreateAccount';
import Login from './Login';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(){
    super()
    this.state = {
      user: null
    };
    this.setUser = this.setUser.bind(this);
  }

  setUser(email) {
    this.setState({user: email})
  }

  ifLoggedIn() {
    if(this.state.user){
      return (
        <View>
          <Text style={styles.header}>
            Construction Forms
          </Text>
          <Text style={styles.instructions}>
            Welcome To The Fucking Show
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>
        </View>
      )
    } else {
      return <View>
        <Login setUser={this.setUser} />
        <CreateAccount setUser={this.setUser}/>
      </View>
    }
  }


  render() {
    return (
      <View style={styles.container}>
        {this.ifLoggedIn()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8C712',
  },
  header: {
    fontSize: 36,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 24,
    marginBottom: 5,
  },
});
