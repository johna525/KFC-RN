import React from 'react';
import PropTypes from 'prop-types';
import Env from '../../utils/envUtils';
import TrackedTouchableOpacity from '../TouchableOpacity';
import Icon from '../Icon';
import styles from './styles';

const ButtonClose = ({ onPress, size, color }) => (
  <TrackedTouchableOpacity
    style={styles.close}
    onPress={onPress}
    name={Env.getEnvParam('google.events.close')}
  >
    <Icon name="close" size={size} style={[styles.icon, { color }]} />
  </TrackedTouchableOpacity>
);

ButtonClose.defaultProps = {
  size: 32,
  color: 'black'
};

ButtonClose.propTypes = {
  onPress: PropTypes.func.isRequired,
  size: PropTypes.number,
  color: PropTypes.string
};

export default ButtonClose;
