import React from 'react';
import PropTypes from 'prop-types';
import { Path, G } from 'react-native-svg';

const Profile = ({ fill, stroke }) => (
  <G fill="none" fillRule="nonzero">
    <Path
      fill={fill}
      d="M16.223 30c-7.456 0-13.5-6.044-13.5-13.5S8.767 3 16.223 3s13.5 6.044 13.5 13.5S23.68 30 16.223 30z"
    />
    <Path
      fill={stroke}
      d="M16.223 15.964a3.321 3.321 0 1 0 0-6.643 3.321 3.321 0 0 0 0 6.643zm0 1.5a4.821 4.821 0 1 1 0-9.643 4.821 4.821 0 0 1 0 9.643z"
    />
    <Path
      fill={stroke}
      d="M7.734 24.981c.832-3.744 4.317-6.552 8.49-6.552 4.172 0 7.656 2.808 8.489 6.552a11.962 11.962 0 0 0 3.51-8.481c0-6.627-5.372-12-12-12-6.627 0-12 5.373-12 12 0 3.312 1.342 6.31 3.51 8.481zm15.643 1.155c-.308-3.463-3.38-6.207-7.154-6.207s-6.846 2.744-7.153 6.207a11.947 11.947 0 0 0 7.153 2.364c2.68 0 5.156-.879 7.154-2.364zM16.223 30c-7.456 0-13.5-6.044-13.5-13.5S8.767 3 16.223 3s13.5 6.044 13.5 13.5S23.68 30 16.223 30z"
    />
  </G>
);

Profile.propTypes = {
  fill: PropTypes.string.isRequired,
  stroke: PropTypes.string.isRequired
};

export default Profile;
