import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import generalStyles from '../../style';
import styles from './styles';

const ProfileStats = ({ recognitionCount, badgeCount }) => (
  <View style={[generalStyles.flexRow]}>
    <View style={styles.stat}>
      <Text style={styles.statFigure}>{recognitionCount}</Text>
      <Text style={styles.statLabel}>Recognitions</Text>
    </View>
    <View style={[styles.stat, styles.statMiddle]}>
      <Text style={styles.statFigure}>{badgeCount}</Text>
      <Text style={styles.statLabel}>Badges</Text>
    </View>
    {/* <View style={styles.stat}>
      <Text style={styles.statFigure}>{rewardCount}</Text>
      <Text style={styles.statLabel}>Rewards</Text>
    </View> */}
  </View>
);

ProfileStats.propTypes = {
  recognitionCount: PropTypes.number.isRequired,
  badgeCount: PropTypes.number.isRequired,
  // rewardCount: PropTypes.number.isRequired
};

export default ProfileStats;
