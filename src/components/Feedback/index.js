import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Animated, ActivityIndicator
} from 'react-native';
import ApiUtils from '../../utils/apiUtils';
import Utils from '../../utils/utils';
import Env from '../../utils/envUtils';
import CONTENT from '../../configs/content/communityFeed.json';
import TextInputLayout from '../TextInputLayout/textInputLayout';
import StyleConstants from '../../style/styleConstants';
import TrackedTouchableOpacity from '../TouchableOpacity';
import generalStyles from '../../style';
import styles from './styles';

export default class Loader extends React.PureComponent {
  static propTypes = {
    topOffset: PropTypes.number.isRequired,
    scrollY: PropTypes.instanceOf(Animated.Value).isRequired
  };

  static defaultProps = {};

  state = {
    message: '',
    height: 200,
    submitting: false
  };

  submitFeedback = async () => {
    if (this.state.submitting) return;
    if (this.state.message) {
      this.setState({ submitting: true });
      await ApiUtils.createFeedback(this.state.message);
      Utils.showAlert(
        'THANKS A MILLION!',
        'Your feedback has been submitted and will be reviewed soon. Please let us know if anything else comes up.',
        null,
        null,
        'Close',
        Utils.dismissAlert
      );
      this.setState({ message: '', submitting: false });
      this.input.setState({ text: '' });
    } else {
      Utils.showAlert(
        'Whoops!',
        'It looks like you forgot to enter your feedback.',
        'Try again',
        Utils.dismissAlert,
        null,
        null
      );
    }
  };

  handleMessageChange = (textInputLayout) => {
    this.setState({
      message: textInputLayout.text
    });
  };

  render() {
    const { topOffset } = this.props;
    const { height, submitting } = this.state;
    return (
      <View
        style={[styles.screen, { top: topOffset, paddingBottom: topOffset }]}
      >
        <Text style={styles.H1}>{CONTENT.feedback.title.toUpperCase()}</Text>
        <View style={[styles.input, { height }]}>
          <TextInputLayout
            style={{ paddingTop: 4 }}
            placeholder={CONTENT.feedback.placeholder}
            autoCapitalize={'none'}
            id="message"
            ref={(c) => {
              this.input = c;
            }}
            multiline
            showAnimatedPlaceholder={false}
            onChangeText={this.handleMessageChange}
            returnKeyType={'done'}
            textContentType={'none'}
            fontSize={17}
            placeholderFontSize={17}
            maxLength={500}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TrackedTouchableOpacity
            style={[generalStyles.button, styles.button]}
            activeOpacity={0.7}
            onPress={this.submitFeedback}
            name={Env.getEnvParam('google.events.submitFeedback')}
            optionalValues={{
              label: 'feedback_message',
              value: this.state.message
            }}
          >
            {submitting ? (
              <ActivityIndicator color={StyleConstants.colors.white} />
            ) : (
              <Text style={generalStyles.buttonText}>
                {CONTENT.feedback.cta.toUpperCase()}
              </Text>
            )}
          </TrackedTouchableOpacity>
        </View>
      </View>
    );
  }
}
