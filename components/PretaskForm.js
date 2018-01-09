import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  DatePickerIOS,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import CheckBox from 'react-native-checkbox';
import SignaturePad from 'react-native-signature-pad';

export default class PretaskForm extends Component {
  constructor() {
    super();
    this.state = {
      employee_name: '',
      employee_email: '',
      project_id: null,
      company: '',
      date: '',
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
      signature: '',
    };
  }

  setUsers() {
    this.setState({
      employee_name: this.props.user,
      employee_email: this.props.userEmail,
      employee_id: this.props.userID,
    });
  }

  _signaturePadChange({ base64DataUrl }) {
    this.setState({ signature: base64DataUrl });
  }

  showSubmitButton() {
    if (this.state.signature) {
      return (
        <TouchableOpacity
          onPress={() => this.postForm()}
        >
          <View style={styles.button}>
            <Text style={{ fontSize: 16 }}>Submit</Text>
          </View>
        </TouchableOpacity>
      );
    }
    return null;
  }

  checkInputs() {
    const keys = Object.keys(this.state);
    let error = false;
    keys.forEach((key) => {
      if (this.state[key] !== false && this.state[key] !== null && !this.state[key].length) {
        error = true;
      }
    });
    return error;
  }

  postForm() {
    // if (this.checkInputs()) {
    //   Alert.alert('Please complete all fields');
    //   return;
    // }
    // http://localhost:4000
    fetch('https://construction-forms-backend.herokuapp.com/api/v1/forms/pretask', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'content-type': 'application/json',
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
        signature: this.state.signature,
      }),
    })
      .then(() => {
        Alert.alert('Form Submitted Successfully');
        this.props.setView('home');
      });
  }


  render() {
    return (
      <ScrollView style={styles.scrollArea}>
        <View style={styles.container}>
          <Text style={styles.header}>
            Pretask Plan Form
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
              this.setState({ project_id: text });
              this.setUsers();
            }}
          />

          <Text>Company</Text>
          <TextInput
            autoCorrect={false}
            style={styles.smallInput}
            onChangeText={text => this.setState({ company: text })}
          />

          <Text style={{ marginTop: 20 }}>Date</Text>
          <DatePickerIOS
            date={this.state.date}
            onDateChange={newDate => this.setState({ date: newDate })}
          />

          <Text>Crew Size</Text>
          <TextInput
            autoCorrect={false}
            style={styles.smallInput}
            onChangeText={text => this.setState({ crewSize: text })}
          />

          <CheckBox
            containerStyle={{ marginTop: 10 }}
            labelLines={2}
            labelStyle={{ color: 'black' }}
            label="Does every crew member know how to use assigned tools & equipment?"
            onChange={checked => this.setState({
              areaInspected: checked,
            })}
          />

          <CheckBox
            containerStyle={{ marginTop: 10 }}
            labelLines={2}
            labelStyle={{ color: 'black' }}
            label="Does this work require special training?"
            onChange={checked => this.setState({
              requireTraining: checked,
            })}
          />

          <CheckBox
            containerStyle={{ marginTop: 10 }}
            labelLines={2}
            labelStyle={{ color: 'black' }}
            label="Do you need to review an MSDS to proceed with this work?"
            onChange={checked => this.setState({
              msdsReviewed: checked,
            })}
          />

          <CheckBox
            containerStyle={{ marginTop: 10 }}
            labelLines={2}
            labelStyle={{ color: 'black' }}
            label="Is there adequate lighting and access?"
            onChange={checked => this.setState({
              adequateLighting: checked,
            })}
          />

          <CheckBox
            containerStyle={{ marginTop: 10 }}
            labelLines={2}
            labelStyle={{ color: 'black' }}
            label="Will weather conditions affect the safety or quality of this work?"
            onChange={checked => this.setState({
              weatherConditions: checked,
            })}
          />

          <CheckBox
            containerStyle={{ marginTop: 10 }}
            labelLines={2}
            labelStyle={{ color: 'black' }}
            label="Does this task require shutdown of systems or equipment?"
            onChange={checked => this.setState({
              equipmentShutDown: checked,
            })}
          />

          <CheckBox
            containerStyle={{ marginTop: 10 }}
            labelLines={2}
            labelStyle={{ color: 'black' }}
            label="Is there any potential to impact existing Owner or Construction activity? "
            onChange={checked => this.setState({
              impactOwner: checked,
            })}
          />

          <CheckBox
            containerStyle={{ marginTop: 10 }}
            labelLines={2}
            labelStyle={{ color: 'black' }}
            label="Have shop drawings, contract drawings, and as-builts been reviewed? "
            onChange={checked => this.setState({
              planReview: checked,
            })}
          />

          <CheckBox
            containerStyle={{ marginTop: 10 }}
            labelLines={2}
            labelStyle={{ color: 'black' }}
            label="Will there be any discharge of fluids? "
            onChange={checked => this.setState({
              fluidDischarge: checked,
            })}
          />

          <CheckBox
            containerStyle={{ marginTop: 10 }}
            labelLines={2}
            labelStyle={{ color: 'black' }}
            label="Do other subcontractors need to be involved?"
            onChange={checked => this.setState({
              subInvolvement: checked,
            })}
          />

          <CheckBox
            containerStyle={{ marginTop: 10 }}
            labelLines={2}
            labelStyle={{ color: 'black' }}
            label="Does this task require any special permits/procedures?"
            onChange={checked => this.setState({
              specialPermits: checked,
            })}
          />

          <CheckBox
            containerStyle={{ marginTop: 10 }}
            labelLines={2}
            labelStyle={{ color: 'black' }}
            label="Employee is assigned a buddy/partner?"
            onChange={checked => this.setState({
              buddyAssignment: checked,
            })}
          />

          <CheckBox
            containerStyle={{ marginTop: 10 }}
            labelLines={3}
            labelStyle={{ color: 'black' }}
            label="Crew knows location of fire extinguishers, eyewashes, defibulators?"
            onChange={checked => this.setState({
              safetyLocations: checked,
            })}
          />

          <CheckBox
            containerStyle={{ marginTop: 10, marginBottom: 20 }}
            labelLines={2}
            labelStyle={{ color: 'black' }}
            label="Does this work involve any heavy or repetitive lifting?"
            onChange={checked => this.setState({
              lifting: checked,
            })}
          />

          <Text style={{ fontSize: 16 }}>Identify any hazards that will be faced during this work</Text>
          <TextInput
            multiline={true}
            style={styles.bigInput}
            onChangeText={text => this.setState({ hazards: text })}
          />

          <Text style={{
            fontSize: 16,
            textAlign: 'center',
            marginTop: 15,
            marginBottom: 5,
          }}
          >
              Sign Below
          </Text>
          <SignaturePad
            onChange={({ base64DataUrl }) => this.setState({ signature: base64DataUrl })}
            style={{
              backgroundColor: 'white',
              flex: 1,
              height: 150,
            }}
          />

          <View>
            {this.showSubmitButton()}
          </View>

        </View>
      </ScrollView>
    );
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
    margin: 40,
  },
  header: {
    fontSize: 36,
    marginTop: 15,
    marginBottom: 15,
    textAlign: 'center',
  },
  smallInput: {
    padding: 5,
    height: 40,
    marginTop: 5,
    marginBottom: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  bigInput: {
    padding: 5,
    height: 120,
    marginTop: 5,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  picker: {
    height: 40,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginTop: 20,
  },
});

PretaskForm.propTypes = {
  userEmail: PropTypes.string,
  userID: PropTypes.number,
  user: PropTypes.string,
  setView: PropTypes.func,
};
