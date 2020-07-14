import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import styles from './styles';

const PointsCounter = ({ value, inverted }) => (
  <View style={[styles.container, inverted ? styles.containerInverted : null]}>
    <Text style={[styles.value, inverted ? styles.valueInverted : null]}>
      +{value}
    </Text>
    <Text style={[styles.text, inverted ? styles.textInverted : null]}>
      POINTS
    </Text>
  </View>
);

PointsCounter.propTypes = {
  value: PropTypes.number.isRequired,
  inverted: PropTypes.bool
};

export default PointsCounter;
