import { StyleSheet } from 'react-native';
import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: StyleConstants.getSpacing(6),
    paddingVertical: StyleConstants.getSpacing(4),
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: StyleConstants.colors.alto,
    borderBottomWidth: 1
  },
  profileImage: {
    marginRight: StyleConstants.getSpacing(4),
  },
  information: {
    flex: 1,
    flexDirection: 'column'
  },
  name: {
    color: StyleConstants.colors.black,
    fontFamily: StyleConstants.fonts.robotoMedium,
    fontSize: 17,
    lineHeight: 17,
    marginBottom: StyleConstants.getSpacing(2)
  },
  rankContainer: {
    backgroundColor: StyleConstants.colors.black,
    borderRadius: StyleConstants.getSpacing(4),
    flex: 0,
    alignSelf: 'flex-start'
  },
  rank: {
    color: StyleConstants.colors.white,
    fontFamily: StyleConstants.fonts.robotoMedium,
    fontSize: 12,
    lineHeight: 12,
    paddingTop: StyleConstants.getSpacing(1) + 1,
    paddingBottom: StyleConstants.getSpacing(1),
    paddingHorizontal: StyleConstants.getSpacing(5),
    letterSpacing: 1
  },
  sendButton: {
    height: StyleConstants.getSpacing(14),
    width: StyleConstants.getSpacing(14),
    borderRadius: StyleConstants.getSpacing(7),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: StyleConstants.colors.alto
  },
  sendIcon: {
    color: StyleConstants.colors.black
  }
});

export default styles;
