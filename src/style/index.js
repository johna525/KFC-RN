import { StyleSheet } from 'react-native';

import StyleConstants from './styleConstants';
import tabViewStyles from './tabViewStyles';
import loginStyle from './loginStyle';

const commonStyles = StyleSheet.create({
  button: {
    backgroundColor: StyleConstants.colors.black,
    paddingVertical: StyleConstants.getSpacing(3),
    paddingHorizontal: StyleConstants.getSpacing(12),
    borderRadius: 3
  },
  buttonRed: {
    backgroundColor: StyleConstants.colors.colorPrimary
  },
  buttonText: {
    fontFamily: StyleConstants.fonts.knockout68,
    color: StyleConstants.colors.white,
    textAlign: 'center',
    fontSize: StyleConstants.getFontSize(24),
    lineHeight: 24
  },
  logoutText: {
    marginTop: 15,
    fontFamily: StyleConstants.fonts.knockout68,
    color: StyleConstants.colors.fbBlue,
    textAlign: 'center',
    fontSize: StyleConstants.getFontSize(24),
    lineHeight: 24
  },
  buttonDisabled: {
    backgroundColor: StyleConstants.colors.alto,
  },
  flexOne: { flex: 1 },
  flexTwo: { flex: 2 },
  flexRow: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  alignCenter: {
    alignItems: 'center'
  },
  justifyCenter: {
    justifyContent: 'center'
  },
  justifyBetween: {
    justifyContent: 'space-between'
  },
});

export default {
  ...{ colors: StyleConstants.colors },
  ...commonStyles,
  ...tabViewStyles,
  ...loginStyle,
};
