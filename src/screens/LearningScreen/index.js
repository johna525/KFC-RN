import React from 'react';
import { Text, View, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { Svg, Path } from 'react-native-svg';
import SafariView from 'react-native-safari-view';
import Env from '../../utils/envUtils';
import NavigationUtils from '../../utils/navigationUtils';
import TrackedTouchableOpacity from '../../components/TouchableOpacity';
import CONTENT from '../../configs/content/learningZone.json';
import generalStyles from '../../style';
import StyleConstants from '../../style/styleConstants';
import styles from './styles';

const CLIENT_ID = '4l8vk0al9s1bk0ac26ult7shr2';
const CALLBACK_URI = 'kfc1010://callback/';
const learningZoneURL = `https://kfclearningzone.yum.com/login?response_type=token&client_id=${CLIENT_ID}&redirect_uri=${CALLBACK_URI}`;
const HEADER_HEIGHT = StyleConstants.getFontSize(getStatusBarHeight(true))
  + StyleConstants.getFontSize(96);

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  pressHandler = async (url) => {
    if (Platform.OS === 'ios' && 0) SafariView.show({ url });
    else {
      NavigationUtils.navigate('AuthBrowser', { URI: url, backTo: 'App' });
    }
  }

  render() {
    return (
        <View style={styles.container}>
          <View style={[styles.header, { height: HEADER_HEIGHT }]}>
            <View style={[styles.headerInner]}>
              <Text style={styles.welcome}>{CONTENT.description}</Text>
              <Text style={styles.H1}>{CONTENT.title}</Text>
            </View>
          </View>
          <View style={styles.inner}>
            {CONTENT.heading && (
              <Text style={styles.heading}>{CONTENT.heading}</Text>
            )}
            <View style={generalStyles.alignCenter}>
              <Svg height="147" width="137" viewBox="0 0 137 147">
                <Path
                  d="M63.997 76.546A23.131 23.131 0 0 1 69 76c1.354 0 2.693.117 4.007.348.313-15.693 11.924-28.615 27.033-30.966A84.478 84.478 0 0 0 91 38.194v-.855a2.006 2.006 0 0 1-.131.07L69.53 47.699a2 2 0 0 1-1.688.022L45.18 37.541a2.005 2.005 0 0 1-.18-.092v.745a84.358 84.358 0 0 0-8.906 7.065c15.593 1.992 27.68 15.206 27.903 31.287zm-.037 2.062C63.123 95.534 49.134 109 32 109a31.887 31.887 0 0 1-21.766-8.543C12.781 127.811 35.89 145 68 145c31.727 0 54.666-16.781 57.666-43.567A31.873 31.873 0 0 1 105 109c-17.209 0-31.245-13.584-31.97-30.614A21.112 21.112 0 0 0 69 78a21.131 21.131 0 0 0-4.958.589l-.082.02zM75 76.774l.13.03-.128.555C75.194 93.762 88.552 107 105 107a29.901 29.901 0 0 0 20.911-8.49c.06-1.04.089-2.094.089-3.162 0-16.251-10.05-34.665-24.069-48.193-15.053 1.53-26.816 14.189-26.93 29.619zm52.863 22.615C125.762 129.947 99.763 147 68 147c-32.157 0-58.406-17.479-59.93-48.754A31.88 31.88 0 0 1 0 77c0-17.673 14.327-32 32-32 .497 0 .992.011 1.484.034 3.436-3.246 7.024-6.156 10.635-8.638a1.997 1.997 0 0 1-.119-.68V25h.15l-11.967-5.358a2 2 0 0 1 .01-3.655L68.036.17a2 2 0 0 1 1.615 0l35.844 15.817a2 2 0 0 1 .505 3.339V29.1a5.002 5.002 0 0 1-1 9.9 5 5 0 0 1-1-9.9v-8.784l-12 5.373v9.918c0 .268-.053.527-.152.766 3.642 2.501 7.263 5.438 10.728 8.717.8-.06 1.608-.09 2.424-.09 17.673 0 32 14.327 32 32 0 8.716-3.485 16.618-9.137 22.39zm.13-3.118A29.88 29.88 0 0 0 135 77c0-16.569-13.431-30-30-30-.153 0-.307.001-.46.003 13.08 13.103 23.46 31 23.46 48.345 0 .31-.002.617-.007.923zM8.001 95.005c.136-17.238 10.465-34.984 23.457-48C15.14 47.294 2 60.612 2 77c0 6.756 2.233 12.99 6.001 18.005zm26.15-47.93C20.09 60.61 10 79.066 10 95.349c0 .703.013 1.4.038 2.09C15.516 103.32 23.328 107 32 107c16.569 0 30-13.431 30-30 0-15.846-12.285-28.822-27.85-29.924zM104 18.126V18h.278l.41-.183L68.844 2 33 17.817l35.844 16.049L104 18.124zm-58 7.704v9.888l22.662 10.18L90 35.607v-9.023l-20.339 9.107a2 2 0 0 1-1.634 0L46 25.83zM105 37a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-22.357 82.714c-4.2 2.78-9.065 4.286-14.143 4.286-5.078 0-9.944-1.506-14.143-4.286C55.82 126.175 61.597 131 68.5 131c6.904 0 12.68-4.825 14.143-11.286zm.348-2.707c.006-.168.009-.337.009-.507 0-8.008-6.492-14.5-14.5-14.5S54 108.492 54 116.5c0 .17.003.339.009.507C58.198 120.237 63.224 122 68.5 122s10.302-1.764 14.491-4.993zm-30.92 1.027l-.157-.121.132-.17c-.03-.41-.046-.825-.046-1.243 0-9.113 7.387-16.5 16.5-16.5S85 107.387 85 116.5c0 .418-.016.833-.046 1.243l.132.17-.156.121C84.156 126.428 77.095 133 68.5 133c-8.595 0-15.656-6.572-16.43-14.966zM40.5 91a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm0 2a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19zm6.687-23.93l.837.547-1.095 1.673-.837-.547a12.456 12.456 0 0 0-9.444-1.768 12.458 12.458 0 0 0-7.99 5.584l-.532.847-1.694-1.063.531-.847a14.457 14.457 0 0 1 9.269-6.478c3.83-.814 7.744-.05 10.955 2.051zM40.5 85a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 2a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7zm47.02-17.93a14.456 14.456 0 0 1 10.956-2.052 14.457 14.457 0 0 1 9.268 6.478l.531.847-1.694 1.063-.531-.847a12.458 12.458 0 0 0-7.99-5.584 12.456 12.456 0 0 0-9.445 1.768l-.837.547-1.095-1.673.837-.548zM94.5 91a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15zm0 2a9.5 9.5 0 1 1 0-19 9.5 9.5 0 0 1 0 19zm0-8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm0 2a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"
                  fill="#000"
                  fillRule="nonzero"
                  opacity=".3"
                />
              </Svg>
            </View>
            {CONTENT.introduction && (
              <Text style={styles.introduction}>{CONTENT.introduction}</Text>
            )}
          </View>
          <View style={styles.buttonContainer}>
            <TrackedTouchableOpacity
              style={[generalStyles.button, styles.button]}
              onPress={() => this.pressHandler(learningZoneURL)}
              name={Env.getEnvParam('google.events.learningZoneOpen')}
            >
              <Text style={generalStyles.buttonText}>
                {CONTENT.cta.toUpperCase()}
              </Text>
            </TrackedTouchableOpacity>
          </View>
        </View>
    );
  }
}
