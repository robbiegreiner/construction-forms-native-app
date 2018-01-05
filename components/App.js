import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Login from './Login';
import HotworkForm from './HotworkForm';
import PretaskForm from './PretaskForm';

export default class App extends Component<{}> {
  constructor(){
    super()
    this.state = {
      user: "robbieg@gmail.com",
      currentView: 'home'
    };
    this.setUser = this.setUser.bind(this);
  }

  setUser(email) {
    this.setState({user: email})
  }

  ifLoggedIn() {
    if(this.state.user && this.state.currentView === 'home'){
      return (
        <View style={styles.container}>
          <Text style={styles.header}>
            Construction Forms
          </Text>
          <Text style={styles.user}>
            Welcome, {this.state.user}
          </Text>
          <Text>
            Choose your form to complete!
          </Text>
          <Button
            style={styles.formButton}
            onPress={() => this.setState({currentView: 'hotwork'})}
            title="HotWork Permit"
          />
          <Button
            style={styles.formButton}
            onPress={() => this.setState({currentView: 'pretask'})}
            title="Pretask Plan Form"
          />
        </View>
      )
    } else {
      return <View>
        <Login setUser={this.setUser} />
      </View>
    }
  }

  render() {
    if(this.state.currentView === 'home'){
      return (
        <View style={styles.container}>
          {this.ifLoggedIn()}
        </View>
      );
    }

    if(this.state.currentView === 'hotwork'){
      return (
        <View style={styles.container}>
          <HotworkForm />
        </View>
      )
    }

    if(this.state.currentView === 'pretask'){
      return (
        <View style={styles.container}>
          <PretaskForm />
        </View>
      )
    }
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
