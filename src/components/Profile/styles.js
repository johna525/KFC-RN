import { StyleSheet } from 'react-native';

import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  container: {
    padding: StyleConstants.getSpacing(6),
    marginTop: StyleConstants.getSpacing(18)
  },
  section: {
    backgroundColor: StyleConstants.colors.white,
    borderRadius: 2,
    padding: StyleConstants.getSpacing(4),
    marginBottom: StyleConstants.getSpacing(2),
  },
  sectionTitle: {
    fontFamily: StyleConstants.fonts.knockout68,
    fontSize: 24,
    color: StyleConstants.colors.black,
  },
  sectionSubTitle: {
    fontFamily: StyleConstants.fonts.knockout27,
    fontSize: 24,
    color: StyleConstants.colors.black,
  },
  profileImage: {
    marginRight: StyleConstants.getSpacing(4),
  },
  profileImagePlaceholder: {
    backgroundColor: StyleConstants.colors.alto,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontFamily: StyleConstants.fonts.robotoBold,
    fontSize: 18,
    color: StyleConstants.colors.black,
  },
  detail: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    fontSize: 16,
    color: StyleConstants.colors.davyGray,
    marginTop: StyleConstants.getSpacing(1),
  },
  birthday: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    fontSize: 12,
    lineHeight: 16,
    color: StyleConstants.colors.davyGray,
    marginTop: StyleConstants.getSpacing(2),
  },
  seeAllShifts: {
    color: StyleConstants.colors.colorPrimary,
    fontFamily: StyleConstants.fonts.robotoBold,
    fontSize: StyleConstants.getFontSize(12),
  }
});

export default styles;
