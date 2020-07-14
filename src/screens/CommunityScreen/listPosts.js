import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Animated
} from 'react-native';
import { graphql, compose } from 'react-apollo';
import API, { graphqlOperation } from '@aws-amplify/api';
import Auth from '@aws-amplify/auth';
import * as _ from 'lodash';
import Modal from 'react-native-modal';
import { Icon } from 'native-base';
import StyleConstants from '../../style/styleConstants';
import PostItem from '../../components/PostItem';
import APIUtils from '../../utils/apiUtils';
import {
  listPosts, createPost
} from '../../utils/graphqlUtils';
import images from '../../assets/images';
import { dySize } from '../../style/responsive';

const styles = StyleSheet.create({
  container: {

  },
  addButtonView: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 50,
    width: 50,
  },
  addButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: StyleConstants.colors.black
  },
  addIcon: {
    fontSize: 30,
    color: 'white'
  },
  modalContainer: {
    padding: 20,
    backgroundColor: StyleConstants.colors.white,
  },
  previewText: {
    color: StyleConstants.colors.darkGray,
    fontSize: 20
  },
  modalContentView: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: StyleConstants.colors.gray,
    justifyContent: 'center',
    height: 250,
    marginTop: 20
  },
  modalContent: {
    fontSize: 20,
    height: 230,
    paddingHorizontal: 10
  },
  modalButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    alignItems: 'center'
  },
  submitButton: {
    width: dySize(150),
    height: dySize(33),
    resizeMode: 'stretch'
  },
  cancelButton: {
    backgroundColor: 'transparent',
    padding: 12,
  },
  submitText: {
    color: StyleConstants.colors.white,
    fontSize: 20
  },
  cancelText: {
    fontSize: 20
  },
  lengthText: {
    fontSize: 16,
    color: StyleConstants.colors.gray,
    textAlign: 'right'
  }
});

export default class ListPosts extends React.Component {
  static propTypes = {
    topOffset: PropTypes.number.isRequired,
    scrollY: PropTypes.instanceOf(Animated.Value).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      visiableModal: false,
      previewModal: false,
      postMessage: ''
    };
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = async () => {
    this.setState({ posts: [] });
    const response = await API.graphql(graphqlOperation(listPosts));
    const posts = _.sortBy(response.data.listPosts.items, 'createdAt').reverse();
    this.setState({ posts });

    await Auth.currentAuthenticatedUser()
      .then((user) => {
        this.setState({
          postOwnerUsername: user.username,
          postOwnerId: user.attributes.sub,
          likeOwnerUsername: user.username,
          likeOwnerId: user.attributes.sub
        });
        console.log('UserName::', user.username);
        console.log('UserSub::', user.attributes.sub); // cognito id
      })
      .catch(err => console.log(err));
  }

  addPost = async () => {
    const {
      postMessage, postOwnerUsername, postOwnerId
    } = this.state;
    if (postMessage === '') {
      console.log('Write something!');
      return;
    }
    this.setState({ postMessage: '', visiableModal: false });
    const post = {
      postContent: postMessage,
      postOwnerUsername,
      postOwnerId,
      createdAt: new Date().toISOString()
    };
    console.log('Add Post Param: ', post);
    await API.graphql(graphqlOperation(createPost, post));
    this.fetchPosts();
  }

  onChangeModalText = (name, text) => {
    this.setState({
      [name]: text
    });
  }

  onClickAddPost = () => {
    this.setState({ visiableModal: true });
  }

  cancelModal = () => {
    this.setState({
      postTitle: '',
      postMessage: '',
      visiableModal: false
    });
  }

  onPressItem = (item) => {
    this.setState({ postMessage: item.postContent, previewModal: true });
  }

  onClosePreviewModal = () => {
    this.setState({ postMessage: '', previewModal: false });
  }

  renderItem = ({ item }) => {
    const { postOwnerId, likeOwnerId, likeOwnerUsername } = this.state;
    return (
      <PostItem
        postData={item}
        postOwnerId={postOwnerId}
        likeOwnerId={likeOwnerId}
        likeOwnerUsername={likeOwnerUsername}
        onInteract={() => this.fetchPosts()}
        onPress={() => this.onPressItem(item)}
      />
    );
  }

  render() {
    const {
      posts, visiableModal, previewModal, postMessage
    } = this.state;
    const { scrollY, topOffset } = this.props;
    return (
      <React.Fragment>
        <FlatList
          contentContainerStyle={{ top: topOffset, paddingBottom: topOffset }}
          data={posts}
          renderItem={this.renderItem.bind(this)}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollY } } }
          ])}
        />

        <View style={styles.addButtonView}>
          <TouchableOpacity style={styles.addButton} onPress={() => this.onClickAddPost()}>
            <Icon name="ios-add" style={styles.addIcon} />
          </TouchableOpacity>
        </View>
        <Modal isVisible={visiableModal}>
          <View style={styles.modalContainer}>
            <Text style={styles.lengthText}>{`${postMessage.length} / 280`}</Text>
            <View style={styles.modalContentView}>
              <TextInput
                multiline
                value={postMessage}
                style={styles.modalContent}
                placeholder="Content"
                onChangeText={text => this.onChangeModalText('postMessage', text)}
                textAlignVertical="top"
                maxLength={280}
              />
            </View>
            <View style={styles.modalButtonView}>
              <TouchableOpacity onPress={() => this.cancelModal()}>
                <View style={styles.cancelButton}>
                  <Text style={styles.cancelText}>Cancel</Text>
                </View>
              </TouchableOpacity>
              {
                postMessage.length > 0
                && <TouchableOpacity onPress={() => this.addPost()}>
                  <Image source={images.chirp} style={styles.submitButton} />
                </TouchableOpacity>
              }
            </View>
          </View>
        </Modal>
        <Modal isVisible={previewModal} onBackdropPress={() => this.onClosePreviewModal()}>
          <View style={styles.modalContainer}>
            <Text style={styles.previewText}>{postMessage}</Text>
          </View>
        </Modal>
        </React.Fragment>
    );
  }
}
