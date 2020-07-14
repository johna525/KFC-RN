import { StyleSheet, Dimensions } from 'react-native';
import StyleConstants from '../../style/styleConstants';

const dimensions = Dimensions.get('window');

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%'
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: StyleConstants.getSpacing(8),
    paddingHorizontal: StyleConstants.getSpacing(6),
    paddingBottom: StyleConstants.getSpacing(10),
    zIndex: 2,
    width: '100%',
    backgroundColor: StyleConstants.colors.white,
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
    color: StyleConstants.colors.white,
  },
  H1: {
    fontFamily: StyleConstants.fonts.knockout68,
    fontSize: 36,
    lineHeight: 40,
    color: StyleConstants.colors.black,
    alignSelf: 'flex-start'
  },
  description: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    fontSize: 16,
    lineHeight: 24,
    marginTop: StyleConstants.getSpacing(4),
    color: StyleConstants.colors.black,
    alignSelf: 'flex-start'
  },
  introGradient: {
    flex: 1,
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
  },
  introText: {
    fontFamily: StyleConstants.fonts.robotoRegular,
    fontSize: 17,
    lineHeight: 32,
    marginTop: 28,
    color: StyleConstants.colors.white,
    textAlign: 'center',
  },
  introButton: {
    position: 'absolute',
    bottom: 48,
  },
  progress: {
    width: '100%',
    marginTop: 40,
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pipContainer: {
    flexDirection: 'row',
  },
  progressPip: {
    width: StyleConstants.getSpacing(2),
    height: StyleConstants.getSpacing(2),
    backgroundColor: StyleConstants.colors.alto,
    borderRadius: StyleConstants.getSpacing(2),
    marginHorizontal: StyleConstants.getSpacing(1),
  },
  progressPipActive: {
    backgroundColor: StyleConstants.colors.colorPrimary,
  },
  progressButton: {
    color: StyleConstants.colors.colorPrimary,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: StyleConstants.fonts.robotoRegular,
  },
  progressButtonDisabled: {
    color: StyleConstants.colors.alto,
  },
  profileImageContainer: {
    width: StyleConstants.getSpacing(50),
    height: StyleConstants.getSpacing(50),
    alignItems: 'center',
    justifyContent: 'center',
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
    zIndex: 3,
  },
  profileImageIconSvg: {
    top: -2,
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
    width: '80%',
  },
  dobButton: {
    paddingVertical: StyleConstants.getSpacing(1),
    width: StyleConstants.getSpacing(64),
  },
  cakeIcon: {
    marginBottom: StyleConstants.getSpacing(8)
  },
  dobInput: {
    width: StyleConstants.getSpacing(64),
    borderWidth: 0,
    flex: 1,
  },
  emailField: {
    width: dimensions.width - StyleConstants.getSpacing(12),
  },
  termsCheckbox: {
    borderColor: StyleConstants.colors.black,
    borderWidth: 2,
    borderRadius: 2,
    width: 18,
    height: 18,
    top: 3,
    marginRight: StyleConstants.getSpacing(2),
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsContainer: {
    marginTop: StyleConstants.getSpacing(10),
  },
  termsText: {
    fontSize: 18,
    lineHeight: 24,
    color: StyleConstants.colors.black,
    marginRight: StyleConstants.getSpacing(2),
  },
  termsCheckboxChecked: {
    backgroundColor: StyleConstants.colors.colorPrimary,
    borderColor: StyleConstants.colors.colorPrimary
  },
  termsLink: {
    color: StyleConstants.colors.colorPrimaryDark,
  },
  dobView: {
    padding: 20,
    backgroundColor: StyleConstants.colors.black,
    width: 250,
  },
  dobText: {
    color: StyleConstants.colors.white,
    fontSize: 20,
    textAlign: 'center'
  }
});

export default styles;
