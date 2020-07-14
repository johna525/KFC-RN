import { StyleSheet } from 'react-native';

import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
    padding: StyleConstants.getSpacing(6),
    paddingBottom: 0,
    zIndex: 4,
    backgroundColor: StyleConstants.colors.white
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: StyleConstants.getSpacing(6),
    justifyContent: 'space-between',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: StyleConstants.colors.alto
  },
  headerProfileImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: StyleConstants.getSpacing(4)
  },
  headerValueIcon: {
    borderColor: StyleConstants.colors.black,
    borderRadius: 24,
    borderWidth: 1,
    left: -28,
    marginRight: -12,
    width: StyleConstants.getSpacing(12),
    height: StyleConstants.getSpacing(12)
  },
  headerText: {
    fontSize: 17,
    lineHeight: 24,
    color: StyleConstants.colors.black
  },
  headerName: {
    fontFamily: StyleConstants.fonts.robotoBold
  },
  close: {
    alignSelf: 'flex-start'
  },
  headerCloseIcon: {
    color: StyleConstants.colors.black
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: StyleConstants.getSpacing(8),
    zIndex: 2,
    width: '100%',
    backgroundColor: StyleConstants.colors.white
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  introContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: StyleConstants.getSpacing(6),
    zIndex: 2,
    width: '100%'
  },
  introTitle: {
    fontFamily: StyleConstants.fonts.knockout68,
    fontSize: 40,
    lineHeight: 40,
    color: StyleConstants.colors.white
  },
  H1: {
    fontFamily: StyleConstants.fonts.knockout68,
    fontSize: 36,
    lineHeight: 40,
    color: StyleConstants.colors.black
  },
  description: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    fontSize: 17,
    lineHeight: 24,
    marginTop: StyleConstants.getSpacing(4),
    paddingHorizontal: StyleConstants.getSpacing(6),
    color: StyleConstants.colors.black,
    textAlign: 'center',
    height: StyleConstants.getSpacing(30)
  },
  progress: {
    width: '100%',
    marginTop: StyleConstants.getSpacing(10),
    position: 'absolute',
    bottom: StyleConstants.getSpacing(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  pipContainer: {
    flexDirection: 'row'
  },
  progressPip: {
    width: StyleConstants.getSpacing(2),
    height: StyleConstants.getSpacing(2),
    backgroundColor: StyleConstants.colors.alto,
    borderRadius: StyleConstants.getSpacing(2),
    marginHorizontal: StyleConstants.getSpacing(1)
  },
  progressPipActive: {
    backgroundColor: StyleConstants.colors.colorPrimary
  },
  progressButtonContainer: {
    paddingHorizontal: StyleConstants.getSpacing(3),
    paddingTop: StyleConstants.getSpacing(2) - 1,
    paddingBottom: StyleConstants.getSpacing(2),
    marginHorizontal: StyleConstants.getSpacing(-3),
  },
  progressButton: {
    color: StyleConstants.colors.colorPrimary,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: StyleConstants.fonts.robotoRegular
  },
  progressButtonDisabled: {
    color: StyleConstants.colors.alto
  },
  progressButtonFinalContainer: {
    backgroundColor: StyleConstants.colors.colorPrimary
  },
  progressButtonFinal: {
    color: StyleConstants.colors.white
  },
  selectValue: {
    justifyContent: 'space-between',
    alignSelf: 'center',
    maxWidth: StyleConstants.getSpacing(78),
  },
  messagsContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    marginTop: StyleConstants.getSpacing(8)
  },
  messageButton: {
    backgroundColor: StyleConstants.colors.alto,
    paddingHorizontal: StyleConstants.getSpacing(6),
    paddingVertical: StyleConstants.getSpacing(4),
    marginBottom: StyleConstants.getSpacing(2)
  },
  messageButtonActive: {
    backgroundColor: StyleConstants.colors.colorPrimary
  },
  messageText: {
    fontSize: 19,
    lineHeight: 22,
    color: StyleConstants.colors.black
  },
  messageTextActive: {
    color: StyleConstants.colors.white
  },
  selectContentContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%'
  },
  selectContentMessage: {
    backgroundColor: StyleConstants.colors.alto,
    marginTop: StyleConstants.getSpacing(8),
    marginBottom: StyleConstants.getSpacing(2),
    padding: StyleConstants.getSpacing(6),
    fontFamily: StyleConstants.fonts.knockout92,
    color: StyleConstants.colors.black,
    fontSize: 23,
    lineHeight: 32
  },
  selectContentButtonContainer: {
    paddingTop: StyleConstants.getSpacing(4)
  },
  selectContentButton: {
    paddingVertical: StyleConstants.getSpacing(2),
    marginBottom: StyleConstants.getSpacing(4),
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectContentIcon: {
    color: StyleConstants.colors.black,
    marginRight: StyleConstants.getSpacing(2),
    top: -1,
  },
  selectContentType: {
    fontFamily: StyleConstants.fonts.robotoMedium,
    color: StyleConstants.colors.black,
    fontSize: 17,
    lineHeight: 17
  },
  profileImageContainer: {
    width: StyleConstants.getSpacing(50),
    height: StyleConstants.getSpacing(50),
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileImage: {
    width: StyleConstants.getSpacing(50),
    height: StyleConstants.getSpacing(50),
    backgroundColor: StyleConstants.colors.lightMask,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: StyleConstants.getSpacing(50),
    overflow: 'hidden'
  },
  profileImageIcon: {
    backgroundColor: StyleConstants.colors.black,
    width: StyleConstants.getSpacing(14),
    height: StyleConstants.getSpacing(14),
    borderRadius: StyleConstants.getSpacing(14),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: StyleConstants.colors.white,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 3
  },
  profileImageIconSvg: {
    top: -2
  },
  profileImageMessage: {
    backgroundColor: StyleConstants.colors.colorPrimary,
    color: StyleConstants.colors.white,
    textAlign: 'center',
    fontFamily: StyleConstants.fonts.robotoRegular,
    paddingVertical: StyleConstants.getSpacing(2),
    borderRadius: StyleConstants.getSpacing(4),
    overflow: 'hidden',
    top: StyleConstants.getSpacing(-4),
    width: '80%'
  },
  dobButton: {
    paddingVertical: StyleConstants.getSpacing(1),
    width: StyleConstants.getSpacing(64)
  },
  cakeIcon: {
    marginBottom: StyleConstants.getSpacing(8)
  },
  dobInput: {
    width: StyleConstants.getSpacing(64),
    borderWidth: 0,
    flex: 1
  },
  dobText: {
    width: StyleConstants.getSpacing(64),
    textAlign: 'center'
  },
  emailField: {
    width: StyleConstants.getSpacing(64)
  }
});

export default styles;
