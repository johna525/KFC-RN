import { StyleSheet, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: StyleConstants.colors.alto,
    flex: 1,
  },
  header: {
    backgroundColor: StyleConstants.colors.colorPrimary,
    justifyContent: 'flex-start',
    position: 'absolute',
    width: '100%'
  },
  headerInner: {
    paddingHorizontal: StyleConstants.getSpacing(6),
    paddingTop: StyleConstants.getSpacing(5)
  },
  welcome: {
    color: StyleConstants.colors.white,
    fontFamily: StyleConstants.fonts.robotoRegular,
    fontSize: 14,
    lineHeight: 14,
    marginBottom: StyleConstants.getSpacing(2)
  },
  H1: {
    color: StyleConstants.colors.white,
    fontFamily: StyleConstants.fonts.knockout68,
    fontSize: 34,
    lineHeight: 34
  },
  editButton: {
    alignSelf: 'flex-end',
    marginBottom: 5,
    zIndex: 999,
    position: 'absolute',
    right: StyleConstants.getSpacing(6),
    top: getStatusBarHeight(true) + StyleConstants.getSpacing(Platform.OS === 'ios' ? 11 : 9),
  },
  loader: {
    marginTop: StyleConstants.getSpacing(20)
  },
  logOutButton: {
    justifyContent: 'center',
    marginBottom: StyleConstants.getSpacing(7),
  },
  logOutButtonText: {
    textAlign: 'center',
    color: StyleConstants.colors.colorPrimary,
    fontFamily: StyleConstants.fonts.knockout68,
    fontSize: StyleConstants.getFontSize(24),

    // marginTop: 15,
    // fontFamily: StyleConstants.fonts.knockout68,
    // color: StyleConstants.colors.fbBlue,
    // textAlign: 'center',
    // fontSize: StyleConstants.getFontSize(24),
    // lineHeight: 24
  }
});

export default styles;
