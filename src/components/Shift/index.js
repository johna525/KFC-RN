import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-mini';
import { View, Text } from 'react-native';
import generalStyles from '../../style';
import styles from './styles';

const withInvertStyle = (style, inverted) => {
  return [style, inverted && styles.inverted];
};

const Shift = ({
  startTime, endTime, location, inverted
}) => (
  <View style={[generalStyles.flexRow, generalStyles.alignCenter]}>
    <View style={withInvertStyle(styles.date, inverted)}>
      <Text style={withInvertStyle(styles.dateDay, inverted)}>
        {moment(startTime).format('DD')}
      </Text>
      <Text style={withInvertStyle(styles.dateMonth, inverted)}>
        {moment(startTime).format('MMM')}
      </Text>
    </View>
    <View style={[generalStyles.flexTwo, styles.center]}>
      <Text style={withInvertStyle(styles.day, inverted)}>{moment(startTime).format('dddd')}</Text>
      <Text style={withInvertStyle(styles.time, inverted)}>
        {moment(startTime).format('h:mma')} — {moment(endTime).format('h:mma')}
      </Text>
    </View>
    <View>
      <Text style={withInvertStyle(styles.location, inverted)}>{location}</Text>
    </View>
  </View>
);

Shift.defaultProps = {
  inverted: false
};

Shift.propTypes = {
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  inverted: PropTypes.bool
};

export default Shift;
