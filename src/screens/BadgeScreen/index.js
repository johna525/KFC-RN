import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, View, Text } from 'react-native';
import { Svg, G, Path } from 'react-native-svg';
import NavigationUtils from '../../utils/navigationUtils';
import Env from '../../utils/envUtils';
import TrackedTouchableOpacity from '../../components/TouchableOpacity';
import ButtonClose from '../../components/ButtonClose';
import PointsCounter from '../../components/PointsCounter';
import CONTENT from '../../configs/content/badges.json';
import BadgeIcon from '../../components/BadgeIcon';
import StyleConstants from '../../style/styleConstants';
import generalStyles from '../../style';
import styles from './styles';

export default class BadgeScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          badge: PropTypes.string.isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  };

  constructor(props) {
    super(props);
    if (CONTENT[props.navigation.state.params.badge]) this.content = CONTENT[props.navigation.state.params.badge];
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          width="310"
          height="120"
          viewBox="0 0 249 97"
        >
          <G fill="#FFF" fill-rule="evenodd">
            <Path d="M19.564 1.368l-6.188 20.54V36H6.72V21.908L.948 1.368h6.708l2.808 12.948 2.548-12.948h6.552zm17.888 27.3c0 2.323-.806 4.238-2.418 5.746s-3.597 2.262-5.954 2.262c-2.392 0-4.394-.754-6.006-2.262s-2.418-3.423-2.418-5.746V8.7c0-2.323.806-4.23 2.418-5.72C24.686 1.49 26.688.744 29.08.744c2.392 0 4.385.745 5.98 2.236 1.595 1.49 2.392 3.397 2.392 5.72v19.968zm-6.812.416v-20.8c0-.45-.147-.815-.442-1.092-.295-.277-.667-.416-1.118-.416-.45 0-.832.139-1.144.416-.312.277-.468.641-.468 1.092v20.8c0 .45.156.815.468 1.092.312.277.693.416 1.144.416.45 0 .823-.139 1.118-.416.295-.277.442-.641.442-1.092zm25.792-.156c0 2.219-.754 4.065-2.262 5.538-1.508 1.473-3.44 2.21-5.798 2.21-2.323 0-4.273-.745-5.85-2.236-1.577-1.49-2.366-3.328-2.366-5.512V1.368h6.708v27.716c0 .45.147.815.442 1.092a1.5 1.5 0 0 0 1.066.416c.485 0 .875-.139 1.17-.416.295-.277.442-.641.442-1.092V1.368h6.448v27.56zM220.268 36h-6.292l-3.38-8.736h-14.612L192.708 36h-6.136l13.936-34.632h5.616L220.268 36zm-11.544-13.416L203.16 8.492l-5.408 14.092h10.972zM248.454 42.466l-5.112 28.4h-4.828l-5.112-28.4V1.428h15.052v41.038zM247.176 96h-12.638V79.67h12.638V96zM41.88 84.504c0 3.157-1.152 5.696-3.456 7.616C36.12 94.04 32.6 95 27.864 95H1.24V52.376h26.24c4.779 0 8.352.97 10.72 2.912 2.368 1.941 3.552 4.512 3.552 7.712v1.216c0 2.219-.747 4.192-2.24 5.92-1.493 1.728-3.733 2.87-6.72 3.424 6.059 1.195 9.088 4.31 9.088 9.344v1.6zm-17.088-16.64v-2.24c0-1.579-1.088-2.368-3.264-2.368H18.84v7.04h2.688c2.176 0 3.264-.81 3.264-2.432zm0 13.952V79.64c0-1.621-1.088-2.432-3.264-2.432H18.84v7.04h2.688c2.176 0 3.264-.81 3.264-2.432zM88.152 95H70.296l-1.664-6.72h-9.408L57.304 95H41.752l13.76-42.624h18.816L88.152 95zM66.52 79.512l-2.112-10.368-2.56 10.368h4.672zm65.984-1.792c0 5.29-1.888 9.493-5.664 12.608S117.592 95 110.424 95h-21.12V52.376h21.12c7.125 0 12.587 1.632 16.384 4.896 3.797 3.264 5.696 7.563 5.696 12.896v7.552zm-17.728-.576v-6.976c0-3.883-1.792-5.824-5.376-5.824h-2.56v18.624h2.56c3.584 0 5.376-1.941 5.376-5.824zM178.264 95h-9.856l-1.088-3.968c-2.816 3.541-7.104 5.312-12.864 5.312-5.76 0-10.443-1.685-14.048-5.056-3.605-3.37-5.408-7.765-5.408-13.184v-8.128c0-5.632 2.09-10.197 6.272-13.696 4.181-3.499 9.685-5.248 16.512-5.248 4.864 0 9.056.917 12.576 2.752 3.52 1.835 6.027 4.245 7.52 7.232l-10.496 7.104c-2.176-2.944-4.885-4.416-8.128-4.416-2.005 0-3.563.576-4.672 1.728-1.11 1.152-1.664 2.795-1.664 4.928v8.832c0 1.792.523 3.157 1.568 4.096 1.045.939 2.464 1.408 4.256 1.408 1.664 0 2.933-.395 3.808-1.184.875-.79 1.312-1.781 1.312-2.976v-.896h-6.4v-7.232h20.8V95zm40.768 0H181.72V52.376h37.312v11.776H199.32V69.4h12.416v7.744H199.32v5.248h19.712V95zM104.192 36h-8.008l-.884-3.224c-2.288 2.877-5.772 4.316-10.452 4.316s-8.485-1.37-11.414-4.108c-2.93-2.739-4.394-6.31-4.394-10.712v-6.604c0-4.576 1.699-8.285 5.096-11.128C77.533 1.697 82.006.276 87.552.276c3.952 0 7.358.745 10.218 2.236 2.86 1.49 4.897 3.45 6.11 5.876l-8.528 5.772c-1.768-2.392-3.97-3.588-6.604-3.588-1.63 0-2.895.468-3.796 1.404-.901.936-1.352 2.27-1.352 4.004v7.176c0 1.456.425 2.565 1.274 3.328.85.763 2.002 1.144 3.458 1.144 1.352 0 2.383-.32 3.094-.962.71-.641 1.066-1.447 1.066-2.418v-.728h-5.2v-5.876h16.9V36zm37.96-14.04c0 4.403-1.62 8.025-4.862 10.868-3.241 2.843-7.6 4.264-13.078 4.264-5.512 0-9.889-1.421-13.13-4.264-3.241-2.843-4.862-6.465-4.862-10.868v-6.604c0-4.403 1.62-8.017 4.862-10.842 3.241-2.825 7.618-4.238 13.13-4.238 5.477 0 9.837 1.413 13.078 4.238 3.241 2.825 4.862 6.44 4.862 10.842v6.604zm-14.56 1.248V14.16c0-2.565-1.127-3.848-3.38-3.848-2.288 0-3.432 1.283-3.432 3.848v9.048c0 2.53 1.144 3.796 3.432 3.796 2.253 0 3.38-1.265 3.38-3.796zm49.972-11.596h-9.776V36H153.54V11.612h-9.776V1.368h33.8v10.244z" />
          </G>
        </Svg>

        <View style={styles.close}>
          <ButtonClose
            onPress={() => NavigationUtils.navigate('Team')}
            size={24}
            color={StyleConstants.colors.white}
          />
        </View>
        <View style={styles.badgeContainer}>
          {this.content.pointValue && (
            <View style={styles.pointValue}>
              <PointsCounter value={this.content.pointValue} />
            </View>
          )}
          <BadgeIcon
            badge={this.props.navigation.state.params.badge}
            size={153}
          />
        </View>
        {this.content.title && (
          <Text style={styles.H1}>{this.content.title}</Text>
        )}
        {this.content.message && (
          <Text style={styles.message}>{this.content.message}</Text>
        )}
        {this.content.cta && (
          <View style={styles.buttonContainer}>
            <TrackedTouchableOpacity
              style={[generalStyles.button, styles.button]}
              onPress={() => NavigationUtils.navigate('Team')}
              name={Env.getEnvParam('google.events.closeBadge')}
            >
              <Text style={generalStyles.buttonText}>
                {this.content.cta.toUpperCase()}
              </Text>
            </TrackedTouchableOpacity>
          </View>
        )}
      </SafeAreaView>
    );
  }
}
