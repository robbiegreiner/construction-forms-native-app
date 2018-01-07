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
  ScrollView,
  TouchableOpacity
} from 'react-native';
import CheckBox from 'react-native-checkbox';
import SignaturePad from 'react-native-signature-pad';
import Demo from './Demo'

export default class HotworkForm extends Component <{}> {
  constructor(){
    super();
    this.state = {
      employee_name: null,
      employee_email: null,
      employee_id: null,
      project_id: null,
      company: '',
      date: new Date(),
      firewatchRequirement: '',
      timeStart: '',
      finishTime: '',
      areaInspected: false,
      fireExtinguisher: false,
      flammablesRemoved: false,
      smokeDetectorsDisabled: false,
      sprinklerHeadsProtected: false,
      signature: null
    }
  }

  _signaturePadError(error){
    console.error(error);
  };

  _signaturePadChange({base64DataUrl}){
    this.setState({signature: base64DataUrl});
  };

  setUsers() {
    this.setState({
      employee_name: this.props.user,
      employee_email: this.props.userEmail,
      employee_id: this.props.userID,
    })
  }

  checkInputs() {
    const keys = Object.keys(this.state);
    let error = false;
    keys.forEach(key => {
      if(this.state[key] !== false && this.state[key] !== null && !this.state[key].length){
        error = true;
      }
    })
    return error;
  }

  postForm() {
    if(this.checkInputs()){
      Alert.alert('Please complete all fields');
      return;
    }

    fetch('http://localhost:4000/api/v1/forms/hotwork', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-type' : 'application/json'
      },
      body: JSON.stringify({
        employee_name: this.state.employee_name,
        employee_email: this.state.employee_email,
        employee_id: this.state.employee_id,
        project_id: this.state.project_id,
        company: this.state.company,
        date: this.state.date,
        firewatchRequirement: this.state.firewatchRequirement,
        areaInspected: this.state.areaInspected,
        fireExtinguisher: this.state.fireExtinguisher,
        flammablesRemoved: this.state.flammablesRemoved,
        smokeDetectorsDisabled: this.state.smokeDetectorsDisabled,
        sprinklerHeadsProtected: this.state.sprinklerHeadsProtected,
        signature: this.state.signature,
      })
    })
      .then(() => {
      Alert.alert('Form Submitted Successfully')
      this.props.setView('home');
    })
      .catch(error => {
        Alert.alert(error.message);
      })
  };

  showSubmitButton() {
    if(this.state.signature) {
      return(
        <TouchableOpacity
          onPress={() => this.postForm()}
          >
          <View style={styles.submitButton}>
            <Text style={{fontSize:16}}>Submit</Text>
          </View>
        </TouchableOpacity>

      )
    }
  }

  render(){
    return (
      <ScrollView style={styles.scrollArea}>
        <View style={styles.container}>
          <Text style={styles.header}>
            Hotwork Permit
          </Text>
          <Button
            style={styles.backButton}
            onPress={() => this.props.setView('home')}
            title="Go Back"
          />

          <Text>Employee Name</Text>
          <TextInput
            autoCorrect={false}
            value={this.props.user}
            style={styles.smallInput}
          />

          <Text>Email</Text>
          <TextInput
            autoCorrect={false}
            value={this.props.userEmail}
            style={styles.smallInput}
          />

          <Text>Project ID</Text>
          <TextInput
            autoCorrect={false}
            style={styles.smallInput}
            onChangeText={(text) => {
              this.setState({ project_id: text })
              this.setUsers()}}
          />

          <Text>Company</Text>
          <TextInput
            autoCorrect={false}
            style={styles.smallInput}
            onChangeText={(text) => this.setState({ company: text })}
          />

          <Text style={{marginTop:20}}>Date</Text>
          <DatePickerIOS
            date={this.state.date}
            onDateChange={(newDate) => this.setState({date: newDate})}
          />

          <Text style={{marginTop:10}}>Fire Watch Requirement</Text>
          <TextInput
            autoCorrect={false}
            style={styles.fireInput}
            onChangeText={(text) => this.setState({ firewatchRequirement: text })}
          />

          <CheckBox
            label='Area Inspected'
            containerStyle={{marginTop:10}}
            labelStyle={{color:'black'}}
            onChange={(checked) => this.setState({
              areaInspected: checked
            })}
          />

          <CheckBox
            label='Fire Extinguisher Present'
            containerStyle={{marginTop:10}}
            labelStyle={{color:'black'}}
            onChange={(checked) => this.setState({
              fireExtinguisher: checked
            })}
          />

          <CheckBox
            labelLines={2}
            labelStyle={{color:'black'}}
            containerStyle={{marginTop:10}}
            label='All flammables and combustibles removed from the area'
            onChange={(checked) => this.setState({
              flammablesRemoved: checked
            })}
          />

          <CheckBox
            labelStyle={{color:'black'}}
            containerStyle={{marginTop:10}}
            label='Smoke Detectors in area are disabled'
            onChange={(checked) => this.setState({
              flammablesRemoved: checked
            })}
          />

          <CheckBox
            containerStyle={{marginTop:10, marginBottom: 10}}
            label='Sprinkler heads in area are protected'
            labelStyle={{color:'black'}}
            onChange={(checked) => this.setState({
              sprinklerHeadsProtected: checked
            })}
          />

          <Text style={{
            fontSize: 16,
            textAlign:'center',
            marginTop: 15,
            marginBottom:5}}>
              Sign Below
          </Text>
          <SignaturePad onError={this._signaturePadError}
          onChange={({base64DataUrl}) => this.setState({signature: base64DataUrl})}
          style={{
            backgroundColor: 'white',
            flex: 1,
            height: 150 }}
          />

          <View>
            {this.showSubmitButton()}
          </View>

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
    borderColor: 'black',
    borderWidth: 1
  },
  fireInput: {
    height: 40,
    marginTop: 5,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1
  },
  picker: {
    height: 40,
  },
  submitButton: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 20
  },
  backButton: {
    alignItems: 'flex-start'
  }
});
