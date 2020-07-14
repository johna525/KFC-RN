import React from 'react';
import PropTypes from 'prop-types';
import Env from '../../utils/envUtils';
import TrackedTouchableOpacity from '../TouchableOpacity';
import Icon from '../Icon';
import StyleConstants from '../../style/styleConstants';

const ButtonClose = ({ onPress, size, color }) => (
  <TrackedTouchableOpacity
    style={{ padding: StyleConstants.getSpacing(6) }}
    onPress={onPress}
    name={Env.getEnvParam('google.events.close')}
  >
    <Icon name="back" color={color} size={size} />
  </TrackedTouchableOpacity>
);

ButtonClose.defaultProps = {
  size: 32,
  color: 'white'
};

ButtonClose.propTypes = {
  onPress: PropTypes.func.isRequired,
  size: PropTypes.number,
  color: PropTypes.string
};

export default ButtonClose;
