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
  statNotObtained: {
    opacity: 0.2
  },
  message: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  messageText: {
    fontSize: 14,
    color: StyleConstants.colors.davyGray,
    textAlign: 'center',
    bottom: -8,
  }
});

export default styles;
