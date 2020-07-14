import React from 'react';
import { Animated } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { compose } from 'react-apollo';
import AuthUtils from '../../utils/authUserUtils';
import APIUtils from '../../utils/apiUtils';
import CommunityFeed from '../../components/CommunityFeed';
import Feedback from '../../components/Feedback';
import StickTabbedNav from '../../components/StickyTabbedNav';
import CommunityPosts from './listPosts';
import { getPostsData, ListPosts } from './gql';

const MyListRecognitions = `
    query($userId: String) {
      listRecognitions(filter:{
        receiverId:{
         contains: $userId
        }
      }) {
        items{
          id
          receiverName
          recognitionValue
          recognitionValue
          createdAt
        }
      }
}`;

class CommunityScreen extends React.Component {
  scrollY = new Animated.Value(0);

  state = {
    name: ''
  };

  async componentDidMount() {
    this.getUsername();
    // getPostsData();
    // this.getMyRecognitions();
  }

  getUsername = async () => {
    const userAccount = await AuthUtils.getUserAccount();
    const user = await APIUtils.getEmployee(userAccount.username);
    this.setState({ name: user.name.split(' ')[0] });
  };

  getPosts = async () => {
    try {
      const posts = await API.graphql(graphqlOperation(ListPosts));
      console.log('POST data: ', posts);
      this.setState({
        posts: posts.data.listPosts.items
      });
    } catch (err) {
      console.log(err);
    }
  };

  getPosts = async () => {
    try {
      const posts = await API.graphql(graphqlOperation(ListPosts));
      console.log('POST data: ', posts);
      this.setState({
        posts: posts.data.listPosts.items
      });
    } catch (err) {
      console.log(err);
    }
  };

  getMyRecognitions = async () => {
    try {
      const recognitions = await API.graphql(
        graphqlOperation(MyListRecognitions, {
          userId:
            'CognitoIdentityServiceProvider.71vc1e1s0v3ls2o2dqdh79aef.james.codes@gmail.com.userData'
        })
      );
      console.log('Recognitions data: ', recognitions);
      console.log(
        'Number of Recognitions : ',
        recognitions.data.listRecognitions.items.length
      );
      this.setState({
        posts: recognitions.data.listRecognitions.items
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { name } = this.state;
    return (
      <StickTabbedNav
        title="COMMUNITY"
        description={name ? `Welcome ${name}, this is your home` : ''}
        scrollY={this.scrollY}
        routes={[
          {
            key: 'restaurant',
            title: 'Restaurant',
            component: (
              <CommunityFeed
                scrollY={this.scrollY}
                topOffset={StickTabbedNav.HEADER_MAX_HEIGHT}
                intro="Latest news from your restaraunt"
              />
            )
          },
          {
            key: 'chiprs',
            title: 'Chirps',
            component: (
              <CommunityPosts
                scrollY={this.scrollY}
                topOffset={StickTabbedNav.HEADER_MAX_HEIGHT}
              />
            )
          },
          {
            key: 'feedback',
            title: 'Feedback',
            component: (
              <Feedback
                scrollY={this.scrollY}
                topOffset={StickTabbedNav.HEADER_MAX_HEIGHT}
              />
            )
          }
        ]}
      />
    );
  }
}

export default compose()(CommunityScreen);
