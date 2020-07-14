import { StyleSheet } from 'react-native';
import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleConstants.colors.white,
    borderBottomWidth: 1,
    borderBottomColor: StyleConstants.colors.gray,
    paddingHorizontal: StyleConstants.getSpacing(6),
    paddingVertical: StyleConstants.getSpacing(8),
  },
  containerRead: {
    backgroundColor: StyleConstants.colors.alto,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginLeft: StyleConstants.getSpacing(3),
  },
  text: {
    marginLeft: StyleConstants.getSpacing(3),
    flex: 1,
  },
  title: {
    fontFamily: StyleConstants.fonts.robotoMedium,
    fontSize: 17,
    color: StyleConstants.colors.black,
  },
  teaser: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    fontSize: 12,
    color: StyleConstants.colors.black,
  },
  date: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    fontSize: 10,
    color: StyleConstants.colors.davyGray,
    marginTop: StyleConstants.getSpacing(1)
  },
});

export default styles;
