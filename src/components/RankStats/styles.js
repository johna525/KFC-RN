import { StyleSheet } from 'react-native';

import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  stats: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  stat: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: StyleConstants.getSpacing(6),
    marginBottom: StyleConstants.getSpacing(2),
    width: '25%'
  },
  statMiddle: {
    borderLeftWidth: 1,
    borderLeftColor: StyleConstants.colors.gray,
    borderRightWidth: 1,
    borderRightColor: StyleConstants.colors.gray
  },
  statValue: {
    width: StyleConstants.getSpacing(20),
    height: StyleConstants.getSpacing(20),
    borderRadius: StyleConstants.getSpacing(10),
    marginBottom: StyleConstants.getSpacing(1),
    borderWidth: 1,
    borderColor: StyleConstants.colors.black
  },
  statNotObtained: {
    opacity: 0.2
  }
});

export default styles;
