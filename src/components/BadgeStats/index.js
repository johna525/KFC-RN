import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import BadgeIcon from '../BadgeIcon';
import styles from './styles';

const badges = [
  'firstRecognitionSent',
  'firstRecognitionReceived',
  // 'firstMessageSent',
  // 'firstMessageReceived',
  // 'firstPost',
  'firstLikeGiven'
];

const BadgeStats = ({ ranks }) => (
  <View style={[styles.stats]}>
    {badges.map(badge => (
      <View
        style={[
          styles.stat,
          !ranks.includes(badge) ? styles.statNotObtained : {}
        ]}
        key={badge}
      >
        <BadgeIcon badge={badge} size={72} />
      </View>
    ))}
    {/* <View style={styles.message}>
      <Text style={styles.messageText}>Get them all to{'\n'}move on!</Text>
    </View> */}
  </View>
);

BadgeStats.propTypes = {
  ranks: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default BadgeStats;
