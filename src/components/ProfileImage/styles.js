import { StyleSheet } from 'react-native';
import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  profileImage: {
    overflow: 'hidden'
  },
  profileImagePlaceholder: {
    backgroundColor: StyleConstants.colors.alto,
    alignItems: 'center',
    justifyContent: 'center'
  },
});

export default styles;
