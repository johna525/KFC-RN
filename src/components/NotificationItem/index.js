import React from 'react';
import PropTypes from 'prop-types';
import NavigationUtils from '../../utils/navigationUtils';
import Env from '../../utils/envUtils';
import TrackedTouchableOpacity from '../TouchableOpacity';
import styles from './styles';
import Message from './message';
import Recognition from './recognition';
import Learning from './learning';

const itemComponents = {
  message: props => <Message {...props} />,
  recognition: props => <Recognition {...props} />,
  learning: props => <Learning {...props} />
};

const NotificationItem = ({ type, read, ...rest }) => {
  if (!itemComponents[type]) return null;
  return (
    <TrackedTouchableOpacity
      style={[styles.container, !read && styles.containerRead]}
      onPress={() => {
        if (type === 'recognition') NavigationUtils.navigate('RecognitionReceived', { ...rest });
        else NavigationUtils.navigate('ViewNotification');
      }}
      name={Env.getEnvParam('google.events.notificationOpen')}
    >
      {itemComponents[type](rest)}
    </TrackedTouchableOpacity>
  );
};

NotificationItem.propTypes = {
  type: PropTypes.oneOf(['message', 'recognition', 'learning']).isRequired,
  // read: PropTypes.bool.isRequired
};

export default NotificationItem;
