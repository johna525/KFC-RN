import { StyleSheet } from 'react-native';

import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  stat: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  statMiddle: {
    borderLeftWidth: 1,
    borderLeftColor: StyleConstants.colors.gray,
  },
  statFigure: {
    fontFamily: StyleConstants.fonts.knockout92,
    fontSize: 24,
    color: StyleConstants.colors.colorPrimary,
    marginBottom: StyleConstants.getSpacing(1),
  },
  statLabel: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    fontSize: 12,
    color: StyleConstants.colors.davyGray,
  },
});

export default styles;
