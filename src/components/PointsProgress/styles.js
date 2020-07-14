import { StyleSheet } from 'react-native';

import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  counter: {
    fontFamily: StyleConstants.fonts.robotoBold,
    fontSize: 14,
    color: StyleConstants.colors.gray,
    marginTop: StyleConstants.getSpacing(4),
  },
  counterTotal: {
    color: StyleConstants.colors.black,
  },
  progressBar: {
    backgroundColor: StyleConstants.colors.gray,
    height: 8,
    borderRadius: 4,
    marginVertical: StyleConstants.getSpacing(4),
    overflow: 'hidden'
  },
  progressBarInner: {
    backgroundColor: StyleConstants.colors.red,
    height: 8,
    borderRadius: 4,
    position: 'absolute',
    left: 0,
    top: 0,
  },
  icons: {
    justifyContent: 'space-between'
  },
  badgeLabel: {
    fontFamily: StyleConstants.fonts.robotoMedium,
    fontSize: 13,
    color: StyleConstants.colors.black,
    top: -4
  }
});

export default styles;
