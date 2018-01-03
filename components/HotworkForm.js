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
  DatePickerIOS,
  ScrollView
} from 'react-native';
import CheckBox from 'react-native-checkbox';

export default class HotworkForm extends Component <{}> {
  constructor(){
    super();
    this.state = {
      employee_name: '',
      employee_email: '',
      project_id: '',
      company: '',
      date: new Date(),
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
        employee_email: this.state.employee_email,
        project_id: this.state.project_id,
        company: this.state.company,
        date: this.state.date,
        firewatchRequirement: this.state.firewatchRequirement,
        timeStart: this.state.timeStart,
        finishTime: this.state.finishTime,
        areaInspected: this.state.areaInspected,
        // fireExtinguisher: this.state.fireExtinguisher,
        // flammablesRemoved: this.state.flammablesRemoved,
        // smokeDetectorsDisabled: this.state.smokeDetectorsDisabled,
        // sprinklerHeadsProtected: this.state.employee_name
      })
    });
  };

  render(){
    return (
      <ScrollView style={styles.scrollArea}>
        <View style={styles.container}>
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
          <DatePickerIOS
            date={this.state.date}
            onDateChange={(newDate) => this.setState({date: newDate})}
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

          <CheckBox
            label='Area Inspected'
            onChange={(checked) => this.setState({
              areaInspected: checked
            })}
          />



          <Button
            onPress={() => this.postForm()}
            title="Submit"
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  scrollArea: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#E8C712',
  },
  container: {
    margin: 40
  },
  header: {
    fontSize: 36,
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
  },
  smallInput: {
    height: 40,
    marginTop: 5,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1
  },
  picker: {
    height: 40,
  }
});
