import { StyleSheet } from 'react-native';
import DeviceUtils from '../../utils/deviceUtils';
import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: DeviceUtils.isIphoneX()
      ? StyleConstants.getSpacing(10)
      : StyleConstants.getSpacing(2),
    alignItems: 'center'
  },
  close: {
    position: 'absolute',
    right: StyleConstants.getSpacing(4),
    top: DeviceUtils.isIphoneX()
      ? StyleConstants.getSpacing(18)
      : StyleConstants.getSpacing(2),
    backgroundColor: StyleConstants.colors.white,
    padding: StyleConstants.getSpacing(2),
    zIndex: 9
  },
  block: {
    marginBottom: StyleConstants.getSpacing(4)
  },
  text: {
    color: StyleConstants.colors.davyGray,
    fontSize: 14,
    lineHeight: 24
  },
  h1: {
    fontSize: 24,
    lineHeight: 24,
    marginTop: StyleConstants.getSpacing(6),
    marginBottom: StyleConstants.getSpacing(4),
    fontFamily: StyleConstants.fonts.robotoBold
  },
  h4: {
    fontSize: 18,
    lineHeight: 18,
    marginTop: StyleConstants.getSpacing(6),
    marginBottom: StyleConstants.getSpacing(2),
    fontFamily: StyleConstants.fonts.robotoBold
  },
  link: {
    textDecorationLine: 'underline'
  },
  inner: {
    padding: StyleConstants.getSpacing(6),
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  H1: {
    fontFamily: StyleConstants.fonts.knockout68,
    fontSize: 36,
    lineHeight: 40,
    color: StyleConstants.colors.black,
    alignSelf: 'flex-start'
  },
  description: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    fontSize: 16,
    lineHeight: 24,
    marginTop: StyleConstants.getSpacing(4),
    color: StyleConstants.colors.black,
    alignSelf: 'flex-start'
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: StyleConstants.getSpacing(4)
  },
  checkBoxContainer: {
    flexDirection: 'row',
    padding: 20,
    marginVertical: 30
  },
  buttonContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonView: {
    height: 50,
    width: 280,
    backgroundColor: StyleConstants.colors.red,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30
  },
  buttonText: {
    fontSize: 20,
    color: StyleConstants.colors.white
  },
  checkIcon: {
    color: StyleConstants.colors.blue,
    fontSize: 20,
  },
  termsCheckbox: {
    borderColor: StyleConstants.colors.black,
    borderWidth: 2,
    borderRadius: 2,
    width: 18,
    height: 18,
    top: 3,
    marginRight: StyleConstants.getSpacing(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsContainer: {
    marginTop: StyleConstants.getSpacing(10),
  },
  termsText: {
    fontSize: 18,
    lineHeight: 24,
    color: StyleConstants.colors.black,
    marginRight: StyleConstants.getSpacing(2),
  },
  termsCheckboxChecked: {
    backgroundColor: StyleConstants.colors.colorPrimary,
    borderColor: StyleConstants.colors.colorPrimary
  },
  termsLink: {
    color: StyleConstants.colors.colorPrimaryDark,
  },
});

export default styles;
