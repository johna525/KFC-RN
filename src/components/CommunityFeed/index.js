import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, RefreshControl, Text, View, Animated
} from 'react-native';
import ActionButton from 'react-native-action-button';
import * as _ from 'lodash';
import APIUtils from '../../utils/apiUtils';
import FeedItem from '../FeedItem';
import Loader from '../Loader';
import Icon from '../Icon';
import StyleConstants from '../../style/styleConstants';
import styles from './styles';

export default class LocalFeed extends React.PureComponent {
  static propTypes = {
    topOffset: PropTypes.number.isRequired,
    scrollY: PropTypes.instanceOf(Animated.Value).isRequired,
    intro: PropTypes.string.isRequired
  };

  state = {
    refreshing: false,
    feedItems: [],
    feedItemsPage: 0,
    loading: true,
    fetching: false
  };

  componentDidMount = () => {
    this.fetchFeedItems();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.feedItems.length === 0 && this.state.feedItems.length > 0) {
      this.setState({ loading: false });
    }
    if (this.list) this.updateScrollPosition();
  }

  updateScrollPosition() {
    const { topOffset } = this.props;
    setTimeout(() => {
      this.list.scrollToOffset({
        offset:
          this.props.scrollY._value <= topOffset // eslint-disable-line
            ? this.props.scrollY._value // eslint-disable-line
            : topOffset,
        animated: false
      });
    }, 0);
  }

  fetchFeedItems = async () => {
    this.setState({ fetching: true });
    const recognitions = await APIUtils.listRecognitions();
    console.log('FeedItems', recognitions);
    const sortedRecognitions = _.sortBy(recognitions, 'createdAt').reverse();
    this.setState({
      feedItems: [...this.state.feedItems, ...sortedRecognitions],
      fetching: false
    });
  };

  onRefresh = () => {
    this.setState({ refreshing: true });
    setTimeout(() => this.setState({ refreshing: false }), 1000);
  };

  getMoreFeedItems = () => {
    if (!this.state.fetching) {
      this.setState(
        {
          feedItemsPage: this.state.feedItemsPage + 1
        },
        () => {
          this.fetchFeedItems(this.state.feedItemsPage);
        }
      );
    }
  };

  renderLoader = () => {
    return <Loader text="LOADING POSTS" />;
  };

  render() {
    const { scrollY, topOffset, intro } = this.props;
    const { feedItems, fetching } = this.state;

    return (
      <React.Fragment>
        {!fetching ? (
          <FlatList
            data={feedItems}
            ref={(el) => {
              this.list = el;
            }}
            renderItem={({ item }) => <FeedItem {...item} />}
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: scrollY } } }
            ])}
            // onEndReached={this.getMoreFeedItems}
            onEndReachedThreshold={1}
            keyExtractor={i => i.id}
            contentContainerStyle={[
              styles.feedList,
              { top: topOffset, paddingBottom: topOffset }
            ]}
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
            ListHeaderComponent={
              <Text style={styles.description}>{intro}</Text>
            }
            // ListFooterComponent={this.renderLoader()}
          />
        ) : (
          <View style={{ paddingTop: topOffset }}>{this.renderLoader()}</View>
        )}
        {/* <ActionButton
          size={64}
          renderIcon={() => (
            <Icon
              style={{ color: StyleConstants.colors.white, right: -2, top: -3 }}
              size={26}
              name="write"
            />
          )}
        >
          <ActionButton.Item
            buttonColor="#000000"
            title="All Tasks"
            size={42}
            onPress={() => {}}
          >
            <Icon name="write" />
          </ActionButton.Item>
        </ActionButton> */}
      </React.Fragment>
    );
  }
}
