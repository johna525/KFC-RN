import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, View, Dimensions, Platform, Animated
} from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import StyleConstants from '../../style/styleConstants';
import styles from './styles';

export default class StickyTabbedNav extends React.Component {
  static propTypes = {
    scrollY: PropTypes.instanceOf(Animated.Value),
    routes: PropTypes.arrayOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
      })
    ).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    children: PropTypes.node
  };

  static HEADER_MAX_HEIGHT = StyleConstants.getFontSize(getStatusBarHeight(true)) + StyleConstants.getFontSize(96);

  static HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 40 : 0;

  HEADER_SCROLL_DISTANCE =
    StickyTabbedNav.HEADER_MAX_HEIGHT - StickyTabbedNav.HEADER_MIN_HEIGHT;

  state = {
    index: 0,
    routes: this.props.routes,
    loaded: [this.props.routes[0].key],
    loading: false
  };

  handleIndexChange = index => this.setState((state) => {
    const { key } = state.routes[index];

    return {
      index,
      loaded: state.loaded.includes(key)
        ? state.loaded
        : [...state.loaded, key]
    };
  });

  renderScene = ({ route }) => {
    const { routes } = this.props;
    if (
      this.state.routes.indexOf(route) !== this.state.index
      && !this.state.loaded.includes(route.key)
    ) {
      return (
        <View>
          <Text>Loading {route.title}</Text>
        </View>
      );
    }
    return routes[this.state.index].component;
  };

  renderTabLabel = ({ route: { title, key } }) => {
    const isActive = this.state.routes[this.state.index].key === key;
    return (
      <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
        {title.toUpperCase()}
      </Text>
    );
  };

  renderTabIndicator = ({ width, position, navigationState }) => {
    const translateX = Animated.multiply(
      Animated.multiply(
        position.interpolate({
          inputRange: [0, navigationState.routes.length - 1],
          outputRange: [0, navigationState.routes.length - 1],
          extrapolate: 'clamp'
        }),
        width
      ),
      1
    );
    return (
      <Animated.View
        style={[
          styles.indicator,
          {
            width,
            transform: [{ translateX }, { translateY: -1 }],
            height: 3,
            top: '100%',
            zIndex: 999,
            overflow: 'visible'
          }
        ]}
      >
        <View
          style={{
            width: '80%',
            left: '10%',
            height: 3,
            borderRadius: 2.5,
            backgroundColor: StyleConstants.colors.colorPrimary
          }}
        />
      </Animated.View>
    );
  };

  render() {
    const {
      scrollY, title, description, children
    } = this.props;

    const headerHeight = scrollY.interpolate({
      inputRange: [0, this.HEADER_SCROLL_DISTANCE],
      outputRange: [
        StickyTabbedNav.HEADER_MAX_HEIGHT,
        StickyTabbedNav.HEADER_MIN_HEIGHT
      ],
      extrapolate: 'clamp'
    });

    const headerInnerOpacity = scrollY.interpolate({
      inputRange: [0, this.HEADER_SCROLL_DISTANCE],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    });

    return (
      <React.Fragment>
        <Animated.View style={[styles.header, { height: headerHeight }]}>
          <Animated.View
            style={[styles.headerInner, { opacity: headerInnerOpacity }]}
          >
            <Text style={styles.welcome}>{description}</Text>
            <Text style={styles.H1}>{title}</Text>
          </Animated.View>
        </Animated.View>
        <TabView
          navigationState={this.state}
          renderScene={this.renderScene}
          onIndexChange={this.handleIndexChange}
          initialLayout={{
            width: Dimensions.get('window').width,
            height: Dimensions.get('window').height
          }}
          useNativeDriver
          renderTabBar={props => (
            <Animated.View
              style={[
                {
                  postion: 'absolute',
                  left: 0,
                  right: 0,
                  top: headerHeight,
                  zIndex: 2
                }
              ]}
            >
              <TabBar
                {...props}
                style={[styles.tabBar]}
                renderLabel={this.renderTabLabel}
                renderIndicator={this.renderTabIndicator}
              />
            </Animated.View>
          )}
        />
        {children}
      </React.Fragment>
    );
  }
}
