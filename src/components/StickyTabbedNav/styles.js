import { StyleSheet } from 'react-native';
import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  header: {
    backgroundColor: StyleConstants.colors.colorPrimary,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden'
  },
  headerInner: {
    paddingHorizontal: StyleConstants.getSpacing(6),
    paddingBottom: StyleConstants.getSpacing(5),
    position: 'absolute',
    bottom: 0,
  },
  welcome: {
    color: StyleConstants.colors.white,
    fontFamily: StyleConstants.fonts.robotoRegular,
    fontSize: 14,
    lineHeight: 14,
    marginBottom: StyleConstants.getSpacing(2)
  },
  H1: {
    color: StyleConstants.colors.white,
    fontFamily: StyleConstants.fonts.knockout68,
    fontSize: 34,
    lineHeight: 34
  },
  tabBar: {
    backgroundColor: StyleConstants.colors.white,
    borderBottomWidth: 1,
    borderBottomColor: StyleConstants.colors.alto,
    paddingVertical: StyleConstants.getSpacing(2),
    elevation: 0,
    overflow: 'visible',
  },
  tabLabel: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    color: StyleConstants.colors.davyGray,
    fontSize: StyleConstants.getFontSize(10),
    letterSpacing: 0.5
  },
  tabLabelActive: {
    fontFamily: StyleConstants.fonts.robotoBold,
    color: StyleConstants.colors.black,
  },
});

export default styles;
