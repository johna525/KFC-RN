import { StyleSheet } from 'react-native';

import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  valueButtonWrapper: {
    position: 'absolute',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    zIndex: 99,
  },
  valueButton: {
    width: StyleConstants.getSpacing(24),
    height: StyleConstants.getSpacing(24),
    borderRadius: StyleConstants.getSpacing(12),
    marginBottom: StyleConstants.getSpacing(4),
  },
  valueWrapper: {
    borderColor: StyleConstants.colors.black,
    borderWidth: 1,
    width: StyleConstants.getSpacing(24),
    height: StyleConstants.getSpacing(24),
    borderRadius: StyleConstants.getSpacing(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: StyleConstants.getSpacing(4)
  }
});

export default styles;
