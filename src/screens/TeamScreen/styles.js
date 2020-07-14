import { StyleSheet } from 'react-native';

import StyleConstants from '../../style/styleConstants';
import { dySize } from '../../style/responsive';

const styles = StyleSheet.create({
  header: {
    backgroundColor: StyleConstants.colors.colorPrimary,
    justifyContent: 'flex-end'
  },
  headerInner: {
    paddingHorizontal: StyleConstants.getSpacing(6),
    paddingBottom: StyleConstants.getSpacing(5),
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
  emptyText: {
    color: StyleConstants.colors.gray,
    fontFamily: StyleConstants.fonts.knockout68,
    fontSize: 24,
    textAlign: 'center',
    marginTop: dySize(200)
  }
});

export default { team: styles };
