import { Platform } from 'react-native';
import firebase from 'react-native-firebase';
// import {
//   GoogleAnalyticsTracker,
//   GoogleAnalyticsSettings
// } from 'react-native-google-analytics-bridge';
// import DeviceInfo from 'react-native-device-info';
import Env from './envUtils';
import TextUtils from './textUtils';

const tracker = null;

const initialise = () => {
  firebase.analytics().setCurrentScreen('Splash Screen');

  // tracker = new GoogleAnalyticsTracker(Env.getEnvParam('google.analyticsId'));
  // GoogleAnalyticsSettings.setDispatchInterval(30);
  // const applicationName = `${DeviceInfo.getApplicationName()} - ${
  //   Platform.OS === 'ios' ? 'iOS' : 'Android'
  // }`;
  // tracker.setAppName(applicationName);
};

const trackScreenView = (route) => {
  // if (!tracker) return;

  let routeDescription = TextUtils.titleCase(route.routeName, {
    inputFormat: 'pascal'
  })
    .replace('Screen', '')
    .trim();

  if (route.routeName === 'WebViewScreen' && route.params.title) {
    routeDescription += ' - ';
    routeDescription += TextUtils.titleCase(route.params.title);
  }

  firebase.analytics().setCurrentScreen(routeDescription);
};

const trackButtonClick = (buttonName, optionalValues) => {
  firebase.analytics().logEvent(buttonName, optionalValues);
};

export default {
  initialise,
  trackScreenView,
  trackButtonClick
};
