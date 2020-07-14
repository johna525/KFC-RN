import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import moment from 'moment-mini';
import Icon from '../Icon';
import styles from './styles';
import Announcement from './announcement';
import Recognition from './recognition';
import Reward from './reward';
import Badge from './badge';
import Post from './post';

const itemComponents = {
  announcement: props => <Announcement {...props} />,
  recognition: props => <Recognition {...props} />,
  reward: props => <Reward {...props} />,
  badge: props => <Badge {...props} />,
  post: props => <Post {...props} />
};

const FeedItem = ({
  type, likes, liked, ...rest
}) => {
  if (!itemComponents[type]) return null;
  return (
    <View style={styles.container}>
      {itemComponents[type](rest)}
    </View>
  );
};

FeedItem.propTypes = {
  type: PropTypes.oneOf([
    'announcement',
    'recognition',
    'reward',
    'badge',
    'post'
  ]).isRequired,
  createdAt: PropTypes.string.isRequired,
  likes: PropTypes.number,
  liked: PropTypes.bool
};

export default FeedItem;
