import React from 'react';
import {
  View, Text, ActivityIndicator, StatusBar, AsyncStorage, Platform
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import SafariView from 'react-native-safari-view';
import { TextField } from 'react-native-material-textfield';
import { API, graphqlOperation } from 'aws-amplify';
import Env from '../../utils/envUtils';
import AuthUtils from '../../utils/authUserUtils';
import APIUtils from '../../utils/apiUtils';
import NavigationUtils from '../../utils/navigationUtils';
import TextUtils from '../../utils/textUtils';
import Utils from '../../utils/utils';
import TextInputLayout from '../../components/TextInputLayout/textInputLayout';
import ProfileImage from '../../components/ProfileImage';
import ButtonClose from '../../components/ButtonClose';
import Icon from '../../components/Icon';
import Loader from '../../components/Loader';
import StyleConstants from '../../style/styleConstants';
import generalStyles from '../../style';
import styles from './styles';
import TrackedTouchableOpacity from '../../components/TouchableOpacity';
import DBUtils from '../../utils/dbUtils';
import {
  listPosts
} from '../../utils/graphqlUtils';
import { listRecognitionLikes } from '../../graphql/queries';
import {
  deleteRecognition, deleteRecognitionLike, deletePost
} from '../../graphql/mutations';

const CLIENT_ID = '4l8vk0al9s1bk0ac26ult7shr2';
const CALLBACK_URI = 'kfc1010://callback/';
const logoutURL = `https://portalsso.yum.com/pkmslogout?response_type=code&client_id=${CLIENT_ID}&redirect_uri=kfc1010://callback/?code=logout`;
const clearADSessionURL = `https://login.microsoftonline.com/common/oauth2/logout?post_logout_redirect_uri=${CALLBACK_URI}?code=clearADsession`;

export default class EditProfileScreen extends React.PureComponent {
  static propTypes = {};

  state = {
    submitting: false,
    profileData: null,
    name: null,
    email: null,
    profileImage: null,
    savingMessage: 'Saving your changes',
    error: {}
  };

  componentDidMount() {
    this.fetchProfileData();
  }

  fetchProfileData = async () => {
    try {
      const account = await AuthUtils.getUserAccount();
      const profileData = await APIUtils.getEmployee(account.username);
      setTimeout(
        () => this.setState({
          profileData: { ...this.state.profileData, ...profileData },
          name: profileData.name,
          email: profileData.userEmailAddress,
          account
        }),
        0
      );
    } catch (error) {
      console.log(error);
      Utils.showAlert(
        'Whoops!',
        "We don't seem to be able to find your profile",
        'Close',
        Utils.dismissAlert,
        null,
        null
      );
    }
  };

  deleteAccount = async () => {
    const { profileData, account } = this.state;
    Utils.dismissAlert();
    let response;
    // deleting posts
    this.setState({ submitting: true, savingMessage: 'Deleting your posts...' });
    response = await API.graphql(graphqlOperation(listPosts));
    const posts = response.data.listPosts.items;
    posts.map(async (post) => {
      if (post.postOwnerUsername === account.username) {
        await API.graphql(
          graphqlOperation(deletePost, { input: { id: post.id } })
        );
      }
    });

    // deleting recognitions
    this.setState({ savingMessage: 'Deleting your recognitions...' });
    response = await APIUtils.listRecognitions();
    response.map(async (recognition) => {
      if (recognition.senderId === account.username) {
        await API.graphql(
          graphqlOperation(deleteRecognition, { input: { id: recognition.id } })
        );
      }
    });

    // deleting recognition likes
    response = await API.graphql(graphqlOperation(listRecognitionLikes, null));
    const RecognitionLikes = response.data.listRecognitionLikes.items;
    RecognitionLikes.map(async (like) => {
      if (like.id.indexOf(account.attributes.sub) > -1) {
        await API.graphql(
          graphqlOperation(deleteRecognitionLike, { input: { id: like.id } })
        );
      }
    });

    // delete user form cognito
    APIUtils.deleteEmployeeProfile();

    // reset point to 0
    await DBUtils.setTallyValue(account.username, 'points', 0, 'badge');

    // remove yum session and onboarding cache
    AsyncStorage.clear();

    // log out from yum provider
    this.pressHandler(logoutURL);

    this.setState({ submitting: false });
  }

  pressHandler = async (url) => {
    if (Platform.OS === 'ios' && 0) SafariView.show({ url });
    else {
      NavigationUtils.navigate('AuthBrowser', { URI: url, backTo: 'Home' });
    }
    setTimeout(() => {
      if (Platform.OS === 'ios' && 0) SafariView.show({ url: clearADSessionURL });
      else {
        NavigationUtils.navigate('AuthBrowser', { URI: clearADSessionURL, backTo: 'Home' });
      }
    }, 2500);
  }

  saveChanges = async () => {
    const { name, email, profileImage } = this.state;

    const response = await APIUtils.updateEmployeeProfile(
      name,
      email,
      profileImage,
      this.imageUploadCallback
    );

    if (response) NavigationUtils.navigate('Profile', { refresh: true });
  };

  imageUploadCallback = (progress) => {
    const percentage = Math.round((progress.loaded / progress.total) * 100);
    if (percentage < 100) {
      this.setState({
        savingMessage: `Uploading your photo. ${percentage}% complete.`
      });
    } else {
      this.setState({ savingMessage: 'Saving your changes' });
    }
  };

  handleImagePickerClick = () => {
    const options = {
      title: 'Select Profile Picture',
      cameraType: 'front',
      mediaType: 'photo',
      allowsEditing: true,
      noData: true
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (!response.didCancel && !response.error) {
        this.setState({
          profileImage: response
        });
      }
    });
  };

  handleSaveClick = async () => {
    const { profileImage } = this.state;
    if (!this.checkValidation()) return;
    this.setState(
      {
        submitting: true,
        savingMessage: profileImage
          ? 'Uploading your photo. 0% complete'
          : 'Saving your changes'
      },
      () => {
        this.saveChanges();
      }
    );
  };

  checkValidation = () => {
    const { email, name } = this.state;
    const error = {};
    if (name.length === 0) error.name = 'This field is required';
    else if (email.length === 0) error.email = 'This field is required';
    else if (!TextUtils.isValidEmail(email)) error.email = 'Email is invalid';
    this.setState({ error });
    if (Object.keys(error).length === 0) return true;
    return false;
  }

  render() {
    const {
      submitting, profileData, name, email, profileImage, error
    } = this.state;
    const saveDisabled = (profileData && name === profileData.name) && (profileData && email === profileData.userEmailAddress) && !profileImage;
    return (
      <React.Fragment>
        <StatusBar
          backgroundColor={StyleConstants.colors.white}
          barStyle="dark-content"
        />
        {submitting ? (
          <View style={styles.loaderContainer}>
            <Loader
              text={this.state.savingMessage}
              color={StyleConstants.colors.davyGray}
            />
          </View>
        ) : (
          <React.Fragment>
            <View style={styles.close}>
              <ButtonClose
                onPress={() => NavigationUtils.navigate('Profile')}
                size={24}
                color={StyleConstants.colors.black}
              />
            </View>
            <View style={styles.screen}>
              <Text style={styles.H1}>EDIT YOUR PROFILE</Text>
              {!profileData && (
                <ActivityIndicator
                  size="large"
                  color={StyleConstants.colors.gray}
                />
              )}
              {profileData && (
                <View>
                  <TrackedTouchableOpacity
                    style={styles.profileImage}
                    name={Env.getEnvParam('google.events.profileEditImage')}
                    onPress={this.handleImagePickerClick}
                  >
                    <View style={styles.profileImageIcon}>
                      <View style={styles.profileImageIconSvg}>
                        <Icon name="camera" size={32} color="#FFFFFF" />
                      </View>
                    </View>
                    <ProfileImage
                      preLoaded={profileImage !== null}
                      profileImageUri={
                        profileImage
                          ? profileImage.uri
                          : profileData.profileImageUri
                      }
                      size={StyleConstants.getSpacing(40)}
                    />
                  </TrackedTouchableOpacity>
                  <TextField
                    label={'Name'}
                    value={name}
                    onChangeText={text => this.setState({ name: text })}
                    error={error.name}
                  />
                  <TextField
                    label={'Email'}
                    value={email}
                    onChangeText={text => this.setState({ email: text })}
                    keyboardType="email-address"
                    error={error.email}
                  />
                </View>
              )}
            </View>
            <View style={styles.buttonContainer}>
              <TrackedTouchableOpacity
                style={[
                  generalStyles.button,
                  styles.button,
                  saveDisabled && generalStyles.buttonDisabled
                ]}
                disabled={saveDisabled}
                onPress={this.handleSaveClick}
                name={Env.getEnvParam('google.events.profileEditSave')}
              >
                <Text style={generalStyles.buttonText}>SAVE CHANGES</Text>
              </TrackedTouchableOpacity>
              <TrackedTouchableOpacity
                style={[
                  generalStyles.button,
                  generalStyles.buttonRed,
                  styles.button,
                  {
                    marginTop: StyleConstants.getSpacing(4)
                  }
                ]}
                onPress={() => NavigationUtils.navigate('Profile')}
                name={Env.getEnvParam('google.events.profileEditCancel')}
              >
                <Text style={generalStyles.buttonText}>
                  CLOSE WITHOUT SAVING
                </Text>
              </TrackedTouchableOpacity>
              <TrackedTouchableOpacity
                onPress={() => Utils.showAlert(
                  'Are your sure?',
                  'Deleting your account will remove all of your recognitions and if you change your mind you will have to start again.',
                  'Yes, delete my account',
                  this.deleteAccount,
                  'No, keep my account',
                  Utils.dismissAlert
                )}
              >
                <Text style={styles.deleteText}>Delete my account</Text>
              </TrackedTouchableOpacity>
            </View>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
