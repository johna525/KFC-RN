import { StyleSheet } from 'react-native';

import StyleConstants from '../../../style/styleConstants';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: StyleConstants.colors.white
  },
  scrollViewContainer: {
    paddingHorizontal: StyleConstants.getSpacing(6),
    marginBottom: StyleConstants.getSpacing(6),
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
    fontSize: 36,
    lineHeight: 40
  },
  intro: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    color: StyleConstants.colors.white,
    fontSize: 16,
    lineHeight: 24,
    marginTop: StyleConstants.getSpacing(2),
    marginBottom: StyleConstants.getSpacing(1)
  },
  inner: {
    padding: StyleConstants.getSpacing(6)
  },
  textInput: {
    marginTop: 4
  },
  buttonContainer: {
    position: 'absolute',
    flex: 1,
    // justifyContent: "flex-end",
    bottom: StyleConstants.getSpacing(11),
    width: '100%',
    paddingHorizontal: StyleConstants.getSpacing(6)
  },
  buttonDisabled: {
    backgroundColor: StyleConstants.colors.alto,
  },
  button: {
    width: '100%'
  },
  signUp: {
    marginTop: StyleConstants.getSpacing(8),
  },
  signUpText: {
    textAlign: 'center',
    fontSize: StyleConstants.getFontSize(15),
    lineHeight: StyleConstants.getFontSize(15),
    color: StyleConstants.colors.black,
  }
});

export default styles;
