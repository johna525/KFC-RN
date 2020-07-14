import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import ValueIcon from '../ValueIcon';
import styles from './styles';

const defaultStats = {
  authenticity: 0,
  grit: 0,
  integrity: 0,
  generosity: 0,
  hospitality: 0,
  hardwork: 0
};

const getStats = (stats) => {
  return { ...defaultStats, ...stats };
};

const RecognitionStats = ({ stats }) => (
  <View style={[styles.stats]}>
    {Object.keys(getStats(stats)).map(key => (
      <View style={styles.stat} key={key}>
        <View style={styles.statValue}>
          <ValueIcon value={key} size={78} />
        </View>
        <View style={styles.statLabelContainer}>
          <Text style={styles.statLabel}>{getStats(stats)[key]}</Text>
        </View>
      </View>
    ))}
  </View>
);

RecognitionStats.propTypes = {
  stats: PropTypes.shape({
    authenticity: PropTypes.number,
    grit: PropTypes.number,
    integrity: PropTypes.number,
    generosity: PropTypes.number,
    hospitality: PropTypes.number,
    hardwork: PropTypes.number
  }).isRequired
};

RecognitionStats.defaultProps = {
  stats: defaultStats
};

export default RecognitionStats;
