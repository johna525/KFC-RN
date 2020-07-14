import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import Env from '../../utils/envUtils';
import TrackedTouchableOpacity from '../TouchableOpacity';
import generalStyles from '../../style';
import styles from './style';

export default class Alert extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string,
    message: PropTypes.string,
    cancelText: PropTypes.string,
    okText: PropTypes.string,
    cancelClick: PropTypes.func,
    okClick: PropTypes.func,
    requestItem: PropTypes.string
  };

  static defaultProps = {
    title: undefined,
    message: undefined,
    cancelText: undefined,
    okText: undefined,
    cancelClick: undefined,
    okClick: undefined
  };

  onCancelClick = () => {
    if (this.props.cancelClick) this.props.cancelClick(this.props.requestItem);
  };

  onOkClick = () => {
    if (this.props.okClick) this.props.okClick(this.props.requestItem);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.mainContainer}>
          {this.props.title && (
            <Text style={[styles.title]}>{this.props.title.toUpperCase()}</Text>
          )}
          {this.props.message && (
            <Text style={[styles.message]}>{this.props.message}</Text>
          )}
          <View style={styles.buttonContainer}>
            {this.props.okText && (
              <TrackedTouchableOpacity
                style={[generalStyles.button, styles.button]}
                onPress={this.onOkClick}
                activeOpacity={0.7}
                name={Env.getEnvParam('google.events.alertOk')}
                optionalValues={{
                  label: 'button_text',
                  value: this.props.okText.toUpperCase()
                }}
              >
                <Text style={generalStyles.buttonText}>
                  {this.props.okText.toUpperCase()}
                </Text>
              </TrackedTouchableOpacity>
            )}

            {this.props.cancelText && (
              <TrackedTouchableOpacity
                style={[
                  generalStyles.button,
                  generalStyles.buttonRed,
                  styles.button
                ]}
                onPress={this.onCancelClick}
                activeOpacity={0.7}
                name={Env.getEnvParam('google.events.alertCancel')}
                optionalValues={{
                  label: 'button_text',
                  value: this.props.cancelText.toUpperCase()
                }}
              >
                <Text style={generalStyles.buttonText}>
                  {this.props.cancelText.toUpperCase()}
                </Text>
              </TrackedTouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }
}
