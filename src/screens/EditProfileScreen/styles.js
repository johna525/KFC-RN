import { StyleSheet } from 'react-native';
import DeviceUtils from '../../utils/deviceUtils';
import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: DeviceUtils.isIphoneX()
      ? StyleConstants.getSpacing(12)
      : StyleConstants.getSpacing(2),
    paddingHorizontal: StyleConstants.getSpacing(6),
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  close: {
    position: 'absolute',
    right: StyleConstants.getSpacing(4),
    top: DeviceUtils.isIphoneX()
      ? StyleConstants.getSpacing(11)
      : StyleConstants.getSpacing(2),
    backgroundColor: StyleConstants.colors.white,
    padding: StyleConstants.getSpacing(2),
    zIndex: 9
  },
  profileImage: {
    alignSelf: 'center',
    width: StyleConstants.getSpacing(40),
    height: StyleConstants.getSpacing(40),
    marginTop: StyleConstants.getSpacing(8),
  },
  profileImageIcon: {
    backgroundColor: StyleConstants.colors.black,
    width: StyleConstants.getSpacing(14),
    height: StyleConstants.getSpacing(14),
    borderRadius: StyleConstants.getSpacing(7),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: StyleConstants.colors.white,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 3,
  },
  profileImageIconSvg: {
    top: -2,
  },
  H1: {
    color: StyleConstants.colors.black,
    fontFamily: StyleConstants.fonts.knockout68,
    fontSize: 34,
    lineHeight: 34
  },
  emailField: {
    marginTop: StyleConstants.getSpacing(4),
  },
  buttonContainer: {
    position: 'absolute',
    bottom: StyleConstants.getSpacing(6),
    width: '100%',
    paddingHorizontal: StyleConstants.getSpacing(6),
  },
  deleteText: {
    color: StyleConstants.colors.colorPrimary,
    fontSize: StyleConstants.getFontSize(13),
    marginTop: StyleConstants.getSpacing(4),
    textAlign: 'center',
  }
});

export default styles;
