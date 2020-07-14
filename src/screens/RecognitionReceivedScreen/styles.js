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
  inner: {
    paddingHorizontal: StyleConstants.getSpacing(6),
    justifyContent: 'center',
    alignItems: 'center',
  },
  close: {
    position: 'absolute',
    right: StyleConstants.getSpacing(6),
    top: DeviceUtils.isIphoneX() ? StyleConstants.getSpacing(12) : StyleConstants.getSpacing(4)
  },
  H1: {
    fontFamily: StyleConstants.fonts.knockout92,
    color: StyleConstants.colors.white,
    fontSize: 41,
    lineHeight: 40,
    textAlign: 'center',
    marginBottom: StyleConstants.getSpacing(4)
  },
  message: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    color: StyleConstants.colors.white,
    fontSize: 17,
    lineHeight: 16,
    textAlign: 'center'
  },
  name: {
    fontFamily: StyleConstants.fonts.robotoBold
  },
  icons: {
    flexWrap: 'nowrap',
    marginVertical: StyleConstants.getSpacing(6),
  },
  iconContainer: {
    width: StyleConstants.getSpacing(16),
  },
  icon: {
    width: StyleConstants.getSpacing(18),
    height: StyleConstants.getSpacing(18),
    borderRadius: StyleConstants.getSpacing(9),
    borderColor: StyleConstants.colors.white,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: StyleConstants.colors.white,
    width: '100%',
    borderRadius: 4,
    padding: 2,
  },
  contentMessage: {
    fontFamily: StyleConstants.fonts.knockout92,
    color: StyleConstants.colors.black,
    fontSize: 23,
    lineHeight: 32,
    textAlign: 'center',
    paddingVertical: StyleConstants.getSpacing(6),
  },
  buttonContainer: {
    position: 'absolute',
    bottom: StyleConstants.getSpacing(6),
    width: '100%',
    paddingHorizontal: StyleConstants.getSpacing(6)
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
});

export default style;
