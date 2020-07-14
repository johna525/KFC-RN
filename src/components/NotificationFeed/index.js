import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, RefreshControl, View, Animated, Text
} from 'react-native';
import AuthUtils from '../../utils/authUserUtils';
import APIUtils from '../../utils/apiUtils';
import NotificationItem from '../NotificationItem';
import Loader from '../Loader';
import StyleConstants from '../../style/styleConstants';
import styles from './styles';

export default class NotificationFeed extends React.PureComponent {
  static propTypes = {
    scrollY: PropTypes.instanceOf(Animated.Value).isRequired,
    topOffset: PropTypes.number.isRequired,
  };

  state = {
    refreshing: false,
    notificationItems: [],
    notificationItemsPage: 0,
    loading: true,
    fetching: false
  };

  componentDidMount = () => {
    this.fetchNotificationItems();
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.notificationItems.length === 0
      && this.state.notificationItems.length > 0
    ) {
      this.setState({ loading: false });
    }

    if (
      prevState.loading
      && !this.state.loading
      && this.props.scrollY._value > 0 // eslint-disable-line no-underscore-dangle
    ) {
      this.updateScrollPosition();
    }
  }

  updateScrollPosition() {
    const { topOffset } = this.props;
    setTimeout(() => {
      this.list.scrollToOffset({
        offset:
          this.props.scrollY._value <= topOffset // eslint-disable-line no-underscore-dangle
            ? this.props.scrollY._value // eslint-disable-line no-underscore-dangle
            : topOffset,
        animated: false
      });
    }, 0);
  }

  fetchNotificationItems = async () => {
    this.setState({ fetching: true });
    const userAccount = await AuthUtils.getUserAccount();
    const recognitions = await APIUtils.listUserRecognitions(userAccount.username);
    console.log(recognitions);
    this.setState({
      notificationItems: [...this.state.notificationItems, ...recognitions],
      fetching: false
    });
  };

  onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => this.setState({ refreshing: false }), 1000);
  };

  getMoreNotificationItems = () => {
    if (!this.state.fetching) {
      this.setState(
        {
          notificationItemsPage: this.state.notificationItemsPage + 1
        },
        () => {
          this.fetchNotificationItems(this.state.notificationItemsPage);
        }
      );
    }
  };

  renderLoader = () => {
    return <Loader text="LOADING MESSAGES" />;
  };

  renderEmptyView = () => {
    return <Text style={styles.emptyText}>{"I've only had two rules: do all you can and do it the best that you can......"}</Text>;
  }

  render() {
    const { scrollY, topOffset } = this.props;
    const { notificationItems, fetching } = this.state;

    return (
      <React.Fragment>
        {!fetching ? (
          <FlatList
            data={notificationItems}
            ref={(el) => {
              this.list = el;
            }}
            renderItem={({ item }) => <NotificationItem {...item} />}
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: scrollY } } }
            ])}
            keyExtractor={i => i.id}
            // onEndReached={this.getMoreNotificationItems}
            onEndReachedThreshold={1}
            contentContainerStyle={[
              styles.feedList,
              { top: topOffset, paddingBottom: topOffset }
            ]}
            ListEmptyComponent={this.renderEmptyView}
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this.onRefresh}
                title="Pull to refresh"
                tintColor={StyleConstants.colors.colorPrimary}
                titleColor={StyleConstants.colors.white}
                progressViewOffset={topOffset}
                colors={[
                  StyleConstants.colors.colorPrimary,
                  StyleConstants.colors.colorPrimaryDark
                ]}
              />
            }
            // ListFooterComponent={this.renderLoader}
          />
        ) : (
          <View style={{ paddingTop: topOffset }}>{this.renderLoader()}</View>
        )}
      </React.Fragment>
    );
  }
}
