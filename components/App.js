import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import CreateAccount from './CreateAccount';
import Login from './Login';
import HotworkForm from './HotworkForm';

export default class App extends Component<{}> {
  constructor(){
    super()
    this.state = {
      user: 'robbieg@gmail.com',
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
        <View>
          <Text style={styles.header}>
            Construction Forms
          </Text>
          <Text style={styles.instructions}>
            {this.state.user}
          </Text>
          <Button
            onPress={() => this.setState({currentView: 'hotwork'})}
            title="HotWork Permit"
          />
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
  }
});
