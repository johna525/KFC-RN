import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator, Text } from 'react-native';
import StyleConstants from '../../style/styleConstants';
import styles from './styles';

export default class Loader extends React.PureComponent {
  static propTypes = {
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.string,
    animating: PropTypes.bool
  };

  static defaultProps = {
    backgroundColor: StyleConstants.colors.transparent
  };

  render() {
    return (
      <View
        style={[styles.loader, { backgroundColor: this.props.backgroundColor }]}
      >
        <ActivityIndicator
          size="large"
          color={this.props.color || StyleConstants.colors.gray}
          animating={this.props.animating}
        />
        {this.props.text && (
          <Text
            style={[
              styles.loaderText,
              this.props.color ? { color: this.props.color } : {}
            ]}
          >
            {' '}
            {this.props.text.toUpperCase()}
          </Text>
        )}
      </View>
    );
  }
}
