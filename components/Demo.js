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

import SignaturePad from 'react-native-signature-pad';
// var SignaturePad = require('react-native-signature-pad');

export default class Demo extends Component <{}> {

  _signaturePadError(error){
    console.error(error);
  };

  _signaturePadChange({base64DataUrl}){
    console.log("Got new signature: " + base64DataUrl);
  };

  render () {
    // console.error(SignaturePad)
    return (
      <View style={{flex: 1}}>
        <Text>Here</Text>
          <SignaturePad onError={this._signaturePadError}
                        onChange={this._signaturePadChange}
                        style={{ backgroundColor: 'white',
                        width: 200, height: 200 }}
          />
      </View>
    )
  };


}
