import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View
} from 'react-native';
import { Button } from 'native-base';
import PropTypes from 'prop-types';
import Amplify, { Auth } from 'aws-amplify';
import awsConfig from '../../../../aws-exports';
import renderIf from '../../../utils/renderIf';

Amplify.configure({ Auth: awsConfig });

const styles = require('./ForgotPasswordStyles');

class ForgotPasswordScreen extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      resetCode: '',
      newPassword: '',
      errorMessage: '',
      resetPassword: false,
      recoverButtonText: 'RECOVER'
    };
    this.resetPassword = this.resetPassword.bind(this);
  }

  resetPassword = () => {
    if (this.state.resetPassword === true) {
      Auth.forgotPasswordSubmit(
        this.state.username,
        this.state.resetCode,
        this.state.newPassword
      )
        .then(() => {
          this.props.navigation.navigate('Login');
        })
        .catch((err) => {
          this.setState({ errorMessage: err.message });
        });
    } else {
      Auth.forgotPassword(this.state.username)
        .then(() => {
          this.setState({ resetPassword: true });
        })
        .catch((err) => {
          this.setState({ errorMessage: err.message });
        });
    }
  };

  resetPasswordFields = () => (
    <View>
      <TextInput
        style={styles.forgot_password_input}
        onChangeText={resetCode => this.setState({ resetCode })}
        placeholder="RESET CODE"
        autoCapitalize="none"
        onFocus={() => this.setState({ resetCode: '' })}
        keyboardType="numeric"
        underlineColorAndroid="#fff"
      />
      <TextInput
        style={styles.forgot_password_input}
        onChangeText={newPassword => this.setState({ newPassword })}
        placeholder="NEW PASSWORD"
        autoCapitalize="none"
        onFocus={() => {
          this.setState({ newPassword: '' });
          this.setState({ recoverButtonText: 'RESET' });
        }}
        secureTextEntry
        underlineColorAndroid="#fff"
      />
    </View>
  );

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.fullSize}>
        <ScrollView
          contentContainerStyle={styles.forgot_password_container}
          keyboardShouldPersistTaps="never"
          scrollEnabled={false}
        >
          <View style={styles.forgot_password_form_container}>
            <Text style={styles.forgot_password_text}>FORGOT PASSWORD</Text>
            <Text>{this.state.errorMessage}</Text>
            <TextInput
              style={styles.forgot_password_input}
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
              placeholder="EMAIL ADDRESS"
              autoCapitalize="none"
              keyboardType="email-address"
              onFocus={() => this.setState({ username: '' })}
              underlineColorAndroid="#fff"
            />
            {renderIf(this.state.resetPassword, this.resetPasswordFields())}
            <Button
              onPress={this.resetPassword}
              style={styles.forgot_password_button}
            >
              <Text style={styles.forgot_password_button_text}>
                {this.state.recoverButtonText}
              </Text>
            </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}

export default ForgotPasswordScreen;
