import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image,
} from 'react-native';
import Icon from '../Icon';
import StyleConstants from '../../style/styleConstants';
import styles from './styles';
import Utils from '../../utils/utils';

const Message = ({ title, excerpt, profileImage }) => (
  <View style={styles.inner}>
    <Icon
      name="envelope"
      size={32}
      style={{ color: StyleConstants.colorWithAlpha('black', 0.3) }}
    />
    {profileImage && (
      <Image source={{ uri: profileImage }} style={styles.profileImage} />
    )}
    <View style={styles.text}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.teaser}>{excerpt}</Text>
    </View>
    <Icon
      name="bin"
      size={32}
      style={{ color: StyleConstants.colorWithAlpha('black', 0.3) }}
      onPress={() => {
        const alertTitle = 'Are you sure?';
        const alertMessage = 'You want to delete a message. This action cannot be undone.';
        const alertCancelText = 'No, Cancel';
        const alertOkText = 'Yes, Delete it';
        Utils.showAlert(
          alertTitle,
          alertMessage,
          alertCancelText,
          Utils.dismissAlert,
          alertOkText,
          Utils.dismissAlert
        );
      }}
    />
  </View>
);

Message.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
};

export default Message;
