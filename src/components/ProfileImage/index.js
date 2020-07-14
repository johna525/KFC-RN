import React from 'react';
import PropTypes from 'prop-types';
import Storage from '@aws-amplify/storage';
import { View, ActivityIndicator } from 'react-native';
import { createImageProgress } from 'react-native-image-progress';
import FastImage from 'react-native-fast-image';
import CacheUtils, { CacheConstants } from '../../utils/cacheUtils';
import Icon from '../Icon';
import styles from './styles';
import StyleConstants from '../../style/styleConstants';

const Image = createImageProgress(FastImage);

export default class TeamMember extends React.PureComponent {
  static propTypes = {
    profileImageUri: PropTypes.string,
    size: PropTypes.number,
    preLoaded: PropTypes.bool,
  };

  static defaultProps = {
    size: 100,
    loading: true,
    preLoaded: false,
  };

  state = {
    profileImageUri: null
  };

  componentDidMount() {
    this.loadProfileImage();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.profileImageUri !== this.props.profileImageUri) {
      this.loadProfileImage();
    }
  }

  loadProfileImage = async () => {
    const { profileImageUri, preLoaded } = this.props;
    if (this.props.profileImageUri) {
      const cachedProfileImage = await CacheUtils.get(
        `ProfileImage:${profileImageUri}`
      );
      if (cachedProfileImage) {
        this.setState({
          profileImageUri: cachedProfileImage,
          loading: false
        });
      } else if (preLoaded) {
        this.setState({
          profileImageUri,
          loading: false
        });
      } else {
        this.getProfileImage();
      }
    } else {
      this.setState({
        profileImageUri: undefined,
        loading: false
      });
    }
  }

  getProfileImage = async () => {
    const profileImageUri = await Storage.get(this.props.profileImageUri);
    this.setState({
      profileImageUri,
      loading: false
    }, () => {
      CacheUtils.set(`ProfileImage:${this.props.profileImageUri}`, profileImageUri, {
        expiry: CacheConstants.expiry.MEDIUM,
      });
    });
  };

  getSizeStyle() {
    const { size } = this.props;
    return {
      width: size,
      height: size,
      borderRadius: size / 2
    };
  }

  render() {
    const { profileImageUri } = this.state;
    return (
      <React.Fragment>
        {profileImageUri === null && (
          <View
            style={[
              styles.profileImage,
              styles.profileImagePlaceholder,
              this.getSizeStyle()
            ]}
          >
            <ActivityIndicator
              size="small"
              color={StyleConstants.colors.gray}
            />
          </View>
        )}
        {profileImageUri === undefined && (
          <View
            style={[
              styles.profileImage,
              styles.profileImagePlaceholder,
              this.getSizeStyle()
            ]}
          >
            <Icon name="user" size={38} />
          </View>
        )}
        {profileImageUri && (
          <Image
            source={{ uri: profileImageUri }}
            indicatorProps={{
              size: 'small',
              color: StyleConstants.colors.gray
            }}
            style={[styles.profileImage, this.getSizeStyle()]}
          />
        )}
      </React.Fragment>
    );
  }
}
