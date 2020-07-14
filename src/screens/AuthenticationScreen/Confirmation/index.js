import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  SafeAreaView,
  AsyncStorage
} from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api';
import { Auth } from 'aws-amplify';
import NavigationUtils from '../../../utils/navigationUtils';
import Env from '../../../utils/envUtils';
import TextUtils from '../../../utils/textUtils';
import TrackedTouchableOpacity from '../../../components/TouchableOpacity';
import TextInputLayout from '../../../components/TextInputLayout/textInputLayout';
import Icon from '../../../components/Icon';
import Loader from '../../../components/Loader';
import generalStyles from '../../../style';
import styles from './styles';
import StyleConstants from '../../../style/styleConstants';
import Utils from '../../../utils/utils';
import APIUtils from '../../../utils/apiUtils';
import assetUtils from '../../../utils/assetUtils';
// import Analytics from '../utils/analyticsUtils';

const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default class ConfirmationScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          user: PropTypes.shape({
            email: PropTypes.string.isRequired
          }).isRequired
        }).isRequired
      }).isRequired,
      navigate: PropTypes.func.isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      email: this.props.navigation.state.params.user.email,
      confirmation_code: '',
      savingMessage: 'loading'
    };
  }

  onLoginSuccess = () => {
    NavigationUtils.navigate('App');
  };

  onConfirmError = (err) => {
    Utils.showAlert(
      'Whoops!',
      err.message || err,
      'Try again',
      Utils.dismissAlert,
      null,
      null
    );
    this.setState({ confirming: false });
  };

  onConfirmClick = async () => {
    const { confirming, confirmation_code } = this.state;
    const { next, user: { userId } } = this.props.navigation.state.params;
    if (confirming) return;

    if (!confirmation_code) {
      if (!TextUtils.isValidName(confirmation_code)) {
        this.confirmationInput.setError('Please enter your confirmation code.');
        return;
      }
    }

    this.setState({ confirming: true });

    Auth.confirmSignUp(userId, confirmation_code)
      .then(() => {
        Auth.signIn(userId, 'Password1!')
          .then(() => {
            if (next === 'Terms') this.submitProfileDate();
            else NavigationUtils.navigate(next, { ...this.props.navigation.state.params });
          })
          .catch(this.onLoginError);
      })
      .catch(this.onConfirmError);
  };

  getDobString = (dob) => {
    const dateString = dob.split(' ')[0];
    const dateNumber = Number(dateString.substr(0, dateString.length - 2));
    const monthString = dob.split(' ')[1];
    const monthNumber = monthArray.indexOf(monthString) + 1;
    return `${(monthNumber < 10 ? '0' : '') + monthNumber}-${dateNumber < 10 ? '0' : ''}${dateNumber}`;
  }

  imageUploadCallback = (progress) => {
    const percentage = Math.round((progress.loaded / progress.total) * 100);
    if (percentage < 100) {
      this.setState({
        savingMessage: `Uploading your photo. ${percentage}% complete.`
      });
    } else {
      this.setState({ savingMessage: 'Saving your information' });
    }
  };

  submitProfileDate = async () => {
    console.log(this.props.navigation.state.params);
    const {
      image, userId, firstName, lastName, dob, storeId, email
    } = this.props.navigation.state.params.user;
    // update profile image to S3

    const picName = await assetUtils.uploadImage(
      image,
      this.imageUploadCallback,
    );

    try {
      const param = {
        yumdob: dob,
        yumstoreid: storeId,
        userEmailAddress: email
      };
      const response = await APIUtils.createEmployee(
        picName,
        param.yumdob,
        param.yumstoreid,
        param.userEmailAddress
      );
      console.log('Set profile data: ', response);
      this.saveUserData();
      NavigationUtils.navigate('Terms');
      this.setState({ confirming: false });
    } catch (err) {
      console.log('error: ', err);
    }
  }

  saveUserData = () => {
    AsyncStorage.setItem('user', JSON.stringify({
      email: this.props.navigation.state.params.user.userId
    }));
  }

  onChangeText = (textInputLayout: TextInputLayout) => {
    if (textInputLayout.id === 1) {
      if (TextUtils.hasValue(textInputLayout.text)) {
        this.setState({ confirmation_code: textInputLayout.text });
      } else {
        this.setState({ confirmation_code: '' });
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
    const {
      confirming, email, submitting, savingMessage
    } = this.state;
    const submitDisabled = !this.state.confirmation_code || this.state.confirmation_code.length < 6;
    if (confirming) {
      return (
        <View style={styles.innerContainer}>
          <Loader
            text={savingMessage}
            color={StyleConstants.colors.davyGray}
          />
        </View>
      );
    }
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={styles.scrollView}
          keyboardShouldPersistTaps="never"
          scrollEnabled={false}
        >
          <View style={styles.scrollViewContainer}>
            <Text style={styles.H1}>YOU'VE GOT MAIL</Text>
            <Text style={styles.intro}>
              {`We have sent you a confirmation code to your email (${email}). Please enter it below to confirm your email address.`}
            </Text>
            <View
              style={[
                generalStyles.alignCenter,
                { marginTop: StyleConstants.getSpacing(8) }
              ]}
            >
              <Icon
                name="onboarding-envelope"
                size={120}
                color={StyleConstants.colors.colorPrimary}
              />
            </View>
            <TextInputLayout
              style={styles.textInput}
              placeholder="Confirmation code *"
              keyboardType={'numeric'}
              autoCapitalize={'none'}
              checkValid={t => TextUtils.hasValue(t)}
              id={1}
              ref={(c) => {
                this.confirmationInput = c;
              }}
              onChangeText={this.onChangeText}
              returnKeyType={'next'}
              textContentType={'none'}
              onSubmitEditing={this.onConfirmClick}
            />
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TrackedTouchableOpacity
            style={[
              generalStyles.button,
              submitDisabled ? styles.buttonDisabled : null
            ]}
            onPress={this.onConfirmClick}
            activeOpacity={0.7}
            disabled={submitDisabled}
            name={Env.getEnvParam('google.events.confirmEmail')}
          >
            {confirming ? (
              <ActivityIndicator color={StyleConstants.colors.white} />
            ) : (
              <Text style={generalStyles.buttonText}>CONFIRM</Text>
            )}
          </TrackedTouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
