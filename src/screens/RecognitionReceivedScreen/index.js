import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import Storage from '@aws-amplify/storage';
import NavigationUtils from '../../utils/navigationUtils';
import Env from '../../utils/envUtils';
import APIUtils from '../../utils/apiUtils';
import Images from '../../assets/images';
import TrackedTouchableOpacity from '../../components/TouchableOpacity';
import ButtonClose from '../../components/ButtonClose';
import PointsCounter from '../../components/PointsCounter';
import ValueIcon from '../../components/ValueIcon';
import ProfileImage from '../../components/ProfileImage';
import CONTENT from '../../configs/content/sendRecognition.json';
import StyleConstants from '../../style/styleConstants';
import generalStyles from '../../style';
import styles from './styles';

const dimensions = Dimensions.get('window');

export default class RecognitionReceivedScreen extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          senderName: PropTypes.string.isRequired,
          recognitionMessage: PropTypes.string.isRequired,
          recognitionValue: PropTypes.string.isRequired,
          receiverId: PropTypes.string,
          mediaType: PropTypes.oneOf(['gif', 'color', 'image']).isRequired,
          mediaValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired
        }).isRequired
      }).isRequired
    }).isRequired
  };

  state = {
    profileImageUri: null,
    image: null
  };

  async componentDidMount() {
    const {
      navigation: {
        state: {
          params: { receiverId, mediaType }
        }
      }
    } = this.props;
    if (receiverId) {
      const user = await APIUtils.getEmployee(receiverId);
      if (user && user.profileImageUri) {
        this.setState({
          profileImageUri: user.profileImageUri
        });
      }
    }
    if (mediaType === 'image') this.loadImage();
  }

  loadImage = async () => {
    const {
      navigation: {
        state: {
          params: { mediaValue }
        }
      }
    } = this.props;
    const image = await Storage.get(mediaValue);
    this.setState({
      image
    });
  };

  renderContent = () => {
    const {
      navigation: {
        state: {
          params: { recognitionMessage, mediaType, mediaValue }
        }
      }
    } = this.props;
    const { image } = this.state;
    return (
      <View style={styles.content}>
        <Text
          style={[
            styles.contentMessage,
            mediaType === 'color' && {
              backgroundColor: mediaValue,
              color: StyleConstants.colors.white,
              width: dimensions.width - (StyleConstants.getSpacing(12) + 4)
            }
          ]}
        >
          {recognitionMessage}
        </Text>
        {mediaType === 'gif' && (
          <Image
            source={Images[CONTENT.contentTypes.gif[mediaValue - 1]]}
            style={{
              height: Math.round((dimensions.width * 15) / 26),
              width: dimensions.width - (StyleConstants.getSpacing(12) + 4),
              overflow: 'hidden'
            }}
          />
        )}
        {mediaType === 'image' && !image && (
          <View
            style={{
              height: Math.round((dimensions.width * 15) / 26),
              width: dimensions.width - (StyleConstants.getSpacing(12) + 4)
            }}
          >
            <ActivityIndicator
              size="large"
              color={StyleConstants.colors.colorPrimary}
            />
          </View>
        )}
        {mediaType === 'image' && image && (
          <Image
            source={{ uri: image }}
            style={{
              height: Math.round((dimensions.width * 15) / 26),
              width: dimensions.width - (StyleConstants.getSpacing(12) + 4),
              overflow: 'hidden'
            }}
          />
        )}
      </View>
    );
  };

  render() {
    const {
      navigation: {
        state: {
          params: { senderName, recognitionValue }
        }
      }
    } = this.props;
    const { profileImageUri } = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.close}>
          <ButtonClose
            onPress={() => NavigationUtils.navigate('Notifications')}
            color={StyleConstants.colors.white}
          />
        </View>
        <View style={styles.inner}>
          <Text style={styles.H1}>CONGRATS!</Text>
          <Text style={styles.message}>
            <Text style={styles.name}>{senderName}</Text> sent you a recognition
          </Text>
          <View style={[generalStyles.flexRow, styles.icons]}>
            <View style={styles.iconContainer}>
              {profileImageUri === null && (
                <View style={styles.icon}>
                  <ActivityIndicator
                    color={StyleConstants.colors.white}
                    size="large"
                  />
                </View>
              )}
              {profileImageUri !== null && profileImageUri !== undefined && (
                <View style={styles.icon}>
                  <ProfileImage
                    profileImageUri={profileImageUri}
                    size={StyleConstants.getSpacing(17)}
                  />
                </View>
              )}
            </View>
            <View style={styles.iconContainer}>
              <View style={styles.icon}>
                <ValueIcon value={recognitionValue} size={68} />
              </View>
            </View>
            <View style={styles.iconContainer}>
              <PointsCounter value={10} inverted />
            </View>
          </View>
          {this.renderContent()}
        </View>
        <View style={styles.buttonContainer}>
          <TrackedTouchableOpacity
            style={[generalStyles.button, styles.button]}
            onPress={() => NavigationUtils.navigate('Notifications')}
            name={Env.getEnvParam('google.events.recognitionClose')}
          >
            <Text style={generalStyles.buttonText}>GOT IT!</Text>
          </TrackedTouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}
