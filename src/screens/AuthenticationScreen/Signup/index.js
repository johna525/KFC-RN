import React from 'react';
import {
  View,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import { Auth } from 'aws-amplify';
import { Content, Container } from 'native-base';
import { TextField } from 'react-native-material-textfield';
import Env from '../../../utils/envUtils';
import TextUtils from '../../../utils/textUtils';
import Utils from '../../../utils/utils';
import NavigationUtils from '../../../utils/navigationUtils';
import DeviceUtils from '../../../utils/deviceUtils';
import Images from '../../../assets/images';
import TextInputLayout from '../../../components/TextInputLayout/textInputLayout';
import TrackedTouchableOpacity from '../../../components/TouchableOpacity';
import StyleConstants from '../../../style/styleConstants';
import generalStyles from '../../../style';
import styles from './styles';

const dimensions = Dimensions.get('window');

export default class SignInScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      firstName: '',
      lastName: '',
      workemail: '',
      dob: '',
      role: '',
      storeId: '',
      status: '',
    };
  }

  onRegisterClick = async () => {
    NavigationUtils.navigate('ConfirmInfo', {
      user: {
        name: `${this.state.firstName} ${this.state.lastName}`,
        ...this.state,
        email: 'litian19901120@gmail.com'
      }
    });

    // Auth.signUp({
    //   username: this.state.personalEmail,
    //   password: 'Password1!',
    //   attributes: {
    //     email: this.state.personalEmail,
    //     name: `${this.state.firstName} ${this.state.lastName}`
    //   }
    // })
    //   .then((data) => {
    //     NavigationUtils.navigate('Confirmation', {
    //       name: `${this.state.firstName} ${this.state.lastName}`,
    //       ...data
    //     });
    //   })
    //   .catch(this.onRegisterError);
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

  renderContent() {
    const {
      userId, firstName, lastName, workemail, dob, role, storeId, status
    } = this.state;
    const { user } = this.props.navigation.state.params;
    return (
      <Container>
        <ScrollView
          style={styles.scrollView}
          keyboardShouldPersistTaps="never"
        >
          <View>
            <ImageBackground
              style={[
                styles.header,
                {
                  width: dimensions.width,
                  height:
                    Math.round((dimensions.width * 2) / 5)
                    + (DeviceUtils.isIphoneX() ? StyleConstants.getSpacing(16) : 0)
                }
              ]}
              source={Images.loginHeader}
            >
              <Text style={styles.H1}>SUBMITION</Text>
              <Text style={styles.intro}>Please confirm your profile</Text>
            </ImageBackground>
            <View style={styles.scrollViewContainer}>
              <TextField
                label={'User Id'}
                value={user.userId}
                disabled
              />
              <TextField
                label={'First name'}
                value={user.firstName}
                disabled
              />
              <TextField
                label={'Last name'}
                value={user.lastName}
                disabled
              />
              <TextField
                label={'Work Email'}
                value={user.workemail}
                disabled
              />
              <TextField
                label={'DOB'}
                value={user.dob}
                disabled
              />
              <TextField
                label={'Job Role'}
                value={user.role}
                disabled
              />
              <TextField
                label={'Store ID'}
                value={user.storeId}
                disabled
              />
              <TextField
                label={'Status'}
                value={user.status}
                disabled
              />
              <TextField
                label={'Personal Email'}
                value={user.email}
                disabled
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.registerButtonView}
            onPress={this.onRegisterClick}
          >
            <View style={styles.registerButtonView}>
              <Text style={generalStyles.buttonText}>CONFIRM</Text>
            </View>
          </TouchableOpacity>
          <TrackedTouchableOpacity
            style={styles.login}
            onPress={() => NavigationUtils.replaceAndNavigate('SignIn')}
            name={Env.getEnvParam('google.events.signUpGoToSignIn')}
          >
            <Text style={styles.loginText}>
              Already have an account? Log in here.
            </Text>
          </TrackedTouchableOpacity>
        </View>
      </Container>
    );
  }
}
