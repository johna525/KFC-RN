import { StyleSheet } from 'react-native';

import StyleConstants from '../../../style/styleConstants';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: StyleConstants.colors.white,
  },
  scrollViewContainer: {
    paddingHorizontal: StyleConstants.getSpacing(6),
    marginVertical: StyleConstants.getSpacing(6),
  },
  container: {
    flex: 1
  },
  H1: {
    fontFamily: StyleConstants.fonts.knockout68,
    color: StyleConstants.colors.black,
    fontSize: 36,
    lineHeight: 40
  },
  intro: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    color: StyleConstants.colors.black,
    fontSize: 16,
    lineHeight: 24,
    marginTop: StyleConstants.getSpacing(2),
    marginBottom: StyleConstants.getSpacing(1)
  },
  inner: {
    padding: StyleConstants.getSpacing(6)
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  textInput: {
    marginTop: 4
  },
  buttonContainer: {
    position: 'absolute',
    flex: 1,
    // justifyContent: "flex-end",
    bottom: StyleConstants.getSpacing(6),
    width: '100%',
    paddingHorizontal: StyleConstants.getSpacing(6)
  },
  buttonDisabled: {
    backgroundColor: StyleConstants.colors.alto,
  },
  button: {
    width: '100%'
  }
});

export default styles;
