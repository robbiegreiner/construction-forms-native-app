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
import SignaturePad from 'react-native-signature-pad';
import Demo from './Demo'

export default class PretaskForm extends Component <{}> {
  constructor(){
    super();
    this.state = {
      employee_name: '',
      employee_email: '',
      project_id: null,
      company: '',
      date: new Date(),
      crewSize: null,
      tools: false,
      requireTraining: false,
      msdsReviewed: false,
      adequateLighting: false,
      weatherConditions: false,
      equipmentShutDown: false,
      impactOwner: false,
      planReview: false,
      fluidDischarge: false,
      subInvolvement: false,
      specialPermits: false,
      buddyAssignments: false,
      lifting: false,
      hazards: false,
      signature: ''
    }
  }

  _signaturePadError(error){
    console.error(error);
  };

  _signaturePadChange({base64DataUrl}){
    this.setState({signature: base64DataUrl});
  };

  postForm() {
    Alert.alert('hey')
    fetch('http://localhost:4000/api/v1/forms/pretask', {
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
        crewSize: this.state.crewSize,
        tools: this.state.tools,
        requireTraining: this.state.requireTraining,
        msdsReviewed: this.state.msdsReviewed,
        adequateLighting: this.state.adequateLighting,
        weatherConditions: this.state.weatherConditions,
        equipmentShutDown: this.state.equipmentShutDown,
        impactOwner: this.state.impactOwner,
        planReview: this.state.planReview,
        fluidDischarge: this.state.fluidDischarge,
        subInvolvement: this.state.subInvolvement,
        specialPermits: this.state.specialPermits,
        buddyAssignments: this.state.buddyAssignments,
        lifting: this.state.lifting,
        hazards: this.state.hazards,
        signature: this.state.signature
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

          <CheckBox
            label='Area Inspected'
            onChange={(checked) => this.setState({
              areaInspected: checked
            })}
          />

          <CheckBox
            label='Fire Extinguisher Present'
            onChange={(checked) => this.setState({
              fireExtinguisher: checked
            })}
          />

          <CheckBox
            label='All flammables and combustibles removed from the area'
            onChange={(checked) => this.setState({
              flammablesRemoved: checked
            })}
          />

          <CheckBox
            label='Smoke Detectors in area are disabled'
            onChange={(checked) => this.setState({
              flammablesRemoved: checked
            })}
          />

          <CheckBox
            label='Sprinkler heads in area are protected'
            onChange={(checked) => this.setState({
              sprinklerHeadsProtected: checked
            })}
          />



          <Button
            onPress={() => this.postForm()}
            title="Submit"
          />



          <SignaturePad onError={this._signaturePadError}
          onChange={({base64DataUrl}) => this.setState({signature: base64DataUrl})}
          style={{ backgroundColor: 'white',
                        width: 300, height: 150 }}
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
