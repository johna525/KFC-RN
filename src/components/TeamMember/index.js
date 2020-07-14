import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Animated, Easing
} from 'react-native';
import APIUtils from '../../utils/apiUtils';
import Env from '../../utils/envUtils';
import Icon from '../Icon';
import ProfileImage from '../ProfileImage';
import TrackedTouchableOpacity from '../TouchableOpacity';
import styles from './styles';

export default class TeamMember extends React.PureComponent {
  static propTypes = {
    index: PropTypes.number.isRequired,
    profileImageUri: PropTypes.string,
    name: PropTypes.string.isRequired,
    points: PropTypes.number,
    sendRecognition: PropTypes.func.isRequired
  };

  static defaultProps = {
    points: 0
  };

  constructor(props) {
    super(props);
    const rank = APIUtils.getRank(props.points);
    this.rank = rank.currentBadge.name.toUpperCase();
  }

  animated = new Animated.Value(0);

  async componentDidMount() {
    Animated.timing(this.animated, {
      toValue: 1,
      duration: 250,
      delay: (this.props.index + 1) * 100,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true
    }).start();
  }

  render() {
    const { name, sendRecognition } = this.props;
    return (
      <Animated.View
        style={[
          styles.container,
          { opacity: this.animated },
          {
            transform: [
              {
                translateX: this.animated.interpolate({
                  inputRange: [0, 1],
                  outputRange: [-100, 0],
                  extrapolate: 'clamp'
                })
              }
            ]
          }
        ]}
      >
        <View style={styles.profileImage}>
          <ProfileImage
            profileImageUri={this.props.profileImageUri}
            size={72}
          />
        </View>
        <View style={styles.information}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{this.rank}</Text>
          </View>
        </View>
        <TrackedTouchableOpacity
          style={styles.sendButton}
          onPress={sendRecognition}
          name={Env.getEnvParam('google.events.openSendRecognition')}
          optionalValues={{
            label: 'toUser',
            value: name
          }}
        >
          <Icon name="send-recognition" size={32} style={styles.sendIcon} />
        </TrackedTouchableOpacity>
      </Animated.View>
    );
  }
}
