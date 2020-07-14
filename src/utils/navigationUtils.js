import { NavigationActions, StackActions } from 'react-navigation';

// import NetworkUtils from './networkUtils';
// import AuthUtils from './authUserUtils';

let navigator;

const setTopLevelNavigator = (navigatorRef) => {
  navigator = navigatorRef;
};

const getActiveRouteName = (navigationState) => {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  if (route.routes) {
    return getActiveRouteName(route);
  }
  return route;
};

const actions = {
  home: {
    key: 'home',
    routeName: 'HomeScreen'
  },
};

const navigate = (routeName, params) => {
  const interval = setTimeout(() => {
    if (navigator) {
      navigator.dispatch(NavigationActions.navigate({ routeName, params }));
      clearInterval(interval);
    }
  }, 100);
};

const replaceAndNavigate = (routeName, params) => {
  const interval = setTimeout(() => {
    if (navigator) {
      navigator.dispatch(StackActions.replace({
        routeName,
        params,
      }));
      clearInterval(interval);
    }
  }, 100);
};

const reset = () => {
  const interval = setTimeout(() => {
    if (navigator) {
      navigator.dispatch(StackActions.popToTop());
      clearInterval(interval);
    }
  }, 100);
};

const resetAndNavigate = (action, params = {}) => {
  const interval = setTimeout(() => {
    if (navigator) {
      if (params.currentRouteName !== action.routeName) {
        navigator.dispatch(StackActions.popToTop());
        navigator.dispatch(StackActions.push(action));
        clearInterval(interval);
      }
    }
  }, 100);
};

const navigateFromUrl = (url, currentRouteName) => {
  const urlRoute = url.replace(/.*?:\/\//g, '');
  const urlRouteName = urlRoute.split('/')[0];

  if (urlRouteName === actions.home.key) {
    reset();
    return;
  }

  const action = actions[urlRouteName];
  if (action) {
    resetAndNavigate(action, { currentRouteName });
  }

  // NetworkUtils.isConnected()
  //   .then((connected) => {
  //     if (connected) {
  //       return AuthUtils.emailIsVerified();
  //     }
  //   }).then((verified) => {
  //     if (verified) {
  // const action = actions[urlRouteName];
  // if (action) {
  //   resetAndNavigate(action, { currentRouteName });
  // }
  //     }
  //   })
};

const setParams = (key, params) => {
  const interval = setTimeout(() => {
    if (navigator) {
      navigator.dispatch(NavigationActions.setParams({ key, params }));
      clearInterval(interval);
    }
  }, 100);
};

export {
  navigateFromUrl,
  reset,
  setTopLevelNavigator,
  getActiveRouteName,
};
export default {
  navigate,
  navigateFromUrl,
  reset,
  setParams,
  setTopLevelNavigator,
  getActiveRouteName,
  replaceAndNavigate,
};
