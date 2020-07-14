import { StyleSheet } from 'react-native';
import StyleConstants from './styleConstants';

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: StyleConstants.colors.white,
    borderBottomWidth: 1,
    borderBottomColor: StyleConstants.colors.alto,
    paddingVertical: StyleConstants.getSpacing(2),
    elevation: 0,
    overflow: 'visible'
  },
  tab: {
    marginHorizontal: StyleConstants.getSpacing(3)
  },
  tabLabel: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    color: StyleConstants.colors.davyGray,
    fontSize: 12,
    letterSpacing: 0.5
  },
  tabLabelActive: {
    fontFamily: StyleConstants.fonts.robotoBold,
    color: StyleConstants.colors.black
  }
});

export default { tabView: styles };
