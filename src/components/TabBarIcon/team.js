import React from 'react';
import PropTypes from 'prop-types';
import { Path, Circle, G } from 'react-native-svg';

const Team = ({ fill, stroke }) => (
  <G fill={fill} fillRule="nonzero" stroke={stroke} strokeWidth="1.5">
    <Circle x="6" y="8" r="3.25" />
    <Path d="M11.624 17.391c-1.057-2.161-3.295-3.641-5.588-3.641-3.053 0-5.286 2.695-5.286 6.321 0 1.313 3.004 2.34 6.522 2.16l4.352-4.84z" />
    <Circle x="26" y="8" r="3.25" />
    <Path d="M24.864 22.237c3.475.147 6.386-.874 6.386-2.166 0-3.636-2.206-6.321-5.25-6.321-2.29 0-4.54 1.474-5.609 3.625l4.473 4.862z" />
    <Circle x="16" y="9.444" r="4.694" />
    <Path d="M24.25 24.824c0-4.583-3.695-8.296-8.25-8.296s-8.25 3.713-8.25 8.296c0 3.996 16.5 3.996 16.5 0z" />
  </G>
);

Team.propTypes = {
  fill: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired
};

export default Team;
