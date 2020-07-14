import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';
import API, { graphqlOperation } from '@aws-amplify/api';
import Auth from '@aws-amplify/auth';
import moment from 'moment-mini';
import * as _ from 'lodash';
import APIUtils from '../../utils/apiUtils';
import StyleConstants from '../../style/styleConstants';
import ValueIcon from '../ValueIcon';
import ProfileImage from '../ProfileImage';
import styles from './styles';
import Icon from '../Icon';
import { createRecognitionLike } from '../../utils/graphqlUtils';
import { listRecognitionLikes } from '../../graphql/queries';

export default class Recognition extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    receiverName: PropTypes.string.isRequired,
    senderName: PropTypes.string.isRequired,
    recognitionValue: PropTypes.string.isRequired,
    senderId: PropTypes.string,
  };

  state = {
    profileImageUri: null,
    me: null,
    likesRecognition: [],
  };

  async componentDidMount() {
    console.log('Props', this.props);
    if (this.props.senderId) {
      const user = await APIUtils.getEmployee(this.props.senderId);
      if (user && user.profileImageUri) {
        this.setState({
          profileImageUri: user.profileImageUri,
        });
      } else {
        this.setState({ name: 'anonymous user' });
      }
      const me = await Auth.currentAuthenticatedUser();
      this.setState({ me });
      this.listRecognitionLikes(this.props.id);
    }
  }

  likeRecognition = async () => {
    const { me } = this.state;
    if (this.isLiked()) {
      // You already liked this recognition.
      return;
    }
    const like = {
      likeOwnerId: me.attributes.sub,
      numberLikes: 1,
      likeOwnerUsername: me.username,
      id: `${this.props.id}-${me.attributes.sub}`
    };
    try {
      await API.graphql(graphqlOperation(createRecognitionLike, like));
      console.log('like successfully created ', like);
      this.listRecognitionLikes();
    } catch (err) {
      console.log('Error', err);
    }
  }

  listRecognitionLikes = () => {
    try {
      API.graphql(graphqlOperation(listRecognitionLikes, null))
        .then((data) => {
          this.setState({ likesRecognition: data.data.listRecognitionLikes.items });
        });
    } catch (error) {
      console.log(error);
    }
  };

  isLiked = () => {
    const { me, likesRecognition } = this.state;
    if (likesRecognition && likesRecognition.length > 0) {
      const likedArray = likesRecognition.filter((obj) => {
        return `${this.props.id}-${me.attributes.sub}` === obj.id;
      });
      return likedArray.length > 0;
    }
    return false;
  }

  getLikeNumber = () => {
    const { likesRecognition } = this.state;
    if (likesRecognition && likesRecognition.length > 0) {
      const likedArray = likesRecognition.filter((obj) => {
        return obj.id.indexOf(this.props.id) > -1;
      });
      return likedArray.length;
    }
    return 0;
  }

  render() {
    const {
      receiverName, senderName, recognitionValue, createdAt, likesRecognition
    } = this.props;
    const { profileImageUri } = this.state;
    return (
      <View style={styles.container}>
      <View style={styles.event}>
        <View style={styles.eventIcon}>
          <ValueIcon value={recognitionValue} size={88} />
          {profileImageUri && (
            <View style={styles.eventProfileImage}>
              <ProfileImage
                profileImageUri={profileImageUri}
                size={StyleConstants.getSpacing(12)}
              />
            </View>
          )}
        </View>
        <Text style={styles.eventText}>
          {receiverName}
          {'\n'}received recognition from {senderName}.
        </Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.time}>{moment(createdAt).fromNow()}</Text>
        <TouchableOpacity onPress={() => this.likeRecognition()}>
          <View style={styles.likesContainer}>
            <Text style={styles.likes}>{this.getLikeNumber()}</Text>
            <Icon
              name={this.isLiked() ? 'heart-full' : 'heart-empty'}
              size={26}
              style={styles.likeIcon}
            />
          </View>
        </TouchableOpacity>
      </View>
      </View>
    );
  }
}
