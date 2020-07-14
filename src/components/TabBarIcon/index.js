import React from 'react';
import PropTypes from 'prop-types';
import { Svg } from 'react-native-svg';
import Community from './community';
import Learning from './learning';
import Notifications from './notifications';
import Profile from './profile';
import Team from './team';

const ICONS = {
  community: props => <Community {...props} />,
  learning: props => <Learning {...props} />,
  notifications: props => <Notifications {...props} />,
  profile: props => <Profile {...props} />,
  team: props => <Team {...props} />
};

const TabBarIcon = ({ icon, focused }) => (ICONS[icon] ? (
    <Svg height="32" width="32" viewBox="0 0 32 32">
      {ICONS[icon](
        focused
          ? { fill: '#FCE5E9', stroke: '#E4002B' }
          : { fill: '#FFFFFF', stroke: '#4D4D4D' }
      )}
    </Svg>
) : null);

TabBarIcon.propTypes = {
  icon: PropTypes.oneOf([
    'community',
    'learning',
    'notifications',
    'profile',
    'team'
  ]).isRequired,
  focused: PropTypes.bool.isRequired
};

export default TabBarIcon;
