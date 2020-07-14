import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import FirebaseAnalytics from '../../utils/analyticsUtils';

const TrackedTouchableOpacity = ({
  name,
  optionalValues,
  children,
  onPress,
  ...rest
}) => (
  <TouchableOpacity
    {...rest}
    onPress={(clickProps) => {
      if (name) {
        FirebaseAnalytics.trackButtonClick('button_press', {
          buttonName: name,
          ...optionalValues
        });
      }
      if (onPress) onPress(clickProps);
    }}
  >
    {children}
  </TouchableOpacity>
);

TrackedTouchableOpacity.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  optionalValues: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.any,
  })
};

TrackedTouchableOpacity.defaultPropTypes = {
  name: undefined,
  optionalValues: null
};

export default TrackedTouchableOpacity;
