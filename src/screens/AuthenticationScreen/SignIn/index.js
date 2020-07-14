import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import { Auth } from 'aws-amplify';
import NavigationUtils from '../../../utils/navigationUtils';
import Env from '../../../utils/envUtils';
import TextUtils from '../../../utils/textUtils';
import Utils from '../../../utils/utils';
import TrackedTouchableOpacity from '../../../components/TouchableOpacity';
import TextInputLayout from '../../../components/TextInputLayout/textInputLayout';
import generalStyles from '../../../style';
import StyleConstants from '../../../style/styleConstants';
import styles from './styles';
import Images from '../../../assets/images';
// import Analytics from '../utils/analyticsUtils';

const dimensions = Dimensions.get('window');

export default class SignInScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          username: PropTypes.string
        })
      }).isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      email: this.props.navigation.state.params
        ? this.props.navigation.state.params.username
        : '',
      password: '',
      loggingIn: false,
      focused: false
    };
  }

  onLoginSuccess = async () => {
    NavigationUtils.navigate('App');
  };

  onLoginError = (err) => {
    if (err.code === 'UserNotConfirmedException') {
      Utils.showAlert(
        'Whoops!',
        'User account is not confirmed. Please confirm using the code sent to your email.',
        'Confirm',
        () => {
          Utils.dismissAlert();
          NavigationUtils.replaceAndNavigate('Confirmation', {
            user: {
              email: this.state.email
            },
            next: 'SignIn'
          });
        },
        null,
        null
      );
    } else {
      Utils.showAlert(
        'Whoops!',
        err.message,
        'Try again',
        Utils.dismissAlert,
        null,
        null
      );
    }
    this.setState({ loggingIn: false });
  };

  onLoginClick = async () => {
    if (this.state.loggingIn) {
      return;
    }

    this.setState({ loggingIn: true });
    Auth.signIn(this.state.email, this.state.password)
      .then(this.onLoginSuccess)
      .catch(this.onLoginError);
  };

  onChangeText = (textInputLayout: TextInputLayout) => {
    if (textInputLayout.id === 1) {
      if (TextUtils.hasValue(textInputLayout.text)) {
        this.setState({ email: textInputLayout.text });
      } else {
        this.setState({ email: '' });
      }
    } else if (textInputLayout.id === 2) {
      if (TextUtils.hasValue(textInputLayout.text)) {
        this.setState({ password: textInputLayout.text });
      } else {
        this.setState({ password: '' });
      }
    }
  };

  alertOkClick = () => {
    Utils.dismissAlert();
  };

  render() {
    if (Platform.OS === 'ios') {
      return this.renderIOS();
    }
    return this.renderContent();
  }

  renderIOS() {
    return (
      <KeyboardAvoidingView
        style={generalStyles.flexOne}
        behavior="padding"
        enabled
      >
        {this.renderContent()}
      </KeyboardAvoidingView>
    );
  }

  clearFocusTimeout = null;

  renderContent() {
    const { focused, loggingIn } = this.state;
    const submitDisabled = !this.state.email || !this.state.password;
    return (
      <React.Fragment>
        <ScrollView
          style={styles.scrollView}
          keyboardShouldPersistTaps="never"
          scrollEnabled={false}
        >
          <ImageBackground
            style={[
              styles.header,
              {
                width: dimensions.width,
                height: Math.round((dimensions.width * 26) / 45)
              }
            ]}
            source={Images.loginHeader}
          >
            <Text style={styles.H1}>
              {this.props.navigation.state.params
                ? 'SIGN UP SUCCESSFUL'
                : 'SIGN IN'}
            </Text>
            <Text style={styles.intro}>
              {this.props.navigation.state.params
                ? 'Please log in below'
                : 'Log in with your email and password'}
            </Text>
          </ImageBackground>
          <View style={styles.scrollViewContainer}>
            <TextInputLayout
              style={styles.textInput}
              placeholder="Email *"
              keyboardType={'email-address'}
              autoCapitalize={'none'}
              checkValid={t => TextUtils.hasValue(t)}
              id={1}
              ref={(c) => {
                this.emailInput = c;
              }}
              onChangeText={this.onChangeText}
              returnKeyType={'next'}
              textContentType={'none'}
              onSubmitEditing={() => {
                this.passwordInput.focus();
              }}
              defaultText={
                this.props.navigation.state.params
                  ? this.props.navigation.state.params.username
                  : null
              }
            />

            <TextInputLayout
              style={styles.textInput}
              placeholder="Password"
              checkValid={t => TextUtils.hasValue(t)}
              secureTextEntry={true}
              id={2}
              ref={(c) => {
                this.passwordInput = c;
              }}
              blurOnSubmit={!!(this.state.email && this.state.password)}
              onChangeText={this.onChangeText}
              textContentType={'none'}
              onSubmitEditing={this.onLoginClick}
            />
          </View>
        </ScrollView>
        {!focused && (
          <View style={styles.buttonContainer}>
            <TrackedTouchableOpacity
              style={[
                generalStyles.button,
                submitDisabled ? styles.buttonDisabled : null
              ]}
              onPress={this.onLoginClick}
              activeOpacity={0.7}
              disabled={submitDisabled}
              name={Env.getEnvParam('google.events.signIn')}
            >
              {loggingIn ? (
                <ActivityIndicator color={StyleConstants.colors.white} />
              ) : (
                <Text style={generalStyles.buttonText}>SIGN IN</Text>
              )}
            </TrackedTouchableOpacity>
            <TrackedTouchableOpacity
              style={styles.signUp}
              onPress={() => NavigationUtils.replaceAndNavigate('SignUp')}
              name={Env.getEnvParam('google.events.signInGoToSignUp')}
            >
              <Text style={styles.signUpText}>
                Don’t have an account yet? Register here.
              </Text>
            </TrackedTouchableOpacity>
          </View>
        )}
      </React.Fragment>
    );
  }
}
