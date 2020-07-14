import React, { PureComponent } from 'react';
import {
  View, Text, TouchableOpacity, Alert, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'native-base';
import moment from 'moment-mini';
import API, { graphqlOperation } from '@aws-amplify/api';
import StyleConstants from '../style/styleConstants';
import APIUtils from '../utils/apiUtils';
import { deletePost, createLike, deleteLike } from '../utils/graphqlUtils';

const styles = StyleSheet.create({
  postItem: {
    padding: 20,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: StyleConstants.colors.gray,
    alignItems: 'center'
  },
  actionIconView: {
    padding: 10,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionIcon: {
    color: StyleConstants.colors.fbBlue,
    fontSize: 30
  },
  deleteIcon: {
    color: StyleConstants.colors.gray,
    fontSize: 30
  },
  postContent: {
    flex: 1,
    fontSize: 18
  },
  postUsername: {
    fontSize: 14,
    color: StyleConstants.colors.davyGray
  },
  timeago: {
    fontSize: 14,
    color: StyleConstants.colors.gray
  }
});

export default class PostItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  static propTypes = {
    postData: PropTypes.object.isRequired,
    postOwnerId: PropTypes.string,
    likeOwnerId: PropTypes.string,
    likeOwnerUsername: PropTypes.string,
    onInteract: PropTypes.func.isRequired,
    onPress: PropTypes.func.isRequired
  }

  static defaultProps = {
    likeOwnerUsername: '',
    likeOwnerId: '',
    postOwnerId: ''
  }

  componentDidMount() {
    this.getFullName(this.props.postData.postOwnerUsername);
  }

  createLike = async (post) => {
    const postId = await post.id;
    const like = {
      likeOwnerId: this.props.likeOwnerId,
      numberLikes: 1,
      likeOwnerUsername: this.props.likeOwnerUsername,
      id: postId,
    };
    try {
      await API.graphql(graphqlOperation(createLike, like));
      console.log('like successfully created ', like);
      this.props.onInteract();
    } catch (err) {
      console.log('Error', err);
    }
  }

  deleteLike = async (likeUserObject) => {
    const likeId = likeUserObject.id;
    console.log('likeId', likeId);
    try {
      await API.graphql(graphqlOperation(deleteLike, { id: likeId }));
      console.log('Liked successfully deleted');
      this.props.onInteract();
    } catch (err) {
      console.log('Error deleting like', err);
    }
  }

  toggleLike = async (post) => {
    // if there is a like already delete the like
    if (this.likedItems(post).length > 0) {
      this.deleteLike(this.likedItems(post)[0]);
      return;
    }
    // else create a new like
    this.createLike(post);
  }

  likedItems = (post) => {
    const loggedInUser = this.props.postOwnerId;
    // get instance of the current item to be liked
    const likeUserObject = post.likes.items.filter(
      obj => obj.likeOwnerId === loggedInUser
    );
    return likeUserObject;
  }

  // delete post with confirmation
  deletePost = (post) => {
    Alert.alert(
      'Delete Post',
      'Are you sure you want to delete this post?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancelled delete'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => this.confirmDeletePost(post) }
      ],
      { cancelable: false }
    );
  }

  // delete post instance
  confirmDeletePost = async (post) => {
    // get post id
    const postId = await post.id;
    try {
      await API.graphql(graphqlOperation(deletePost, { id: postId }));
      this.props.onInteract();
      console.log('Post deleted!!');
    } catch (err) {
      console.log('Error deleting post', err);
    }
  }

  getFullName = async (username) => {
    const profile = await APIUtils.getEmployee(username);
    this.setState({ username: profile.name });
  }

  render() {
    const { postData, likeOwnerUsername } = this.props;
    return (
      <TouchableOpacity onPress={() => this.props.onPress()}>
        <View key={postData.id} style={styles.postItem}>
          <View style={{ flex: 1 }}>
          <Text style={styles.postContent} numberOfLines={2}>{postData.postContent}</Text>
          <Text style={styles.postUsername} numberOfLines={1}>{this.state.username}</Text>
          <Text style={styles.timeago}>{moment(postData.createdAt).fromNow()}</Text>
          </View>
          <TouchableOpacity onPress={() => this.toggleLike(postData)}>
            <View style={styles.actionIconView}>
              <Icon name="ios-heart" style={[styles.actionIcon, { color: this.likedItems(postData).length > 0 ? StyleConstants.colors.red : StyleConstants.colors.gray }]} />
            </View>
          </TouchableOpacity>
          {
            postData.postOwnerUsername === likeOwnerUsername
              ? <TouchableOpacity onPress={() => this.deletePost(postData)}>
              <View style={styles.actionIconView}>
                <Icon name="ios-trash" style={styles.deleteIcon} />
              </View>
            </TouchableOpacity>
              : <View style={styles.actionIconView} />
          }
        </View>
      </TouchableOpacity>
    );
  }
}
