import React from 'react';
import { Animated } from 'react-native';
import NotificationFeed from '../../components/NotificationFeed';
import StickTabbedNav from '../../components/StickyTabbedNav';
import AnnouncementFeed from './announcement';

export default class NotificationsScreen extends React.Component {
  scrollY = new Animated.Value(0);

  render() {
    return (
      <StickTabbedNav
        title="INBOX"
        description="Everything that's new is here"
        scrollY={this.scrollY}
        routes={[
          {
            key: 'recognitions',
            title: 'Recognitions',
            component: (
              <NotificationFeed
                scrollY={this.scrollY}
                topOffset={StickTabbedNav.HEADER_MAX_HEIGHT}
                intro="Latest news from your restaraunt"
              />
            )
          },
          {
            key: 'announcements',
            title: 'Announcements',
            component: (
              <AnnouncementFeed
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
