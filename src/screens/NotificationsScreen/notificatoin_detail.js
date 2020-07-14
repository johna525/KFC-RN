/* jshint esversion: 6 *//* jshint node: true */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';
import { Container, Header, Icon } from 'native-base';
import AutoHeightWebView from 'react-native-autoheight-webview';
import { isIphoneX, ifIphoneX } from 'react-native-iphone-x-helper';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import StyleConstants from '../../style/styleConstants';
import { dySize } from '../../style/responsive';
import Utils from '../../utils/utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleConstants.colors.white
  },
  topImage: {
    height: 200,
    resizeMode: 'cover',
    backgroundColor: StyleConstants.colors.davyGray
  },
  topImageView: {
    paddingHorizontal: 10,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    // backgroundColor: StyleConstants.colors.davyGray
  },
  headerContainer: {
    height: 60,
    backgroundColor: StyleConstants.colors.white
  },
  stickyHeaderView: {
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: StyleConstants.colors.white,
    borderBottomWidth: 2,
    borderColor: StyleConstants.colors.gray,
    ...ifIphoneX({
      paddingTop: dySize(30)
    }, {
      paddingTop: dySize(0)
    })
  },
  headerView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  authorText: {
    padding: dySize(20),
    color: StyleConstants.colors.fbBlue,
    fontSize: 18,
  },
  headerInnerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: 'transparent',
    borderBottomWidth: 0,
    elevation: 0
  },
  stickyTabView: {
    height: 50,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: StyleConstants.colors.gray
  },
  stickyHeaderText: {
    color: StyleConstants.colors.fbBlue,
    fontSize: 16,
    textAlign: 'center',
  },
  content: {
    flex: 1
  },
  backIconView: {
    width: dySize(40),
    justifyContent: 'center',
    alignItems: 'center'
  },
  foregroundTitle: {
    fontSize: 18,
    color: StyleConstants.colors.white,
    fontWeight: 'bold'
  }
});

export default class NotificationDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visiableHeader: false,
      height: 0,
      notification: this.props.navigation.state.params.notification
    };
  }

  render() {
    const { visiableHeader, height, notification } = this.state;
    return (
      <Container style={styles.container}>
        <ParallaxScrollView
          backgroundColor={StyleConstants.colors.white}
          contentBackgroundColor={StyleConstants.colors.white}
          parallaxHeaderHeight={200}
          fadeOutForeground
          stickyHeaderHeight={visiableHeader ? 100 : 0}
          onChangeHeaderVisibility={(visible) => {
            this.setState({ visiableHeader: !visible });
          }}
          renderStickyHeader={() => (
            <View style={{ zIndex: 100 }}>
              <View style={styles.stickyHeaderView}>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                  <View style={styles.backIconView}>
                    <Icon name="ios-arrow-back" />
                  </View>
                </TouchableOpacity>
                <Text style={styles.stickyHeaderText} numberOfLines={1}>
                  {notification.title.rendered}
                </Text>
                <View style={styles.backIconView} />
              </View>
            </View>
          )}
          renderForeground={() => (
            <View style={styles.topImageView}>
              <Text style={styles.foregroundTitle} numberOfLines={1}>
                {notification.title.rendered}
              </Text>
              {!visiableHeader
              && (
              <View style={styles.headerView}>
                <Header style={styles.headerInnerView}>
                  <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                    <Icon name="ios-arrow-back" />
                  </TouchableOpacity>
                </Header>
              </View>
              )
            }
            </View>
          )}
          renderBackground={() => (
            <Image source={{ uri: notification.better_featured_image.source_url }} opacity={0.7} style={styles.topImage} />
          )}
        >
          <Text style={styles.authorText} numberOfLines={1}>
            Author Name: {notification._embedded.author[0].name}
          </Text>
          <AutoHeightWebView
            style={{ width: dySize(335), height, margin: 20 }}
            onSizeUpdated={size => this.setState({ height: (Platform.OS === 'android' ? size.height / 3 : size.height) + 150 })}
            source={{ html: Utils.convertHTML(notification.content.rendered) }}
            scalesPageToFit={Platform.OS !== 'ios'}
            // scalesPageToFit={false}
          />
        </ParallaxScrollView>
      </Container>
    );
  }
}
