import { StyleSheet } from 'react-native';

import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  stats: {
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  stat: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33.33%',
    marginTop: StyleConstants.getSpacing(6),
    marginBottom: StyleConstants.getSpacing(2)
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
    borderColor: StyleConstants.colors.black,
  },
  statLabelContainer: {
    backgroundColor: StyleConstants.colors.black,
    borderRadius: StyleConstants.getSpacing(4),
    width: StyleConstants.getSpacing(14),
    height: StyleConstants.getSpacing(4),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: StyleConstants.getSpacing(-1)
  },
  statLabel: {
    fontFamily: StyleConstants.fonts.robotoBold,
    fontSize: 12,
    color: StyleConstants.colors.white,
    top: -1
  },
});

export default styles;
