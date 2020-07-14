import React from 'react';
import {
  View, Text, Image, ScrollView
} from 'react-native';
import Markdown from 'react-native-easy-markdown';
import NavigationUtils from '../../utils/navigationUtils';
import Utils from '../../utils/utils';
import Env from '../../utils/envUtils';
import TrackedTouchableOpacity from '../../components/TouchableOpacity';
import Icon from '../../components/Icon';
import Loader from '../../components/Loader';
import ButtonBack from '../../components/ButtonBack';
import StyleConstants from '../../style/styleConstants';
import styles from './styles';
import { Notification } from '../../configs/mockData';

export default class ViewNotificationScreen extends React.Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: StyleConstants.colors.colorPrimary,
      elevation: 0,
      height: 96
    },
    headerLeft: (
      <ButtonBack onPress={() => NavigationUtils.navigate('Notifications')} />
    ),
    headerRight: (
      <TrackedTouchableOpacity
        style={{
          padding: StyleConstants.getSpacing(6),
          flexDirection: 'row',
          alignItems: 'center'
        }}
        onPress={() => {
          const alertTitle = 'Are you sure?';
          const alertMessage = 'You want to delete a message. This action cannot be undone.';
          const alertCancelText = 'No, Cancel';
          const alertOkText = 'Yes, Delete it';
          Utils.showAlert(
            alertTitle,
            alertMessage,
            alertCancelText,
            Utils.dismissAlert,
            alertOkText,
            Utils.dismissAlert
          );
        }}
        name={Env.getEnvParam('google.events.notificationDelete')}
      >
        <Icon name="bin" color={StyleConstants.colors.white} size={32} />
      </TrackedTouchableOpacity>
    )
  };

  state = {
    loading: true,
    title: null,
    profileImage: null,
    fromName: null,
    content: null
  };

  componentDidMount() {
    this.getPostData();
  }

  getPostData() {
    setTimeout(() => {
      this.setState({
        ...Notification,
        loading: false
      });
    }, 1000);
  }

  render() {
    const {
      loading, title, profileImage, fromName, content
    } = this.state;
    return (
      <React.Fragment>
        {loading && <Loader text="Loading message" />}
        {!loading && (
          <React.Fragment>
            <View style={styles.header}>
              <Image
                source={{ uri: profileImage }}
                style={styles.profileImage}
              />
              <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.from}>From {fromName}</Text>
              </View>
            </View>
            <ScrollView style={styles.inner}>
              <Markdown markdownStyles={styles}>{content}</Markdown>
            </ScrollView>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
