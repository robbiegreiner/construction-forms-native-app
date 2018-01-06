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
      buddyAssignment: false,
      safetyLocations: false,
      lifting: false,
      hazards: '',
      signature: ''
    }
  }

  setUsers() {
    this.setState({
      employee_name: this.props.user,
      employee_email: this.props.userEmail,
      employee_id: this.props.userID,
    })
  }

  _signaturePadError(error){
    console.error(error);
  };

  _signaturePadChange({base64DataUrl}){
    this.setState({signature: base64DataUrl});
  };

  showSubmitButton() {
    if(this.state.signature) {
      return(
        <Button
        onPress={() => this.postForm()}
        title="Submit"
        />
      )
    }
  }

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
        employee_id: this.state.employee_id,
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
        buddyAssignment: this.state.buddyAssignment,
        safetyLocations: this.state.safetyLocations,
        lifting: this.state.lifting,
        hazards: this.state.hazards,
        signature: this.state.signature
      })
    });
  };

  //maybe use an array and generate the checkbox passing
  //{label and what to set?}

  render(){
    return (
      <ScrollView style={styles.scrollArea}>
        <View style={styles.container}>
          <Text style={styles.header}>
            Pretask Plan Form
          </Text>

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

          <Text>Date</Text>
          <DatePickerIOS
            date={this.state.date}
            onDateChange={(newDate) => this.setState({date: newDate})}
          />

          <Text>Crew Size</Text>
          <TextInput
            autoCorrect={false}
            style={styles.smallInput}
            onChangeText={(text) => this.setState({ crewSize: text })}
          />


          <CheckBox
            labelLines={2}
            labelStyle={{color:'black'}}
            label='Does every crew member know how to use assigned tools & equipment?'
            onChange={(checked) => this.setState({
              areaInspected: checked
            })}
          />

          <CheckBox
            labelLines={2}
            labelStyle={{color:'black'}}
            label='Does this work require special training?'
            onChange={(checked) => this.setState({
              requireTraining: checked
            })}
          />

          <CheckBox
            labelLines={2}
            labelStyle={{color:'black'}}
            label='Do you need to review an MSDS to proceed with this work?'
            onChange={(checked) => this.setState({
              msdsReviewed: checked
            })}
          />

          <CheckBox
            labelLines={2}
            labelStyle={{color:'black'}}
            label='Is there adequate lighting and access?'
            onChange={(checked) => this.setState({
              adequateLighting: checked
            })}
          />

          <CheckBox
            labelLines={2}
            labelStyle={{color:'black'}}
            label='Will weather conditions affect the safety or quality of this work?'
            onChange={(checked) => this.setState({
              weatherConditions: checked
            })}
          />

          <CheckBox
            labelLines={2}
            labelStyle={{color:'black'}}
            label='Does this task require shutdown of systems or equipment?'
            onChange={(checked) => this.setState({
              equipmentShutDown: checked
            })}
          />

          <CheckBox
            labelLines={2}
            labelStyle={{color:'black'}}
            label='Is there any potential to impact existing Owner or Construction activity? '
            onChange={(checked) => this.setState({
              impactOwner: checked
            })}
          />

          <CheckBox
            labelLines={2}
            labelStyle={{color:'black'}}
            label='Have shop drawings, contract drawings, and as-builts been reviewed? '
            onChange={(checked) => this.setState({
              planReview: checked
            })}
          />

          <CheckBox
            labelLines={2}
            labelStyle={{color:'black'}}
            label='Will there be any discharge of fluids? '
            onChange={(checked) => this.setState({
              fluidDischarge: checked
            })}
          />

          <CheckBox
            labelLines={2}
            labelStyle={{color:'black'}}
            label='Do other subcontractors need to be involved?'
            onChange={(checked) => this.setState({
              subInvolvement: checked
            })}
          />

          <CheckBox
            labelLines={2}
            labelStyle={{color:'black'}}
            label='Does this task require any special permits/procedures?'
            onChange={(checked) => this.setState({
              specialPermits: checked
            })}
          />

          <CheckBox
            labelLines={2}
            labelStyle={{color:'black'}}
            label='Employee is assigned a buddy/partner?'
            onChange={(checked) => this.setState({
              buddyAssignment: checked
            })}
          />

          <CheckBox
            labelLines={3}
            labelStyle={{color:'black'}}
            label='Crew knows location of fire extinguishers, eyewashes, defibulators?'
            onChange={(checked) => this.setState({
              safetyLocations: checked
            })}
          />

          <CheckBox
            labelLines={2}
            labelStyle={{color:'black'}}
            label='Does this work involve any heavy or repetitive lifting?'
            onChange={(checked) => this.setState({
              lifting: checked
            })}
          />

          <Text>Identify any hazards that will be faced during this work</Text>
          <TextInput
            style={styles.bigInput}
            onChangeText={(text) => this.setState({ hazards: text })}
          />

          <View>
            {this.showSubmitButton()}
          </View>

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
  bigInput: {
    height: 120,
    marginTop: 5,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1
  },
  picker: {
    height: 40,
  }
});
