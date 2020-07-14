import React from 'react';
import PropTypes from 'prop-types';
import { View, Animated } from 'react-native';
import Env from '../../utils/envUtils';
import ValueIcon from '../ValueIcon';
import TrackedTouchableOpacity from '../TouchableOpacity';
import styles from './styles';

export default class ValueSelector extends React.Component {
  static propTypes = {
    values: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired,
    onPress: PropTypes.func.isRequired,
    activeValue: PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  };

  fadeAnimations = [];

  positionAnimations = [];

  els = [];

  constructor(props) {
    super(props);
    this.fadeAnimations = [];
    [...props.values].forEach(() => {
      this.fadeAnimations.push(new Animated.Value(0));
      this.positionAnimations.push(new Animated.Value(50));
    });
  }

  componentDidMount() {
    const { values } = this.props;
    const opacityAnimations = values.map((value, i) => {
      return Animated.timing(this.fadeAnimations[i], {
        toValue: 1,
        duration: 150,
        useNativeDriver: true
      });
    });
    const positionAnimations = values.map((value, i) => {
      return Animated.timing(this.positionAnimations[i], {
        toValue: 0,
        duration: 150,
        useNativeDriver: true
      });
    });
    Animated.sequence(positionAnimations).start();
    Animated.sequence(opacityAnimations).start();
  }

  render() {
    const { values, onPress } = this.props;
    return (
      <React.Fragment>
        <View style={styles.valueButtonWrapper}>
          {values.map(value => (
            <TrackedTouchableOpacity
              key={`${value.id}-button`}
              onPress={() => onPress(value)}
              style={styles.valueButton}
              name={Env.getEnvParam('google.events.sendRecognitionSelectValue')}
              optionalValues={{
                label: 'selected_value',
                value: value.id
              }}
            />
          ))}
        </View>
        {values.map((value, i) => (
          <Animated.View
            key={`${value.id}-${i}`}
            style={{
              opacity: this.fadeAnimations[i],
              transform: [{ translateY: this.positionAnimations[i] }]
            }}
          >
            <View
              style={{
                opacity:
                  this.props.activeValue
                  && value.title !== this.props.activeValue.title
                    ? 0.2
                    : 1
              }}
            >
              <View style={styles.valueWrapper}>
                <ValueIcon value={value.id} size={94} />
              </View>
            </View>
          </Animated.View>
        ))}
      </React.Fragment>
    );
  }
}
