import React from 'react';
import PropTypes from 'prop-types';
import { Circle, G } from 'react-native-svg';

const Community = ({ fill, stroke }) => (
  <G fill={fill} fillRule="nonzero" stroke={stroke} strokeWidth="1.5">
    <Circle x="16" y="16" r="10.625" />
    <Circle x="16" y="5.5" r="2.75" />
    <Circle x="26.5" y="16" r="2.75" />
    <Circle x="16" y="26.5" r="2.75" />
    <Circle x="5.5" y="16" r="2.75" />
  </G>
);

Community.propTypes = {
  fill: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired,
};

export default Community;
