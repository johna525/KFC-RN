import { StyleSheet } from 'react-native';
import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  date: {
    borderWidth: 1,
    borderColor: StyleConstants.colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    width: StyleConstants.getSpacing(16),
    height: StyleConstants.getSpacing(16),
  },
  center: {
    marginLeft: StyleConstants.getSpacing(4)
  },
  dateDay: {
    fontFamily: StyleConstants.fonts.knockout92,
    color: StyleConstants.colors.black,
    fontSize: StyleConstants.getFontSize(24),
    textAlign: 'center'
  },
  dateMonth: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    color: StyleConstants.colors.black,
    fontSize: StyleConstants.getFontSize(12),
    textAlign: 'center'
  },
  day: {
    fontFamily: StyleConstants.fonts.robotoMedium,
    color: StyleConstants.colors.black,
    fontSize: StyleConstants.getFontSize(15),
    lineHeight: StyleConstants.getFontSize(16),
    marginBottom: StyleConstants.getSpacing(2)
  },
  time: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    color: StyleConstants.colors.black,
    fontSize: StyleConstants.getFontSize(15),
    lineHeight: StyleConstants.getFontSize(16)
  },
  location: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    color: StyleConstants.colors.black,
    fontSize: StyleConstants.getFontSize(15),
    lineHeight: StyleConstants.getFontSize(16),
    opacity: 0.7
  },
  inverted: {
    borderColor: StyleConstants.colors.white,
    color: StyleConstants.colors.white,
  }
});

export default styles;
