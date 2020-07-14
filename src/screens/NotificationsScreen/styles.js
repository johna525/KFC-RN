import { StyleSheet } from 'react-native';
import StyleConstants from '../../style/styleConstants';
import { dySize } from '../../style/responsive';

const styles = StyleSheet.create({
  header: {
    backgroundColor: StyleConstants.colors.colorPrimary,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden'
  },
  headerInner: {
    paddingHorizontal: StyleConstants.getSpacing(6),
    paddingBottom: StyleConstants.getSpacing(5),
    position: 'absolute',
    bottom: 0,
  },
  welcome: {
    color: StyleConstants.colors.white,
    fontFamily: StyleConstants.fonts.robotoRegular,
    fontSize: 14,
    lineHeight: 14,
    marginBottom: StyleConstants.getSpacing(2)
  },
  H1: {
    color: StyleConstants.colors.white,
    fontFamily: StyleConstants.fonts.knockout68,
    fontSize: 34,
    lineHeight: 34
  },
  notificationItem: {
    borderBottomWidth: 1,
    borderColor: StyleConstants.colors.gray,
    padding: 10,
    backgroundColor: StyleConstants.colors.white,
    flexDirection: 'row'
  },
  itemImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover'
  },
  infoView: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 20,
    color: StyleConstants.colors.black,
  },
  sentText: {
    fontSize: 16,
    color: StyleConstants.colors.davyGray,
  },
  dateText: {
    fontSize: 14,
    color: StyleConstants.colors.davyGray,
  },
  emptyText: {
    textAlign: 'center',
    paddingTop: dySize(200)
  }
});

export default styles;
