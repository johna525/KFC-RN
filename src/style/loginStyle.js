
import { StyleSheet } from 'react-native';

import StyleConstants from './styleConstants';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: StyleConstants.colors.white
  },
  scrollViewContainer: {
    paddingHorizontal: 22,
    paddingTop: 16,
    paddingBottom: 30
  },
  fbContainer: {
    flexDirection: 'row',
    backgroundColor: StyleConstants.colors.fbBlue,
    borderRadius: 4,
    padding: 12,
    marginTop: 16,
    alignItems: 'center',
    alignSelf: 'center'
  },
  fbContinueText: {
    marginLeft: 16,
    color: StyleConstants.colors.white,
    fontSize: StyleConstants.fontSizes.medium,
    fontWeight: 'bold'
  },
  loginSeperator: {
    flexDirection: 'row',
    marginTop: 24,
    alignItems: 'center'
  },
  seperatorText: {
    fontWeight: 'bold',
    fontSize: StyleConstants.fontSizes.xLarge,
    color: StyleConstants.colors.black,
    marginHorizontal: 16
  },
  seperatorLine: {
    flex: 1,
    height: 2,
    backgroundColor: StyleConstants.colors.black
  },
  textInput: {
    marginTop: 4
  },
  forgottenPasswordContainer: {
    alignSelf: 'flex-end',
    marginTop: 12,
    marginBottom: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    borderRadius: 2,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 16
  },
  // register screen
  checkboxText: {
    flex: 1,
    marginLeft: 12,
    marginTop: 6,
    fontSize: StyleConstants.fontSizes.xSmall,
    fontFamily: 'Roboto-Regular',
  },
  flexRowAlignEnd: {
    flexDirection: 'row',
    alignItems: 'flex-end'
  },
  countryCodePicker: {
    minWidth: 100,
    marginRight: 16
  },
  // changePassword
  changePasswordInst: {
    marginTop: 20,
    fontSize: StyleConstants.fontSizes.default,
    color: StyleConstants.colors.black
  },
  buttonActivityIndicator: {
    marginLeft: 10
  },
  htmlView: {
    marginTop: -2,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});

export default { login: styles };
