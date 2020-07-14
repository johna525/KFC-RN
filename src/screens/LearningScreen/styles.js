import { StyleSheet } from 'react-native';

import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: StyleConstants.getSpacing(12),
  },
  header: {
    backgroundColor: StyleConstants.colors.colorPrimary,
    justifyContent: 'flex-end'
  },
  headerInner: {
    paddingHorizontal: StyleConstants.getSpacing(6),
    paddingBottom: StyleConstants.getSpacing(5)
  },
  welcome: {
    color: StyleConstants.colors.white,
    fontFamily: StyleConstants.fonts.robotoRegular,
    fontSize: StyleConstants.getFontSize(14),
    lineHeight: StyleConstants.getFontSize(14),
    marginBottom: StyleConstants.getSpacing(2)
  },
  H1: {
    color: StyleConstants.colors.white,
    fontFamily: StyleConstants.fonts.knockout68,
    fontSize: StyleConstants.getFontSize(34),
    lineHeight: StyleConstants.getFontSize(34)
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: StyleConstants.getSpacing(16),
  },
  heading: {
    fontFamily: StyleConstants.fonts.knockout68,
    fontSize: StyleConstants.getFontSize(38),
    lineHeight: StyleConstants.getFontSize(35),
    color: StyleConstants.colors.black,
    margin: StyleConstants.getSpacing(6),
    textAlign: 'center',
  },
  introduction: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    fontSize: StyleConstants.getFontSize(17),
    lineHeight: StyleConstants.getFontSize(24),
    color: StyleConstants.colors.black,
    margin: StyleConstants.getSpacing(6),
    textAlign: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: StyleConstants.getSpacing(9),
    width: '100%',
    paddingHorizontal: StyleConstants.getSpacing(6),
  },
  button: {
    width: '100%'
  }
});

export default styles;
