import { StyleSheet } from 'react-native';
import StyleConstants from '../../style/styleConstants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: StyleConstants.colorWithAlpha('black', 0.4),
    paddingHorizontal: StyleConstants.getSpacing(6)
  },
  mainContainer: {
    backgroundColor: StyleConstants.colors.white,
    alignItems: 'center',
    padding: StyleConstants.getSpacing(6),
    elevation: 20,
    borderRadius: 2
  },
  title: {
    marginHorizontal: 20,
    color: StyleConstants.colors.black,
    fontFamily: StyleConstants.fonts.knockout68,
    fontSize: 38
  },
  message: {
    fontSize: 17,
    color: StyleConstants.colors.black,
    marginTop: StyleConstants.getSpacing(4),
    textAlign: 'center',
    fontFamily: StyleConstants.fonts.robotoRegular
  },
  buttonContainer: {
    marginTop: StyleConstants.getSpacing(6),
    width: '100%'
  },
  button: {
    width: '100%',
    marginTop: StyleConstants.getSpacing(4)
  }
});

module.exports = styles;
