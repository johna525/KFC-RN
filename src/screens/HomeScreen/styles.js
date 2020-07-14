import { StyleSheet } from 'react-native';

import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  introContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: StyleConstants.getSpacing(6),
    zIndex: 2,
    width: '100%'
  },
  introGradient: {
    flex: 1,
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%'
  },
  introText: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    fontSize: StyleConstants.getFontSize(17),
    lineHeight: StyleConstants.getFontSize(32),
    marginTop: StyleConstants.getSpacing(6),
    color: StyleConstants.colors.white,
    textAlign: 'center'
  },
  buttonContainer: {
    justifyContent: 'space-around',
    position: 'absolute',
    bottom: 44
  },
  logIn: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    fontSize: StyleConstants.getFontSize(15),
    lineHeight: StyleConstants.getFontSize(15),
    marginTop: StyleConstants.getSpacing(8),
    color: StyleConstants.colors.white
  },
  loader: {
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -50 }]
  },
  introButton: {
    width: 240,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default styles;
