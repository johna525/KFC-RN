import { StyleSheet } from 'react-native';

import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: StyleConstants.getSpacing(8)
  },
  loaderText: {
    fontFamily: StyleConstants.fonts.robotoMedium,
    marginTop: StyleConstants.getSpacing(4),
    textAlign: 'center'
  }
});

export default styles;
