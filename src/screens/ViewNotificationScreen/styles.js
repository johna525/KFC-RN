import { StyleSheet } from 'react-native';
import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  header: {
    padding: StyleConstants.getSpacing(6),
    borderBottomWidth: 1,
    borderBottomColor: StyleConstants.colors.alto,
    flexDirection: 'row'
  },
  title: {
    fontFamily: StyleConstants.fonts.robotoMedium,
    fontSize: 17,
    color: StyleConstants.colors.black,
  },
  from: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    fontSize: 17,
    color: StyleConstants.colors.black,
  },
  block: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginBottom: StyleConstants.getSpacing(6),
  },
  text: {
    color: StyleConstants.colors.davyGray,
    fontSize: 17,
    lineHeight: 24,
  },
  inner: {
    padding: StyleConstants.getSpacing(6),
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: StyleConstants.getSpacing(4),
  },
});

export default styles;
