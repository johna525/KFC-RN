import React from 'react';
import PropTypes from 'prop-types';
import {
  Animated,
  View,
  Text,
  FlatList,
  Image
} from 'react-native';
import Env from '../../utils/envUtils';
import Images from '../../assets/images';
import ButtonClose from '../ButtonClose';
import TrackedTouchableOpacity from '../TouchableOpacity';
import CONTENT from '../../configs/content/sendRecognition.json';
import StyleConstants from '../../style/styleConstants';
import styles from './styles';

export default class ContentSelector extends React.Component {
  static propTypes = {
    closeCallback: PropTypes.func.isRequired,
    contentType: PropTypes.string.isRequired
  };

  state = {
    overlayOpacity: new Animated.Value(0),
    drawerPosition: new Animated.Value(-256)
  };

  componentDidMount() {
    this.open();
  }

  open() {
    Animated.timing(this.state.overlayOpacity, {
      toValue: 1,
      duration: 200
    }).start();
    Animated.timing(this.state.drawerPosition, {
      toValue: 0,
      duration: 200
    }).start();
  }

  close(selection) {
    const { closeCallback, contentType } = this.props;
    Animated.timing(this.state.drawerPosition, {
      toValue: -256,
      duration: 200
    }).start();
    Animated.timing(this.state.overlayOpacity, {
      toValue: 0,
      duration: 200
    }).start(() => {
      closeCallback(selection ? { type: contentType, value: selection } : null);
    });
  }

  renderOptions() {
    const { contentType } = this.props;
    return (
      <FlatList
        data={CONTENT.contentTypes[contentType]}
        contentContainerStyle={{
          paddingHorizontal: StyleConstants.getSpacing(6)
        }}
        horizontal
        keyExtractor={item => item.toString()}
        renderItem={({ item }) => (contentType === 'gif' ? (
          Images[item] && (
              <TrackedTouchableOpacity
                key={item.toString()}
                onPress={() => this.close(Images[item])}
                activeOpacity={0.8}
                style={[styles.gifOption]}
                name={Env.getEnvParam('google.events.sendRecognitionSelectGif')}
                optionalValues={{
                  label: 'selected_gif',
                  value: item
                }}
              >
                <Image
                  source={Images[item]}
                  style={{ width: 195, height: 144 }}
                  resizeMode="cover"
                />
              </TrackedTouchableOpacity>
          )
        ) : (
            <TrackedTouchableOpacity
              key={item.toString()}
              onPress={() => this.close(item)}
              activeOpacity={0.8}
              name={Env.getEnvParam('google.events.sendRecognitionSelectBackgroundColor')}
              optionalValues={{
                label: 'selected_colour',
                value: item
              }}
              style={[styles.colourOption, { backgroundColor: item }]}
            />
        ))
        }
      />
    );
  }

  render() {
    const { contentType } = this.props;
    const { overlayOpacity, drawerPosition } = this.state;
    return (
      <React.Fragment>
        <Animated.View
          style={[
            styles.screen,
            {
              opacity: overlayOpacity
            }
          ]}
        />
        <Animated.View
          style={[
            styles.container,
            {
              bottom: drawerPosition
            }
          ]}
        >
          <View style={styles.header}>
            <Text style={styles.H1}>SELECT A {contentType.toUpperCase()}</Text>
            <ButtonClose onPress={() => this.close()} />
          </View>
          {this.renderOptions()}
        </Animated.View>
      </React.Fragment>
    );
  }
}
