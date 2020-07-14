import React from 'react';
import {
  View, ImageBackground, Text, StatusBar, Linking, Platform, AsyncStorage, ActivityIndicator
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import SplashScreen from 'react-native-splash-screen';
import SafariView from 'react-native-safari-view';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import AWS from 'aws-sdk';
import { Auth } from 'aws-amplify';
import Images from '../../assets/images';
import Env from '../../utils/envUtils';
import NavigationUtils from '../../utils/navigationUtils';
import AuthUtils from '../../utils/authUserUtils';
import APIUtils from '../../utils/apiUtils';
import TrackedTouchableOpacity from '../../components/TouchableOpacity';
import WelcomeLogo from '../../components/WelcomeLogo';
import StyleConstants from '../../style/styleConstants';
import generalStyles from '../../style';
import styles from './styles';
import Loader from '../../components/Loader/index';

const jwtDecode = require('jwt-decode');


const CLIENT_ID = '4l8vk0al9s1bk0ac26ult7shr2';
const DOMAIN_PREFIX = 'kfc1010mvp';
const REGION = 'eu-central-1';
const CALLBACK_URI = 'kfc1010://callback/';

const loginURL = `https://${DOMAIN_PREFIX}.auth.${REGION}.amazoncognito.com/login?response_type=token&client_id=4l8vk0al9s1bk0ac26ult7shr2&redirect_uri=${CALLBACK_URI}`;
// const learningZoneURL = `https://kfclearningzone.yum.com/login?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URI}`;

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWelcome: true,
      given_name: '',
      decoded_data: {},
      savedUser: {},
      loggedIn: false,
      showButton: false,
      loading: false
    };
  }

  componentDidMount = () => {
    SplashScreen.hide();
    Linking.addEventListener('url', this.eventHandler);
    this.checkLoggedIn();
  };

  checkLoggedIn = async () => {
    try {
      const loggedIn = await AsyncStorage.getItem('user');
      this.setState({ showButton: true });
      if (loggedIn !== null) {
        this.setState({ loggedIn: true, savedUser: JSON.parse(loggedIn) });
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  eventHandler = (event) => {
    const { url } = event;
    if (Platform.OS === 'ios') SafariView.dismiss();
    if (url.indexOf('id_token') > -1) {
      const code = url.split('#')[1].split('&')[0].split('=')[1];
      this.setState({ loading: true });
      setTimeout(() => {
        this.setState({ loading: false });
        this.getTokenbyCode(code);
      }, 1500);
    } else if (url.indexOf('logout') > -1) {
      // log out action
    } else {
      // /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
      //   code
      // );
    }
  }

  getTokenbyCode = (code) => {
    const details = {
      grant_type: 'authorization_code',
      code,
      client_id: CLIENT_ID,
      // redirect_uri: 'https://fedsso.yum.com/idp'
      redirect_uri: `https://${DOMAIN_PREFIX}.auth.${REGION}.amazoncognito.com/login?response_type=token`
    };
    const formBody = Object.keys(details)
      .map(
        key => `${encodeURIComponent(key)}=${encodeURIComponent(details[key])}`
      )
      .join('&');

    console.log('Encoded data', JSON.stringify(formBody));
    const decoded = jwtDecode(formBody);

    const extractedToken = formBody
      .split('&')[1]
      .split('=')[1];
    // const realToken = jwtDecode(extractedToken);
    console.log('extracted token', extractedToken);

    this.authIntegration(extractedToken);
    console.log('Decoded Data: ', decoded);
    //  console.log('Real Token Data: ', realToken);

    this.setState({
      decoded_data: decoded,
      given_name: decoded.given_name
    });

    console.log('given name: ', this.state.given_name);

    fetch(
      'https://kfccultureapp.auth.eu-west-1.amazoncognito.com/login?response_type=token',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
      }
    )
      .then((res) => {
        if (!res.ok) {
          if (decoded['cognito:username'] === undefined) {
            this.handleSignUpLink();
            return;
          }
          const user = {
            userId: `user-${decoded['cognito:username']}`,
            firstName: decoded['custom:firstname'],
            lastName: decoded['custom:lastname'],
            workemail: decoded.email,
            dob: decoded['custom:dob'],
            role: decoded['custom:role'] === undefined ? 'None' : decoded['custom:role'],
            storeId: decoded['custom:storenumber'],
            status: decoded['custom:status'] === undefined ? 'None' : decoded['custom:status']
          };
          console.log('User ID: ', user.userId);
          Auth.signIn(user.userId, 'Password1!')
            .then(() => {
              this.saveUser(user.userId);
              this.props.navigation.navigate('Main');
            })
            .catch((e) => {
              console.log(e);
              this.props.navigation.navigate('Onboarding', { user });
            });
        }
      })
      .catch((error) => {
        alert(error);
      });
  }

  saveUser = async (email) => {
    AsyncStorage.setItem('user', JSON.stringify({
      email
    }));
  }


  pressHandler = async (url) => {
    if (Platform.OS === 'ios' && 0) SafariView.show({ url });
    else {
      NavigationUtils.navigate('AuthBrowser', { URI: url, onGetToken: token_url => this.eventHandler(token_url), backTo: 'Home' });
    }
  }

  authIntegration = (token) => {
    AWS.config = new AWS.Config({
      region: 'eu-central-1'
    });

    console.log('authIntegration!!!!');
    AWS.config.credentials = new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'eu-central-1:449efb64-bfc7-4000-87c5-be32dcdc346b',
      Logins: {
        'cognito-idp.eu-central-1.amazonaws.com/eu-central-1_J86767ySw': token
      }
    });

    AWS.config.credentials.get((err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Authenticated via Cognito UserPool only');
      }
    });
  }


  validateAuth = async () => {
    const userAccount = await AuthUtils.getUserAccount();
    console.log('Current User: ', userAccount);
    if (userAccount) {
      const userProfile = await APIUtils.getEmployee(userAccount.username);
      NavigationUtils.navigate(userProfile ? 'App' : 'Onboarding');
    } else this.setState({ showWelcome: true });
  };

  handleSignUpLink = async () => {
    if (this.state.loading) return;
    this.setState({ loading: true });
    if (this.state.loggedIn) {
      // go to home screen directly
      Auth.signIn(this.state.savedUser.email, 'Password1!')
        .then(() => {
          this.setState({ loading: false });
          this.props.navigation.navigate('Main');
        })
        .catch((e) => {
          this.setState({ loggedIn: false, loading: false });
          AsyncStorage.removeItem('user');
          console.log(e);
        });
    } else {
      this.setState({ loading: false });
      this.pressHandler(loginURL);
    }
  };

  renderWelcome() {
    const { showButton, loggedIn, loading } = this.state;
    return (
      <ImageBackground
        source={Images.homeBg}
        style={{ width: '100%', height: '100%' }}
      >
        <StatusBar
          backgroundColor={StyleConstants.colorWithAlpha('black', 0)}
          translucent
        />
        <LinearGradient
          style={styles.introGradient}
          colors={[
            StyleConstants.colorWithAlpha('black', 0.6),
            StyleConstants.colorWithAlpha('black', 0.8),
            StyleConstants.colorWithAlpha('black', 0.9)
          ]}
        />
        <View style={styles.introContainer}>
          <WelcomeLogo />
          <Text style={styles.introText}>
            Welcome home. This is your place to dish out some recognition, check
            your shifts and complete your training, all whilst having fun.
          </Text>

          <View style={styles.buttonContainer}>
            {
              showButton
              && <TrackedTouchableOpacity
                style={[
                  generalStyles.button,
                  generalStyles.buttonRed,
                  styles.introButton
                ]}
                onPress={this.handleSignUpLink}
                name={Env.getEnvParam('google.events.splashPageSignUp')}
              >
                {loading ? (
                  <ActivityIndicator color={StyleConstants.colors.white} />
                ) : (
                  <Text style={generalStyles.buttonText}>{loggedIn ? 'WELCOME BACK' : 'JOIN 1010'}</Text>
                )}
              </TrackedTouchableOpacity>
            }
          </View>
        </View>
      </ImageBackground>
    );
  }

  render() {
    const { showWelcome } = this.state;
    return (
      <View style={styles.screen}>
        {showWelcome ? (
          this.renderWelcome()
        ) : (
          <View style={styles.loader}>
            <Loader color={StyleConstants.colors.gray} />
          </View>
        )}
      </View>
    );
  }
}
