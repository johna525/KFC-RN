import { StyleSheet } from 'react-native';
import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: StyleConstants.getSpacing(2),
    backgroundColor: StyleConstants.colors.white
  },
  event: {
    backgroundColor: StyleConstants.colors.darkGray,
    paddingHorizontal: StyleConstants.getSpacing(6),
    paddingVertical: StyleConstants.getSpacing(5),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  eventIcon: {
    width: 88,
    height: 88,
    zIndex: 2
  },
  eventProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    position: 'absolute',
    zIndex: -1,
    right: StyleConstants.getSpacing(-8),
    top: -8,
    borderWidth: 1,
    borderColor: StyleConstants.colors.white
  },
  eventText: {
    color: StyleConstants.colors.white,
    fontFamily: StyleConstants.fonts.robotoMedium,
    fontSize: StyleConstants.getFontSize(16),
    lineHeight: StyleConstants.getFontSize(24),
    width: '55%',
    alignItems: 'center'
  },
  rewardIcon: {
    width: 88,
    height: 88,
    borderRadius: 88 / 2,
    backgroundColor: StyleConstants.colors.white
  },
  typePost: {
    paddingHorizontal: StyleConstants.getSpacing(6),
    paddingTop: StyleConstants.getSpacing(4),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  typePostImageText: {
    fontSize: StyleConstants.getFontSize(17),
    lineHeight: StyleConstants.getFontSize(24),
    color: StyleConstants.colors.davyGray,
    paddingHorizontal: StyleConstants.getSpacing(6),
    paddingTop: StyleConstants.getSpacing(2)
  },
  typePostText: {
    backgroundColor: StyleConstants.colors.colorPrimary,
    paddingHorizontal: StyleConstants.getSpacing(6),
    paddingTop: StyleConstants.getSpacing(8),
    paddingBottom: StyleConstants.getSpacing(12),
    fontFamily: StyleConstants.fonts.knockout92,
    color: StyleConstants.colors.white,
    fontSize: StyleConstants.getFontSize(28),
    lineHeight: StyleConstants.getFontSize(32)
  },
  announcementText: {
    paddingHorizontal: StyleConstants.getSpacing(6),
    paddingTop: StyleConstants.getSpacing(6),
    paddingBottom: StyleConstants.getSpacing(2),
    fontSize: StyleConstants.getFontSize(20),
    lineHeight: StyleConstants.getFontSize(24),
    fontFamily: StyleConstants.fonts.robotoMedium,
    color: StyleConstants.colors.darkGray
  },
  announcementSender: {
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    left: 0,
    top: 0
  },
  announcementSenderInner: {
    padding: StyleConstants.getSpacing(6),
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 2
  },
  announcementSenderText: {
    color: StyleConstants.colors.white,
    fontFamily: StyleConstants.fonts.robotoBold,
    fontSize: StyleConstants.getFontSize(24),
    lineHeight: StyleConstants.getFontSize(23),
    marginLeft: StyleConstants.getSpacing(2)
  },
  announcementSenderBg: {
    flex: 1,
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%'
  },
  announcementProfileImage: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    marginRight: StyleConstants.getSpacing(2),
    borderColor: StyleConstants.colors.white,
    borderWidth: 1
  },
  footer: {
    paddingHorizontal: StyleConstants.getSpacing(6),
    paddingTop: StyleConstants.getSpacing(3),
    paddingBottom: StyleConstants.getSpacing(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    // backgroundColor: 'red'
  },
  profileImage: {
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    marginRight: StyleConstants.getSpacing(2)
  },
  postedBy: {
    color: StyleConstants.colors.black,
    fontFamily: StyleConstants.fonts.robotoBold,
    fontSize: StyleConstants.getFontSize(16),
    lineHeight: StyleConstants.getFontSize(32)
  },
  likesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  time: {
    fontSize: StyleConstants.getFontSize(16),
    lineHeight: StyleConstants.getFontSize(28),
    color: StyleConstants.colors.davyGray,
    fontFamily: StyleConstants.fonts.robotoLight,
  },
  likeIcon: {
    color: StyleConstants.colors.colorPrimary
  },
  likes: {
    color: StyleConstants.colors.black,
    fontFamily: StyleConstants.fonts.robotoMedium,
    fontSize: StyleConstants.getFontSize(14),
    lineHeight: StyleConstants.getFontSize(28),
    marginRight: StyleConstants.getSpacing(2),
    top: -1
  }
});

export default styles;
