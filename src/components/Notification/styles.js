import { StyleSheet } from 'react-native';
import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  block: {
    marginBottom: 0,
    flexWrap: 'wrap',
    flexDirection: 'row'
  },
  text: {
    color: StyleConstants.colors.white,
    marginBottom: 0,
  },
  close: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
  icon: {
    color: StyleConstants.colors.white,
  }
});

export default styles;
