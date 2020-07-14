import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import DatePicker from 'react-native-datepicker';
import Picker from 'react-native-picker';
import moment from 'moment-mini';
import { Auth } from 'aws-amplify';
import ApiUtils from '../../utils/apiUtils';
import NavigationUtils from '../../utils/navigationUtils';
import TextUtils from '../../utils/textUtils';
import AssetUtils from '../../utils/assetUtils';
import CacheUtils, { CacheConstants } from '../../utils/cacheUtils';
import Env from '../../utils/envUtils';
import TrackedTouchableOpacity from '../../components/TouchableOpacity';
import Loader from '../../components/Loader';
import TextInputLayout from '../../components/TextInputLayout/textInputLayout';
import Icon from '../../components/Icon';
import CONTENT from '../../configs/content/onboarding.json';
import StyleConstants from '../../style/styleConstants';
import generalStyles from '../../style';
import styles from './styles';

const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default class Onboarding extends React.Component {
  static stepMethods = ['renderProfileImage', 'renderBirthday', 'renderEmail'];

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      activeStep: 0,
      cachedChecked: false,
      submitting: false,
      savingMessage: 'loading',
      profileImage: null,
      profileUri: null,
      dob: '1st January',
      email: null,
      termsAccepted: null,
    };
  }

  async componentDidMount() {
    this.syncStateWithCache().then(() => {
      const {
        profileImage, dob, email, termsAccepted
      } = this.state;
      let cachedStep = null;
      if (profileImage && !dob) cachedStep = 1;
      if (profileImage && dob && (!email || !termsAccepted)) cachedStep = 2;
      if (cachedStep) this.setState({ activeStep: 0, cachedChecked: true });
      else this.setState({ cachedChecked: true });
    });

    const { dob } = this.props.navigation.state.params;
    this.setState({ dob: this.convertToDateFormat(dob) });
  }

  convertToDateFormat = (dob) => {
    const array = dob.split('/');
    const dd = Number(array[0]);
    let dateString = `${array[0]}th ${monthArray[Number(array[1]) - 1]}`;
    if (dd === 1) dateString = `1st ${monthArray[Number(array[1]) - 1]}`;
    else if (dd === 2) dateString = `2nd ${monthArray[Number(array[1]) - 1]}`;
    else if (dd === 3) dateString = `3rd ${monthArray[Number(array[1]) - 1]}`;
    return dateString;
  }

  async loadProfileImage(profileImage) {
    try {
      this.setState({
        profileImage,
        profileUri: profileImage.path
      });
    } catch (error) {
      this.setState({ profileImage, loading: false });
    }
  }

  async syncStateWithCache(save, remove) {
    const {
      loading,
      activeStep,
      cachedChecked,
      submitting,
      savingMessage,
      ...rest
    } = this.state;
    if (save) {
      Object.keys(rest).forEach((key) => {
        CacheUtils.set(`Onboarding:${key}`, this.state[key], {
          expiry: CacheConstants.expiry.LONG
        });
      });
    } else if (remove) {
      Object.keys(rest).map(key => CacheUtils.remove(`Onboarding:${key}`));
    } else {
      const cachedState = await Promise.all(
        Object.keys(rest).map(key => CacheUtils.get(`Onboarding:${key}`))
      );
      console.log(cachedState);
      if (cachedState) {
        Object.keys(rest).forEach((key, i) => {
          rest[key] = cachedState[i];
        });

        this.setState(rest);
      }
    }
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

  // completeOnboarding = async () => {
  //   try {
  //     await ApiUtils.createEmployee(
  //       this.state.profileImage,
  //       this.state.dob,
  //       this.state.email,
  //       this.imageUploadCallback
  //     );
  //     NavigationUtils.navigate('ReceivedBadge', {
  //       badge: 'newbie'
  //     });
  //   } catch (error) {
  //     console.log('Create Employee error: ', error);
  //   }
  // };

  handleNextClick = () => {
    const { activeStep, dob } = this.state;
    const { user: { firstName, lastName, userId } } = this.props.navigation.state.params;
    if (Onboarding.stepMethods[activeStep + 1]) {
      this.setState({ activeStep: activeStep + 1 });
      this.syncStateWithCache(true);
    } else {
      this.setState({ submitting: true });
      // this.completeOnboarding();
      Auth.signUp({
        username: userId,
        password: 'Password1!',
        attributes: {
          email: this.state.email,
          name: `${firstName} ${lastName}`
        }
      })
        .then((data) => {
          console.log(this.props.navigation.state.params.user);
          NavigationUtils.navigate('Confirmation', {
            user: {
              ...this.props.navigation.state.params.user,
              email: this.state.email,
              dob,
              image: this.state.profileImage
            },
            next: 'Terms'
          });
        })
        .catch(this.onRegisterError);
    }
  };

  handleImagePickerClick = () => {
    const options = {
      title: 'Select Profile Picture',
      cameraType: 'front',
      mediaType: 'photo',
      allowsEditing: true,
      noData: true
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (!response.didCancel && !response.error) {
        this.setState({ loading: true });
        this.loadProfileImage(response);
      }
    });
  };

  handleEmailChange = (textInputLayout) => {
    this.setState({
      email: TextUtils.isValidEmail(textInputLayout.text)
        ? textInputLayout.text
        : ''
    });
  };

  nextDisabled() {
    const {
      activeStep,
      profileImage,
      dob,
      email,
    } = this.state;
    if (activeStep === 0 && !profileImage) return true;
    if (activeStep === 1 && !dob) return true;
    if (activeStep === 2 && !email) return true;
    return false;
  }

  showDatePicker = () => {
    const dateArray = [];
    for (let i = 1; i < 31; i++) {
      dateArray.push(i);
    }
    Picker.init({
      pickerData: [
        monthArray,
        dateArray
      ],
      selectedValue: ['January', 1],
      onPickerConfirm: (data) => {
        console.log(data);
      },
      onPickerCancel: (data) => {
        console.log(data);
      },
      onPickerSelect: (data) => {
        console.log(data);
        const dateString = data[1] + (data[1] === 1 ? 'st' : data[1] === 2 ? 'nd' : data[1] === 3 ? 'rd' : 'th');
        this.setState({ dob: `${dateString} ${data[0]}` });
      }
    });
    Picker.show();
  }

  renderProgressIndicator() {
    const { activeStep } = this.state;
    const backDisabled = activeStep === 0;
    const nextDisabled = this.nextDisabled();
    const pips = [];
    for (let index = 0; index < Onboarding.stepMethods.length; index++) {
      pips.push(
        <View
          key={index}
          style={[
            styles.progressPip,
            index === activeStep ? styles.progressPipActive : ''
          ]}
        />
      );
    }
    return (
      <View style={styles.progress}>
        <TrackedTouchableOpacity
          disabled={backDisabled}
          onPress={() => this.setState({ activeStep: activeStep - 1 })}
          name={Env.getEnvParam('google.events.onboardingStepBack')}
          optionalValues={{
            label: 'toStep',
            value: this.state.activeStep
          }}
        >
          <Text
            style={[
              styles.progressButton,
              backDisabled ? styles.progressButtonDisabled : ''
            ]}
          >
            Prev
          </Text>
        </TrackedTouchableOpacity>
        <View style={styles.pipContainer}>{pips}</View>
        <TrackedTouchableOpacity
          disabled={nextDisabled}
          onPress={this.handleNextClick}
          name={Env.getEnvParam('google.events.onboardingStepNext')}
          optionalValues={{
            label: 'toStep',
            value: this.state.activeStep + 1
          }}
        >
          <Text
            style={[
              styles.progressButton,
              nextDisabled ? styles.progressButtonDisabled : ''
            ]}
          >
            Next
          </Text>
        </TrackedTouchableOpacity>
      </View>
    );
  }

  renderProfileImage() {
    const { loading, profileImage } = this.state;
    return (
      <View style={styles.profileImageContainer}>
        <View style={styles.profileImageIcon}>
          <View style={styles.profileImageIconSvg}>
            <Icon name="camera" size={32} color="#FFFFFF" />
          </View>
        </View>
        <TrackedTouchableOpacity
          style={styles.profileImage}
          onPress={this.handleImagePickerClick}
          name={Env.getEnvParam('google.events.onboardingAddProfileImage')}
          optionalValues={{
            label: 'toStep',
            value: this.state.activeStep + 1
          }}
        >
          {loading && (
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Loader backgroundColor="transparent" />
            </View>
          )}
          {!profileImage && !loading && (
            <Icon name="user" size={115} color="#cecece" />
          )}
          {profileImage && (
            <React.Fragment>
              <ImageBackground
                onLoad={() => this.setState({ loading: false })}
                source={profileImage}
                style={styles.profileImage}
              />
            </React.Fragment>
          )}
        </TrackedTouchableOpacity>
        {profileImage && (
          <Text style={styles.profileImageMessage}>LOOKING GOOD!</Text>
        )}
      </View>
    );
  }

  renderBirthday = () => {
    const { dob } = this.state;
    return (
      <React.Fragment>
        <View style={[generalStyles.alignCenter, styles.cakeIcon]}>
          <Icon
            name="onboarding-cake"
            size={110}
            color={StyleConstants.colors.colorPrimary}
          />
        </View>
        {/* <View style={generalStyles.alignCenter}>
          <TouchableOpacity onPress={() => this.showDatePicker()}>
            <View style={styles.dobView}>
              <Text style={styles.dobText}>{dob || 'Select your birthday'}</Text>
            </View>
          </TouchableOpacity>
        </View> */}
        <DatePicker
          style={[generalStyles.button, styles.dobButton]}
          date={dob}
          maxDate={moment()
            .subtract(16, 'years')
            .format('YYYY-MM-DD')}
          mode="date"
          placeholder="SELECT YOUR BIRTHDAY..."
          format="Do MMMM YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          androidMode="spinner"
          showIcon={false}
          customStyles={{
            dateIcon: styles.dobPickerIcon,
            dateInput: styles.dobInput,
            dateText: generalStyles.buttonText,
            placeholderText: [generalStyles.buttonText, styles.dobText]
          }}
          onDateChange={(date) => {
            this.setState({ dob: date });
            console.log('DOB: ', date);
          }}
        />
      </React.Fragment>
    );
  }

  renderEmail() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <View style={generalStyles.alignCenter}>
          <Icon
            name="onboarding-envelope"
            size={110}
            color={StyleConstants.colors.colorPrimary}
          />
        </View>
        <TextInputLayout
          style={styles.emailField}
          placeholder="Personal email address"
          keyboardType={'email-address'}
          autoCapitalize={'none'}
          checkValid={t => TextUtils.isValidEmail(t)}
          id={1}
          ref={(c) => {
            this.emailInput = c;
          }}
          onChangeText={this.handleEmailChange}
          returnKeyType={'done'}
          textContentType={'none'}
        />
        {/* <TrackedTouchableOpacity
          style={[generalStyles.flexRow, styles.termsContainer]}
          onPress={() => this.setState({ termsAccepted: !this.state.termsAccepted })
          }
          name={Env.getEnvParam('google.events.onboardingToggleAcceptTerms')}
          optionalValues={{
            label: 'accepted',
            value: this.state.termsAccepted
          }}
        >
          <View
            style={[
              styles.termsCheckbox,
              this.state.termsAccepted && styles.termsCheckboxChecked
            ]}
          >
            <Icon name="tick" size={12} color={StyleConstants.colors.white} />
          </View>
          <Text style={styles.termsText}>
            I agree to the{' '}
            <Text
              onPress={() => NavigationUtils.navigate('ViewTerms')}
              style={styles.termsLink}
            >
              terms and conditions
            </Text>
            .
          </Text>
        </TrackedTouchableOpacity> */}
      </KeyboardAvoidingView>
    );
  }

  renderActiveStep() {
    const { activeStep } = this.state;
    return this[Onboarding.stepMethods[activeStep]]();
  }

  render() {
    const {
      activeStep, cachedChecked, submitting, dob
    } = this.state;
    console.log(dob);
    if (!cachedChecked) return null;
    return (
      <SafeAreaView style={styles.screen}>
        <StatusBar
          backgroundColor={StyleConstants.colors.white}
          barStyle="dark-content"
        />
        <View style={styles.container}>
          {submitting ? (
            <View style={styles.innerContainer}>
              <Loader
                text={this.state.savingMessage}
                color={StyleConstants.colors.davyGray}
              />
            </View>
          ) : (
            <React.Fragment>
              {CONTENT.steps[activeStep].title && (
                <Text style={styles.H1}>
                  {CONTENT.steps[activeStep].title.toUpperCase()}
                </Text>
              )}
              {CONTENT.steps[activeStep].description && (
                <Text style={styles.description}>
                  {CONTENT.steps[activeStep].description}
                </Text>
              )}
              <View style={styles.innerContainer}>
                {this.renderActiveStep()}
              </View>
              {this.renderProgressIndicator()}
            </React.Fragment>
          )}
        </View>
      </SafeAreaView>
    );
  }
}
