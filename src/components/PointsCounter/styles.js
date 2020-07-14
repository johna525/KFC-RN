import { StyleSheet } from 'react-native';

import StyleConstants from '../../style/styleConstants';

const style = StyleSheet.create({
  container: {
    backgroundColor: StyleConstants.colors.white,
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerInverted: {
    backgroundColor: StyleConstants.colors.black,
  },
  value: {
    color: StyleConstants.colors.black,
    fontFamily: StyleConstants.fonts.knockout92,
    fontSize: 26,
    lineHeight: 26,
    top: -3,
    left: -1
  },
  valueInverted: {
    color: StyleConstants.colors.white,
  },
  text: {
    color: StyleConstants.colors.black,
    fontFamily: StyleConstants.fonts.robotoRegular,
    fontSize: 10,
    lineHeight: 10,
    top: -1
  },
  textInverted: {
    color: StyleConstants.colors.white,
  }
});

export default style;
