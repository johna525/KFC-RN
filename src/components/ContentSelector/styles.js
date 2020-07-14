import { StyleSheet } from 'react-native';

import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: StyleConstants.colorWithAlpha('black', 0.4),
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: 99
  },
  container: {
    backgroundColor: StyleConstants.colors.white,
    position: 'absolute',
    height: StyleConstants.getSpacing(64),
    width: '100%',
    zIndex: 999
  },
  header: {
    padding: StyleConstants.getSpacing(6),
    paddingBottom: StyleConstants.getSpacing(4),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  H1: {
    fontSize: 38,
    lineHeight: 38,
    fontFamily: StyleConstants.fonts.knockout68,
    color: StyleConstants.colors.black
  },
  gifOption: {
    height: 144,
    width: 195,
    marginRight: StyleConstants.getSpacing(2)
  },
  colourOption: {
    height: StyleConstants.getSpacing(36),
    width: StyleConstants.getSpacing(36),
    marginRight: StyleConstants.getSpacing(2)
  }
});

export default styles;
