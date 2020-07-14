import { StyleSheet } from 'react-native';
import StyleConstants from '../../style/styleConstants';

const HEIGHT = 36;

const styles = StyleSheet.create({
  placeholderContainer: {
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: HEIGHT - 4,
    marginBottom: 4,
  },
  placeholderText: {
    fontFamily: StyleConstants.fonts.robotoRegular
  },
  textInput: {
    flex: 1,
    backgroundColor: StyleConstants.colors.transparent,
    textAlignVertical: 'center',
    textAlign: 'left',
    padding: 0,
    fontFamily: StyleConstants.fonts.robotoRegular
  },
  hint: {
    marginTop: 8,
    fontSize: 11,
    fontFamily: StyleConstants.fonts.robotoRegular
  },
  pickerContainer: {
    height: HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerAndroid: {
    flex: 1,
    height: HEIGHT,
  },
  pickerText: {
    flex: 1,
    color: StyleConstants.colors.black,
  },
});

module.exports = {
  ...styles,
  HEIGHT,
};
