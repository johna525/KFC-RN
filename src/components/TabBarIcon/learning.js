import React from 'react';
import PropTypes from 'prop-types';
import { Circle, G, Path } from 'react-native-svg';

const Learning = ({ fill, stroke }) => (
  <G fill="none" fillRule="nonzero" stroke={stroke} strokeWidth="1.5">
    <Path
      d="M23.5 17v5.392a1 1 0 0 1-.478.853l-7.267 4.446a1 1 0 0 1-1.018.016l-7.733-4.42a1 1 0 0 1-.504-.867V17"
      fill={fill}
      strokeLinecap="square"
    />
    <Path
      d="M2.552 12.163l12.157-7.815a1 1 0 0 1 1.082 0l12.157 7.815a1 1 0 0 1 .004 1.68l-12.157 7.893a1 1 0 0 1-1.09 0L2.548 13.843a1 1 0 0 1 .004-1.68z"
      fill={fill}
      strokeLinecap="square"
    />
    <Path d="M28.5 13v8" strokeLinecap="square" />
    <Circle x="28.25" y="23" fill={fill} r="2.25" />
  </G>
);

Learning.propTypes = {
  fill: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired
};

export default Learning;
