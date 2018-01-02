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

export default class HotworkForm extends Component <{}> {
  constructor(){
    super();
    this.state = {
      employee_name: '',
      employee_email: '',
      project_id: '',
      company: '',
      date: '',
      firewatchRequirement: '',
      timeStart: '',
      finishTime: '',
      areaInspected: false,
      fireExtinguisher: false,
      flammablesRemoved: false,
      smokeDetectorsDisabled: false,
      sprinklerHeadsProtected: false
    }
  }

  postForm() {
    Alert.alert('hey')
    fetch('http://localhost:4000/api/v1/forms/hotwork', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-type' : 'application/json'
      },
      body: JSON.stringify({
        employee_name: this.state.employee_name,
        employee_email: this.state.employee_email
      })
    });
  };

  render(){
    return (
      <View>

        <Text style={styles.header}>
          Hotwork Permit
        </Text>

        <Text>Employee Name</Text>
        <TextInput
          style={styles.smallInput}
          onChangeText={(text) => this.setState({ employee_name: text })}
        />

        <Text>Email</Text>
        <TextInput
          style={styles.smallInput}
          onChangeText={(text) => this.setState({ employee_email: text })}
        />

        <Text>Project ID</Text>
        <TextInput
          style={styles.smallInput}
          onChangeText={(text) => this.setState({ project_id: text })}
        />

        <Text>Company</Text>
        <TextInput
          style={styles.smallInput}
          onChangeText={(text) => this.setState({ company: text })}
        />

        <Text>Date</Text>
        <TextInput
          style={styles.smallInput}
          onChangeText={(text) => this.setState({ date: text })}
        />

        <Text>Fire Watch Requirement</Text>
        <TextInput
          style={styles.smallInput}
          onChangeText={(text) => this.setState({ firewatchRequirement: text })}
        />

        <Text>Start Time</Text>
        <TextInput
          style={styles.smallInput}
          onChangeText={(text) => this.setState({ timeStart: text })}
        />

        <Text>Finish Time</Text>
        <TextInput
          style={styles.smallInput}
          onChangeText={(text) => this.setState({ finishTime: text })}
        />


        <Button
          onPress={() => this.postForm()}
          title="Submit"
        />

      </View>
    )
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
  smallInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});
