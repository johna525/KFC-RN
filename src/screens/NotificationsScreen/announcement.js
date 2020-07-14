import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, RefreshControl, View, Animated, Image, Text, TouchableOpacity
} from 'react-native';
import Axios from 'axios';
import moment from 'moment-mini';
import * as _ from 'lodash';
import Images from '../../assets/images';
import StyleConstants from '../../style/styleConstants';
import styles from './styles';
import NavigationUtils from '../../utils/navigationUtils';
import Loader from '../../components/Loader';

export default class AnnouncementFeed extends React.PureComponent {
  static propTypes = {
    scrollY: PropTypes.instanceOf(Animated.Value).isRequired,
    topOffset: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      notificationItems: [],
      empty: false
    };
  }

  componentDidMount = () => {
    this.fetchNotificationItems();
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.scrollY._value > 0) {
    // eslint-disable-line no-underscore-dangle
      this.updateScrollPosition();
    }
  }

  onRefresh = () => {
    this.fetchNotificationItems();
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

  sortByUpdatedTime = (array) => {
    const result = _.sortBy(array, 'date').reverse();
    return result;
  }

  fetchNotificationItems = async () => {
    this.setState({ loading: true, empty: false, notificationItems: [] });
    Axios.get('https://kfc1010.reactnative.guru/wp-json/wp/v2/posts?_embed')
      .then((res) => {
        this.setState({ notificationItems: this.sortByUpdatedTime(res.data), loading: false });
        if (res.data.length === 0) this.setState({ empty: true });
      })
      .catch((e) => {
        console.log(e.toString());
        this.setState({ loading: false });
      });
  };

  onPressItem = (notification) => {
    NavigationUtils.navigate('NotificationDetail', { notification });
  }

  renderNotificationItem = ({ item }) => {
    const imageURL = item.better_featured_image === null ? '' : item.better_featured_image.source_url;
    return (
      <TouchableOpacity onPress={() => this.onPressItem(item)}>
        <View style={styles.notificationItem}>
          <Image source={imageURL.length > 10 ? { uri: imageURL } : Images.loginHeader} style={styles.itemImage} />
          <View style={styles.infoView}>
            <Text style={styles.name} numberOfLines={2}>{item.title.rendered}</Text>
            <Text style={styles.dateText}>{moment(item.modified).fromNow()}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  renderEmptyView = () => {
    if (!this.state.loading) {
      return (
        <Text style={styles.emptyText}>No results</Text>
      );
    }
    return <Loader color={StyleConstants.colors.gray} />;
  }

  render() {
    const { scrollY, topOffset } = this.props;
    const { notificationItems, loading } = this.state;

    return (
      <React.Fragment>
        <FlatList
          data={notificationItems}
          ref={(el) => {
            this.list = el;
          }}
          renderItem={this.renderNotificationItem}
          scrollEventThrottle={16}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: scrollY } } }
          ])}
          keyExtractor={i => String(i.id)}
          // onEndReached={this.getMoreNotificationItems}
          contentContainerStyle={{
            top: topOffset,
            padding: 10,
            paddingBottom: topOffset
          }}
          ListEmptyComponent={this.renderEmptyView}
          refreshControl={
            <RefreshControl
              refreshing={this.state.loading}
              onRefresh={this.onRefresh}
              title="Loading..."
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
      </React.Fragment>
    );
  }
}
