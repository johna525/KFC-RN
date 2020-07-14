import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import moment from 'moment-mini';
import APIUtils from '../../utils/apiUtils';
import Icon from '../Icon';
import ProfileImage from '../ProfileImage';
import StyleConstants from '../../style/styleConstants';
import styles from './styles';

export default class Recognition extends React.PureComponent {
  static propTypes = {
    senderId: PropTypes.string,
    senderName: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
  };

  state = {
    profileImageUri: null,
    name: ''
  };

  async componentDidMount() {
    if (this.props.senderId) {
      const user = await APIUtils.getEmployee(this.props.senderId);
      if (user && user.profileImageUri) {
        this.setState({
          profileImageUri: user.profileImageUri,
          name: user.name
        });
      }
    }
  }

  render() {
    const { senderName, createdAt } = this.props;
    const { profileImageUri } = this.state;
    return (
      <View style={styles.inner}>
        <Icon
          name="send-recognition"
          size={32}
          style={{ color: StyleConstants.colorWithAlpha('black', 0.3) }}
        />
        <View style={styles.profileImage}>
          {profileImageUri && (
            <ProfileImage
              profileImageUri={profileImageUri}
              size={StyleConstants.getSpacing(10)}
            />
          )}
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>{senderName}</Text>
          <Text style={styles.teaser}>Sent you a recognition!</Text>
          <Text style={styles.date}>{moment(createdAt).fromNow()}</Text>
        </View>
      </View>
    );
  }
}
