import { StyleSheet } from 'react-native';

import StyleConstants from '../../../style/styleConstants';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: StyleConstants.colors.white
  },
  scrollViewContainer: {
    paddingHorizontal: StyleConstants.getSpacing(6),
    // marginBottom: StyleConstants.getSpacing(6),
  },
  container: {
    flex: 1
  },
  header: {
    padding: StyleConstants.getSpacing(6),
    justifyContent: 'flex-end'
  },
  H1: {
    fontFamily: StyleConstants.fonts.knockout68,
    color: StyleConstants.colors.white,
    fontSize: StyleConstants.getFontSize(36),
    lineHeight: StyleConstants.getFontSize(40)
  },
  intro: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    color: StyleConstants.colors.white,
    fontSize: StyleConstants.getFontSize(16),
    lineHeight: StyleConstants.getFontSize(24),
    marginTop: StyleConstants.getSpacing(1),
    marginBottom: StyleConstants.getSpacing(1)
  },
  inner: {
    padding: StyleConstants.getSpacing(6)
  },
  textInput: {
    marginTop: 4,
  },
  registerButtonView: {
    height: 50,
    backgroundColor: StyleConstants.colors.red,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    paddingVertical: StyleConstants.getSpacing(10),
    paddingHorizontal: StyleConstants.getSpacing(5)
  },
  buttonDisabled: {
    backgroundColor: StyleConstants.colors.alto,
  },
  button: {
    width: '100%'
  },
  login: {
    marginTop: StyleConstants.getSpacing(8),
  },
  loginText: {
    textAlign: 'center',
    fontSize: StyleConstants.getFontSize(15),
    lineHeight: StyleConstants.getFontSize(15),
    color: StyleConstants.colors.black,
  }
});

export default styles;
