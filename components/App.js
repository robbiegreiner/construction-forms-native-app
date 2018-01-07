import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import Landing from './Landing';
import Login from './Login';
import HotworkForm from './HotworkForm';
import PretaskForm from './PretaskForm';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      userEmail: null,
      userID: null,
      user: 'robbie',
      currentView: 'hotwork',
    };
    this.setUser = this.setUser.bind(this);
    this.setView = this.setView.bind(this);
  }

  setUser(userEmail, userID, user) {
    this.setState({ userEmail, userID, user });
  }

  setView(currentView) {
    this.setState({ currentView });
  }

  ifLoggedIn() {
    if (this.state.user && this.state.currentView === 'home') {
      return (
        <View style={styles.container}>
          <Landing
            user={this.state.user}
            setView={this.setView}
            setUser={this.setUser}
          />
        </View>
      );
    }

    return (
      <View>
        <Login setUser={this.setUser} />
      </View>
    );
  }

  render() {
    if (this.state.currentView === 'home') {
      return (
        <View style={styles.container}>
          {this.ifLoggedIn()}
        </View>
      );
    }

    if (this.state.currentView === 'hotwork') {
      return (
        <View style={styles.container}>
          <HotworkForm
            userEmail={this.state.userEmail}
            userID={this.state.userID}
            user={this.state.user}
            setView={this.setView}
          />
        </View>
      );
    }

    if (this.state.currentView === 'pretask') {
      return (
        <View style={styles.container}>
          <PretaskForm
            userEmail={this.state.userEmail}
            userID={this.state.userID}
            user={this.state.user}
            setView={this.setView}
          />
        </View>
      );
    }

    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8C712',
  },
});
