import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Platform
} from 'react-native';
import { WebView } from 'react-native-webview';
import { Icon, Container, Content } from 'native-base';
import { isIphoneX, ifIphoneX } from 'react-native-iphone-x-helper';
import StyleConstants from '../../style/styleConstants';
import NavigationUtils from '../../utils/navigationUtils';
import { dySize } from '../../style/responsive';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StyleConstants.colors.gray
  },
  headerView: {
    ...ifIphoneX({
      height: dySize(80),
      paddingTop: dySize(30)
    }, {
      height: dySize(50),
    }),
    flexDirection: 'row',
    backgroundColor: StyleConstants.colors.white
  },
  header: {
    height: dySize(50),
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 20,
    paddingHorizontal: 20,
  },
  progressView: {
    height: 2,
    backgroundColor: StyleConstants.colors.fbBlue,
    flexDirection: 'row'
  },
  progressBar: {
    height: 2,
    backgroundColor: StyleConstants.colors.red
  }
});

export default class AuthBrowser extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loadingProgress: 0
    };
  }

  onChangeLoadURL = (data) => {
    const { nativeEvent } = data;
    console.log(nativeEvent.url);
    if (nativeEvent.url === undefined) return;
    if (nativeEvent.url.indexOf('id_token') > -1) {
      this.props.navigation.state.params.onGetToken({ url: nativeEvent.url });
      this.props.navigation.goBack();
    }
  }

  onPressBack = () => {
    const { backTo } = this.props.navigation.state.params;
    if (backTo === 'back') this.props.navigation.goBack();
    else NavigationUtils.navigate(backTo);
  }

  render() {
    const { loadingProgress } = this.state;
    return (
      <Container style={styles.container}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={() => this.onPressBack()}>
            <View style={styles.header}>
              <Icon name="ios-arrow-back" style={styles.icon} />
              <Text>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.progressView}>
          <View style={[styles.progressBar, { width: dySize(375) * loadingProgress }]} />
        </View>
        <Content contentContainerStyle={styles.container}>
          <WebView
            source={{ uri: this.props.navigation.state.params.URI }}
            onLoad={syntheticEvent => this.onChangeLoadURL(syntheticEvent)}
            onLoadStart={(syntheticEvent) => {
              // update component to be aware of loading status
              this.setState({ loadingProgress: 0 });
            }}
            onLoadProgress={({ nativeEvent }) => {
              this.setState({ loadingProgress: nativeEvent.progress });
            }}
            scalesPageToFit={Platform.OS !== 'ios'}
            style={styles.container}
          >
        </WebView>
        </Content>
      </Container>
    );
  }
}
