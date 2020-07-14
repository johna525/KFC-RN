import { StyleSheet } from 'react-native';
import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  container: {
    padding: StyleConstants.getSpacing(6),
  },
  nextShift: {
    backgroundColor: StyleConstants.colors.darkGray,
  },
  nextShiftTitleInner: {
    marginBottom: StyleConstants.getSpacing(8),
  },
  nextShiftTitle: {
    fontFamily: StyleConstants.fonts.robotoBold,
    color: StyleConstants.colors.white,
    fontSize: StyleConstants.getFontSize(15),
    lineHeight: StyleConstants.getFontSize(24),
  },
  nextShiftTime: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    color: StyleConstants.colors.white,
    fontSize: StyleConstants.getFontSize(15),
    lineHeight: StyleConstants.getFontSize(24),
  },
  icon: {
    color: StyleConstants.colors.white,
    marginRight: StyleConstants.getSpacing(4),
  },
  shiftRow: {
    paddingBottom: StyleConstants.getSpacing(4),
    marginBottom: StyleConstants.getSpacing(4),
    borderBottomWidth: 1,
    borderBottomColor: StyleConstants.colors.gray
  }
});

export default styles;
