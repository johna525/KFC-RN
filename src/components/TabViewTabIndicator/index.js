import React from 'react';
import PropTypes from 'prop-types';
import { View, Animated } from 'react-native';
import StyleConstants from '../../style/styleConstants';

const TabViewTabIndicator = ({ width, position, navigationState }) => {
  const translateX = Animated.multiply(
    Animated.multiply(
      position.interpolate({
        inputRange: [0, navigationState.routes.length - 1],
        outputRange: [0, navigationState.routes.length - 1],
        extrapolate: 'clamp'
      }),
      width
    ),
    1
  );
  return (
    <Animated.View
      style={[
        {
          width,
          transform: [{ translateX }, { translateY: -1 }],
          height: 3,
          top: '100%',
          zIndex: 999,
          overflow: 'visible'
        }
      ]}
    >
      <View
        style={{
          width: '80%',
          left: '10%',
          height: 3,
          borderRadius: 2.5,
          backgroundColor: StyleConstants.colors.colorPrimary
        }}
      />
    </Animated.View>
  );
};

TabViewTabIndicator.propTypes = {
  width: PropTypes.number.isRequired,
  position: PropTypes.string.isRequired,
  navigationState: PropTypes.shape({
    routes: PropTypes.array.isRequired
  }).isRequired
};

export default TabViewTabIndicator;
