import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Env from '../../utils/envUtils';
import BadgeIcon from '../BadgeIcon';
import styles from './styles';

const BADGE_TIERS = Env.getEnvParam('badgeTiers');

const RankStats = ({ points }) => (
  <View style={[styles.stats]}>
    {Object.keys(BADGE_TIERS).map(badge => (
      <View
        style={[
          styles.stat,
          points < BADGE_TIERS[badge].minValue ? styles.statNotObtained : {}
        ]}
        key={badge}
      >
        <BadgeIcon badge={BADGE_TIERS[badge].id} size={72} />
      </View>
    ))}
  </View>
);

RankStats.propTypes = {
  points: PropTypes.number.isRequired
};

export default RankStats;
