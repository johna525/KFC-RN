import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View
} from 'react-native';
import { Button } from 'native-base';
import Amplify, { Auth } from 'aws-amplify';
import awsConfig from '../../../../aws-exports';

Amplify.configure({ Auth: awsConfig });

const styles = require('./ConfirmationStyles');

class ConfirmationScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          user: PropTypes.shape({
            username: PropTypes.string.isRequired
          }).isRequired
        }).isRequired
      }).isRequired,
      navigate: PropTypes.func.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      username: this.props.navigation.state.params.user.username,
      confirmation_code: '',
      errorMessage: ''
    };
    this.confirmUser = this.confirmUser.bind(this);
  }

  confirmUser = () => {
    Auth.confirmSignUp(this.state.username, this.state.confirmation_code)
      .then(() => {
        this.props.navigation.navigate('App');
      })
      .catch((err) => {
        this.setState({ errorMessage: err.message });
      });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.fullSize}>
        <ScrollView
          contentContainerStyle={styles.confirmation_container}
          keyboardShouldPersistTaps="never"
          scrollEnabled={false}
        >
          <View style={styles.confirmation_code_container}>
            <Text style={styles.confirmation_text}>VERIFY EMAIL</Text>
            <Text>{this.state.errorMessage}</Text>
            <TextInput
              style={styles.confirmation_input}
              onChangeText={username => this.setState({ username })}
              value={this.props.navigation.state.params.user.username}
              placeholder="EMAIL ADDRESS"
              keyboardType="email-address"
              autoCapitalize="none"
              underlineColorAndroid="#fff"
            />
            <TextInput
              style={styles.confirmation_input}
              onChangeText={confirmation_code => this.setState({ confirmation_code })
              }
              placeholder="CONFIRMATION CODE"
              autoCapitalize="none"
              onFocus={() => this.setState({ confirmation_code: '' })}
              keyboardType="numeric"
              underlineColorAndroid="#fff"
            />
            <View style={{ marginTop: 20 }}>
              <Button
                full
                danger
                onPress={this.confirmUser}
                style={styles.confirmation_button}
              >
                <Text style={styles.confirmation_text}>CONFIRM</Text>
              </Button>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default ConfirmationScreen;
