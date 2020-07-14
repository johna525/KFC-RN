import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, ScrollView, Animated, RefreshControl, AsyncStorage, Platform
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import SafariView from 'react-native-safari-view';
import NavigationUtils from '../../utils/navigationUtils';
import DeviceUtils from '../../utils/deviceUtils';
import AuthUtils from '../../utils/authUserUtils';
import APIUtils from '../../utils/apiUtils';
import Utils from '../../utils/utils';
import Env from '../../utils/envUtils';
import TrackedTouchableOpacity from '../../components/TouchableOpacity';
import Profile from '../../components/Profile';
import styles from './styles';
import StyleConstants from '../../style/styleConstants';
import generalStyles from '../../style';
import Icon from '../../components/Icon';
import CacheUtils from '../../utils/cacheUtils';

const CLIENT_ID = '4l8vk0al9s1bk0ac26ult7shr2';
const CALLBACK_URI = 'kfc1010://callback/';
const logoutURL = `https://portalsso.yum.com/pkmslogout?response_type=code&client_id=${CLIENT_ID}&redirect_uri=kfc1010://callback/?code=logout`;
const clearADSessionURL = `https://login.microsoftonline.com/common/oauth2/logout?post_logout_redirect_uri=${CALLBACK_URI}?code=clearADsession`;

const HEADER_HEIGHT = StyleConstants.getFontSize(getStatusBarHeight(true))
  + StyleConstants.getFontSize(230);
const HEADER_PADDING_TOP = DeviceUtils.isIphoneX()
  ? 52
  : StyleConstants.getFontSize(getStatusBarHeight(true));

export default class ProfileScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func.isRequired
    }).isRequired
  };

  state = {
    profileData: null,
    isRefreshing: false
  };

  scrollY = new Animated.Value(0);

  componentDidMount() {
    this.fetchProfileData();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.navigation.getParam('refresh', false) === false
      && this.props.navigation.getParam('refresh', false) === true
    ) this.refreshProfileData();
  }

  refreshProfileData = () => {
    NavigationUtils.setParams('Profile', { refresh: false });
    this.fetchProfileData();
  };

  fetchProfileData = async () => {
    try {
      const account = await AuthUtils.getUserAccount();
      console.log('Account', account);
      const profileData = await APIUtils.getEmployeeProfile(
        account.username,
      );
      console.log('Profie Data', profileData);
      setTimeout(
        () => this.setState({
          profileData: {
            ...this.state.profileData,
            ...profileData,
            // profileImageUri: 'ab123e70-5d05-11e9-8111-53c317ed9bce.jpeg'
          },
          isRefreshing: false
        }),
        0
      );
    } catch (error) {
      Utils.showAlert(
        'Whoops!',
        "We don't seem to be able to find your profile",
        'Close',
        Utils.dismissAlert,
        null,
        null
      );
    }
  };

  refreshProfile = () => {
    this.setState({ isRefreshing: true }, () => {
      this.fetchProfileData();
    });
  };

  sendRecognition = (teamMember) => {
    NavigationUtils.navigate('SendRecognition', {
      teamMember
    });
  };

  handleLogOut = async () => {
    await AuthUtils.signOut();

    // remove yum session and onboarding cache
    AsyncStorage.clear();

    this.pressHandler(logoutURL);
  };

  pressHandler = async (url) => {
    if (Platform.OS === 'ios' && 0) SafariView.show({ url });
    else {
      NavigationUtils.navigate('AuthBrowser', { URI: url, backTo: 'Home' });
    }
    setTimeout(() => {
      if (Platform.OS === 'ios' && 0) SafariView.show({ url: clearADSessionURL });
      else {
        NavigationUtils.navigate('AuthBrowser', { URI: clearADSessionURL, backTo: 'Home' });
      }
    }, 2500);
  }

  renderHeader = () => {
    const headerInnerOpacity = this.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });

    return (
      <View
        style={[
          styles.header,
          {
            height: HEADER_HEIGHT,
            paddingTop: HEADER_PADDING_TOP
          }
        ]}
      >
        <Animated.View
          style={[
            styles.headerInner,
            {
              opacity: headerInnerOpacity
            }
          ]}
        >
          <View style={[generalStyles.flexRow, generalStyles.justifyBetween]}>
            <View>
              <Text style={styles.welcome}>{"Here is where you're at"}</Text>
              <Text style={styles.H1}>MY PROFILE</Text>
            </View>
          </View>
        </Animated.View>
      </View>
    );
  };

  render() {
    const { profileData } = this.state;
    // console.log(profileData);
    const editOpacity = this.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });
    return (
      <View style={[styles.screen, { paddingTop: HEADER_PADDING_TOP }]}>
        {this.renderHeader()}
        <Animated.View
          style={[
            styles.editButton,
            {
              opacity: editOpacity
            }
          ]}
        >
          <TrackedTouchableOpacity
            onPress={() => NavigationUtils.navigate('EditProfile')}
            name={Env.getEnvParam('google.events.profileEdit')}
          >
            <Icon name="write" size={32} color={StyleConstants.colors.white} />
          </TrackedTouchableOpacity>
        </Animated.View>
        <ScrollView
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.scrollY } } }
          ])}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.refreshProfile}
              tintColor={StyleConstants.colors.white}
              colors={[
                StyleConstants.colors.colorPrimary,
                StyleConstants.colors.colorPrimaryDark
              ]}
            />
          }
        >
          <Profile
            {...profileData}
            recognitionCountDetails={
              profileData
                ? Utils.countArrayOccs(profileData.recognitionIds)
                : {}
            }
          />
          <TrackedTouchableOpacity
            style={styles.logOutButton}
            onPress={this.handleLogOut}
            name={Env.getEnvParam('google.events.profileSignOut')}
          >
            <Text style={styles.logOutButtonText}>Log out</Text>
          </TrackedTouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
