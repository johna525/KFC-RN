import React, { Component } from 'react';
import {
  Modal, AppState, StatusBar, Dimensions, View
} from 'react-native';
import AWSAppSyncClient from 'aws-appsync';
// import { Analytics } from 'aws-amplify';
import { Rehydrated } from 'aws-appsync-react';
import { ApolloProvider } from 'react-apollo';
import PubSub from 'pubsub-js';
import Toast from 'react-native-easy-toast';
import config from '../aws-exports';
import Env from './utils/envUtils';
import DeviceUtils from './utils/deviceUtils';
import FirebaseAnalytics from './utils/analyticsUtils';
import {
  setTopLevelNavigator,
  getActiveRouteName
} from './utils/navigationUtils';
import RootNavigation from './navigation/RootNavigation';
import Alert from './components/Alert';
import { setNotifcationEl } from './components/Notification';
import StyleConstants from './style/styleConstants';
import Loader from './components/Loader';

const dimensions = Dimensions.get('window');

const appsyncClient = new AWSAppSyncClient({
  url: config.aws_appsync_graphqlEndpoint,
  region: config.aws_appsync_region,
  auth: {
    type: config.aws_appsync_authenticationType,
    apiKey: config.aws_appsync_apiKey
  }
});

type Props = {};
class App extends Component<Props> {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showAlert: false,
      currentRouteName: '',
      appState: AppState.currentState
    };

    const key = Env.getEnvParam('constants.broadcastAlert');
    PubSub.subscribe(key, this.broadcastReceiver);
  }

  async componentDidMount() {
    // Analytics.record('App loaded!');
    AppState.addEventListener('change', this.handleAppStateChange);
    FirebaseAnalytics.initialise();
  }

  handleAppStateChange = (nextAppState) => {
    this.setState({
      appState: nextAppState
    });
  };

  onNavigationStateChange = (prevState, currentState) => {
    const currentScreen = getActiveRouteName(currentState);
    const prevScreen = getActiveRouteName(prevState);

    if (prevScreen.routeName !== currentScreen.routeName) {
      this.setState({ currentRouteName: currentScreen.routeName });
      FirebaseAnalytics.trackScreenView(currentScreen);
    }
  };

  render() {
    return (
      <React.Fragment>
        <StatusBar
          backgroundColor={
            !this.state.showAlert
              ? StyleConstants.colors.colorPrimary
              : '#880119'
          }
          barStyle="light-content"
        />
        <Toast
          ref={toastRef => setNotifcationEl(toastRef)}
          style={{
            backgroundColor: StyleConstants.colors.black,
            borderRadius: 0,
            width: dimensions.width - StyleConstants.getSpacing(6),
            paddingHorizontal: StyleConstants.getSpacing(6),
            paddingTop: StyleConstants.getSpacing(6) - 2,
            paddingBottom: StyleConstants.getSpacing(6)
          }}
          position="top"
          positionValue={
            DeviceUtils.isIphoneX()
              ? StyleConstants.getSpacing(12)
              : StyleConstants.getSpacing(2)
          }
        />
        <Modal
          animationType="fade"
          visible={this.state.showAlert}
          onRequestClose={() => null}
          backdropColor="transparent"
          transparent
          style={{ margin: 0, padding: 0 }}
          hardwareAccelerated
        >
          <Alert
            requestItem={this.state.alertRequestItem}
            title={this.state.alertTitle}
            message={this.state.alertMessage}
            cancelText={this.state.alertCancelText}
            cancelClick={this.state.alertCancelClick}
            okText={this.state.alertOkText}
            okClick={this.state.alertOkClick}
            list={this.state.alertList}
          />
        </Modal>
        <ApolloProvider client={appsyncClient}>
          <Rehydrated
            render={({ rehydrated }) => (rehydrated ? (
                <RootNavigation
                  ref={(navigatorRef) => {
                    setTopLevelNavigator(navigatorRef);
                  }}
                  onNavigationStateChange={this.onNavigationStateChange}
                />
            ) : (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    width: '100%'
                  }}
                >
                  <View
                    style={{
                      position: 'absolute',
                      top: '50%',
                      transform: [{ translateY: -50 }]
                    }}
                  >
                    <Loader color={StyleConstants.colors.gray} />
                  </View>
                </View>
            ))
            }
          />
        </ApolloProvider>
      </React.Fragment>
    );
  }

  broadcastReceiver = (key, params) => {
    if (key === Env.getEnvParam('constants.broadcastAlert')) {
      const {
        showAlert,
        alertTitle,
        alertMessage,
        alertCancelText,
        alertCancelClick,
        alertOkText,
        alertOkClick,
        alertRequestItem,
        alertList
      } = params;
      if (showAlert) {
        this.setState({
          showAlert: true,
          alertTitle,
          alertMessage,
          alertCancelText,
          alertCancelClick,
          alertOkText,
          alertOkClick,
          alertRequestItem,
          alertList
        });
      } else {
        this.setState({
          showAlert: false
        });
      }
    }
  };
}

export default App;
