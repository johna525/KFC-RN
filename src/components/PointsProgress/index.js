import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Animated, ActivityIndicator, Easing
} from 'react-native';
import BadgeIcon from '../BadgeIcon';
import APIUtils from '../../utils/apiUtils';
import generalStyles from '../../style';
import styles from './styles';
import StyleConstants from '../../style/styleConstants';

export default class PointsProgress extends React.PureComponent {
  static propTypes = {
    points: PropTypes.number.isRequired
  };

  progressOffset = new Animated.Value(-1000);

  state = {
    currentBadge: null,
    nextBadge: null,
    progressBarWidth: null,
    progressInnerWidth: null
  };

  componentDidUpdate(prevProps) {
    if (prevProps.points !== this.props.points) this.calculateTier();
  }

  calculateTier() {
    const { points } = this.props;
    const { progressBarWidth } = this.state;
    const badges = APIUtils.getRank(points);
    const percentageComplete = (100 * points) / badges.nextBadge.minValue;

    this.progressOffset.setValue(progressBarWidth * -1);
    this.setState(
      {
        nextBadge: badges.nextBadge,
        currentBadge: badges.currentBadge,
        progressInnerWidth: (progressBarWidth / 100) * percentageComplete
      },
      () => this.updateProgressBar()
    );
  }

  updateProgressBar() {
    Animated.timing(this.progressOffset, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.out(Easing.cubic)
    }).start();
  }

  measureProgressBar(event) {
    const { progressBarWidth } = this.state;
    this.setState({ progressBarWidth: event.nativeEvent.layout.width }, () => {
      if (!progressBarWidth) this.calculateTier();
    });
  }

  render() {
    const { points } = this.props;
    const { nextBadge, currentBadge, progressInnerWidth } = this.state;

    return (
      <View>
        <Text style={styles.counter}>
          {points !== undefined ? (
            <React.Fragment>
              <Text style={styles.counterTotal}>{points}</Text>
              {nextBadge && (
                <Text>
                  {' / '}
                  {nextBadge.minValue} Points
                </Text>
              )}
            </React.Fragment>
          ) : (
            ''
          )}
        </Text>
        <View
          onLayout={event => this.measureProgressBar(event)}
          style={styles.progressBar}
        >
          <Animated.View
            style={[
              styles.progressBarInner,
              {
                transform: [
                  {
                    translateX: this.progressOffset
                  }
                ],
                width: progressInnerWidth
              }
            ]}
          />
        </View>
        {currentBadge && nextBadge ? (
          <View style={[generalStyles.flexRow, styles.icons]}>
            <View style={[generalStyles.flexRow, generalStyles.alignCenter]}>
              <BadgeIcon badge={currentBadge.id} size={40} />
              <Text
                style={[
                  styles.badgeLabel,
                  { marginLeft: StyleConstants.getSpacing(2) }
                ]}
              >
                {currentBadge.name.toUpperCase()}
              </Text>
            </View>
            <View style={[generalStyles.flexRow, generalStyles.alignCenter]}>
              <Text
                style={[
                  styles.badgeLabel,
                  { marginRight: StyleConstants.getSpacing(2) }
                ]}
              >
                {nextBadge.name.toUpperCase()}
              </Text>
              <BadgeIcon badge={nextBadge.id} size={40} />
            </View>
          </View>
        ) : (
          <View
            style={[
              generalStyles.flexRow,
              generalStyles.alignCenter,
              generalStyles.justifyCenter,
              { height: 40 }
            ]}
          >
            <ActivityIndicator
              size="small"
              color={StyleConstants.colors.gray}
            />
          </View>
        )}
      </View>
    );
  }
}
