import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import BadgeIcon from '../BadgeIcon';
import styles from './styles';

const Badge = ({ receiverName, badgeType, profileImage }) => (
  <View style={styles.event}>
    <View style={styles.eventIcon}>
      {profileImage && (
        <Image
          source={{ uri: profileImage }}
          style={styles.eventProfileImage}
        />
      )}
      <BadgeIcon badge={badgeType} size={88} />
    </View>
    <Text style={styles.eventText}>
      {receiverName} received the {badgeType} Badge.
    </Text>
  </View>
);

Badge.propTypes = {
  receiverName: PropTypes.string.isRequired,
  badgeType: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired
};

export default Badge;
