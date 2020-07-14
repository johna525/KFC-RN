import { Dimensions, Platform } from 'react-native';

// Get the screen dimensions
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;

// iPhone X dimensions
const X_WIDTH = 375;
const X_HEIGHT = 812;

const isIphoneX = () => {
  return (
    Platform.OS === 'ios'
    && ((screenH === X_HEIGHT && screenW === X_WIDTH)
      || (screenH === X_WIDTH && screenW === X_HEIGHT))
  );
};

export default {
  isIphoneX
};
