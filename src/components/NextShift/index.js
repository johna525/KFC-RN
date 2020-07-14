import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import StyleConstants from '../../style/styleConstants';
import generalStyles from '../../style';
import APIUtils from '../../utils/apiUtils';
import Shift from '../Shift';

export default class NextShift extends React.PureComponent {
  state = {
    loading: true,
    nextShift: null
  };

  componentDidMount() {
    this.getNextShift();
  }

  getNextShift = async () => {
    const response = await APIUtils.getNextShift();
    if (response) {
      this.setState({
        loading: false,
        nextShift: response
      });
    }
  };

  render() {
    const { loading, nextShift } = this.state;
    return (
      <View
        style={[
          generalStyles.flexRow,
          generalStyles.alignCenter,
          generalStyles.justifyCenter,
          { height: StyleConstants.getSpacing(16) }
        ]}
      >
        {loading && (
          <ActivityIndicator size="small" color={StyleConstants.colors.gray} />
        )}
        {!loading && nextShift && <Shift {...nextShift} />}
      </View>
    );
  }
}
