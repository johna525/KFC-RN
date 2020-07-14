import { StyleSheet } from 'react-native';

import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  screen: {
    paddingVertical: StyleConstants.getSpacing(8),
    paddingHorizontal: StyleConstants.getSpacing(6),
    flex: 1,
  },
  H1: {
    fontFamily: StyleConstants.fonts.knockout68,
    color: StyleConstants.colors.black,
    fontSize: 36,
    lineHeight: 40
  },
  input: {
    marginTop: StyleConstants.getSpacing(6),
    marginBottom: StyleConstants.getSpacing(6),
    borderWidth: 0,
    backgroundColor: StyleConstants.colors.alto,
    paddingVertical: StyleConstants.getSpacing(4),
    paddingHorizontal: StyleConstants.getSpacing(6),
    justifyContent: 'flex-start'
  },
  buttonContainer: {
    flexGrow: 2,
    justifyContent: 'flex-end',
    paddingBottom: StyleConstants.getSpacing(8)
  },
});

export default styles;
