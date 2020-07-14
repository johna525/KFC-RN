import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Icon from '../Icon';
import StyleConstants from '../../style/styleConstants';
import styles from './styles';

const Learning = ({ title, description }) => (
  <View style={styles.inner}>
    <Icon
      name="learning"
      size={32}
      style={{ color: StyleConstants.colorWithAlpha('black', 0.3) }}
    />
    <View style={styles.text}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.teaser}>{description}</Text>
    </View>
  </View>
);

Learning.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default Learning;
