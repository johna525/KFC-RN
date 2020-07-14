import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import styles from './styles';

const Reward = ({ receiverName, badgeType, profileImage }) => (
  <View style={styles.event}>
    <View style={styles.eventIcon}>
      {profileImage && (
        <Image
          source={{ uri: profileImage }}
          style={styles.eventProfileImage}
        />
      )}
    </View>
    <Text style={styles.eventText}>
      {receiverName} received the {badgeType} Badge.
    </Text>
  </View>
);

Reward.propTypes = {
  receiverName: PropTypes.string.isRequired,
  badgeType: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired
};

export default Reward;
