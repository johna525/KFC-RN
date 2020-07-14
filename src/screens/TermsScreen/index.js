import React from 'react';
import PropTypes from 'prop-types';
import {
  View, TouchableOpacity, Text, SafeAreaView
} from 'react-native';
import Markdown from 'react-native-easy-markdown';
import { Icon } from 'native-base';
import CustomIcon from '../../components/Icon';
import NavigationUtils from '../../utils/navigationUtils';
import ButtonClose from '../../components/ButtonClose';
import StyleConstants from '../../style/styleConstants';
import styles from './styles';
import Env from '../../utils/envUtils';
import TrackedTouchableOpacity from '../../components/TouchableOpacity';
import generalStyles from '../../style';
import CONTENT from '../../configs/content/onboarding.json';

export default class TermsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accepted: false
    };
  }

  toggleCheckBox = () => {
    this.setState({ accepted: !this.state.accepted });
  }

  onAccept = () => {
    NavigationUtils.navigate('ReceivedBadge', { badge: 'newbie' });
  }

  render() {
    return (
      <SafeAreaView style={styles.screen}>
        <Text style={styles.H1}>
          {CONTENT.steps[2].title.toUpperCase()}
        </Text>
        <Text style={styles.description}>
          {CONTENT.steps[2].description}
        </Text>
        <View style={styles.innerContainer}>
          <View style={generalStyles.alignCenter}>
            <CustomIcon
              name="onboarding-envelope"
              size={110}
              color={StyleConstants.colors.colorPrimary}
            />
          </View>
          <TrackedTouchableOpacity
            style={[generalStyles.flexRow, styles.termsContainer]}
            onPress={() => this.setState({ termsAccepted: !this.state.termsAccepted })}
            name={Env.getEnvParam('google.events.onboardingToggleAcceptTerms')}
            optionalValues={{
              label: 'accepted',
              value: this.state.termsAccepted
            }}
          >
            <View style={styles.termsCheckbox}>
              { this.state.termsAccepted && <Icon name="ios-checkmark" style={styles.checkIcon} />}
            </View>
            <Text style={styles.termsText}>
              I agree to the{' '}
              <Text
                onPress={() => NavigationUtils.navigate('ViewTerms')}
                style={styles.termsLink}
              >
                terms and conditions
              </Text>
              .
            </Text>
          </TrackedTouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          {
            this.state.termsAccepted
            && <TouchableOpacity style={styles.buttonContainer} onPress={() => this.onAccept()}>
                <View style={styles.buttonView}>
                  <Text style={styles.buttonText}>Go to Home</Text>
                </View>
            </TouchableOpacity>
          }
        </View>
      </SafeAreaView>
    );
  }
}
