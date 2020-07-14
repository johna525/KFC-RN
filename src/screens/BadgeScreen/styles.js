import { StyleSheet } from 'react-native';
import DeviceUtils from '../../utils/deviceUtils';

import StyleConstants from '../../style/styleConstants';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: StyleConstants.colors.colorPrimary,
    paddingBottom: StyleConstants.getSpacing(12),
  },
  close: {
    position: 'absolute',
    right: StyleConstants.getSpacing(6),
    top: DeviceUtils.isIphoneX() ? StyleConstants.getSpacing(20) : StyleConstants.getSpacing(4),
  },
  H1: {
    fontFamily: StyleConstants.fonts.robotoBold,
    color: StyleConstants.colors.white,
    fontSize: 24,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: StyleConstants.getSpacing(4)
  },
  message: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    color: StyleConstants.colors.white,
    fontSize: 19,
    lineHeight: 19,
    textAlign: 'center'
  },
  icon: {
    color: StyleConstants.colors.white
  },
  buttonContainer: {
    position: 'absolute',
    bottom: StyleConstants.getSpacing(9),
    width: '100%',
    paddingHorizontal: StyleConstants.getSpacing(6),
  },
  button: {
    width: '100%'
  },
  buttonText: {
    color: StyleConstants.colors.white,
    fontFamily: StyleConstants.fonts.knockout92,
    textTransform: 'uppercase',
    fontSize: 18,
    lineHeight: 18
  },
  badgeContainer: {
    width: 153,
    height: 153,
    marginTop: StyleConstants.getSpacing(17),
    marginBottom: StyleConstants.getSpacing(12),
  },
  pointValue: {
    position: 'absolute',
    zIndex: 1,
    top: StyleConstants.getSpacing(-6),
    right: StyleConstants.getSpacing(-6),
  }
});

export default style;
