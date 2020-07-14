import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import moment from 'moment-mini';
import NavigationUtils from '../../utils/navigationUtils';
import APIUtils from '../../utils/apiUtils';
import Icon from '../../components/Icon';
import Loader from '../../components/Loader';
import ButtonBack from '../../components/ButtonBack';
import StyleConstants from '../../style/styleConstants';
import generalStyles from '../../style';
import styles from './styles';
import Shift from '../../components/Shift';

export default class ViewNotificationScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: StyleConstants.colors.colorPrimary,
      elevation: 0,
      height: 88
    },
    headerTitleStyle: {
      color: StyleConstants.colors.white,
      fontFamily: StyleConstants.fonts.robotoMedium,
      fontSize: StyleConstants.getFontSize(16)
    },
    headerTitle: 'MY SHIFTS',
    headerLeft: (
      <ButtonBack onPress={() => NavigationUtils.navigate('Profile')} />
    )
  };

  state = {
    loading: true,
    shifts: null,
    title: null,
    profileImage: null,
    fromName: null,
    content: null
  };

  componentDidMount() {
    this.getShifts();
  }

  getShifts = async () => {
    const response = await APIUtils.getShifts();
    if (response) {
      this.setState({
        loading: false,
        shifts: response
      });
    }
  };

  render() {
    const { loading, shifts } = this.state;
    return (
      <React.Fragment>
        {loading && <Loader text="Loading shifts" />}
        {!loading && shifts && (
          <React.Fragment>
            <View style={[styles.container, styles.nextShift]}>
              <View
                style={[
                  generalStyles.flexRow,
                  generalStyles.alignCenter,
                  styles.nextShiftTitleInner
                ]}
              >
                <Icon
                  name="clock"
                  size={StyleConstants.getSpacing(10)}
                  style={[styles.icon]}
                />
                <View>
                  <Text style={styles.nextShiftTitle}>Upcoming shift</Text>
                  <Text style={styles.nextShiftTime}>
                    {moment(shifts[0]).fromNow()}
                  </Text>
                </View>
              </View>
              <Shift {...shifts[0]} inverted />
            </View>
            <ScrollView style={styles.inner}>
              <View style={styles.container}>
                {shifts.slice(1, shifts.length - 1).map(shift => (
                  <View key={shift.startTime} style={styles.shiftRow}>
                    <Shift {...shift} />
                  </View>
                ))}
              </View>
            </ScrollView>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
