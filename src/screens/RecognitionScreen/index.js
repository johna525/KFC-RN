import React from 'react';
import PropTypes from 'prop-types';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  InteractionManager,
  Dimensions
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import NavigationUtils from '../../utils/navigationUtils';
import APIUtils from '../../utils/apiUtils';
import Env from '../../utils/envUtils';
import ValueIcon from '../../components/ValueIcon';
import ContentSelector from '../../components/ContentSelector';
import ButtonClose from '../../components/ButtonClose';
import Icon from '../../components/Icon';
import TrackedTouchableOpacity from '../../components/TouchableOpacity';
import CONTENT from '../../configs/content/sendRecognition.json';
import StyleConstants from '../../style/styleConstants';
import styles from './styles';
import generalStyles from '../../style';
import ValueSelector from '../../components/ValueSelector';
import ProfileImage from '../../components/ProfileImage';

const dimensions = Dimensions.get('window');

export default class SendRecognition extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          teamMember: PropTypes.shape({
            name: PropTypes.string.isRequired,
            profileImageUri: PropTypes.string.isRequired,
            username: PropTypes.string.isRequired
          }).isRequired
        }).isRequired
      }).isRequired,
      navigate: PropTypes.func.isRequired
    }).isRequired
  };

  static stepMethods = [
    'renderSelectValue',
    'renderSelectMessage',
    'renderSelectContent'
  ];

  state = {
    initialLoad: true,
    showContentSelector: null,
    loading: false,
    activeStep: 0,
    value: null,
    message: null
  };

  componentDidMount() {
    InteractionManager.runAfterInteractions(this.loaded);
  }

  send = async () => {
    const receiverName = this.props.navigation.state.params.teamMember.name;
    const { message, content, value } = this.state;
    APIUtils.sendRecognition(
      message,
      content.type,
      content.value,
      value.id,
      this.props.navigation.state.params.teamMember.username,
      receiverName
    );
    NavigationUtils.navigate('Team');
  };

  loaded = () => {
    if (this.state.initialLoad) this.setState({ initialLoad: false });
  };

  handleNextClick = () => {
    const { activeStep } = this.state;
    if (SendRecognition.stepMethods[activeStep + 1]) {
      this.setState({ activeStep: activeStep + 1 });
    } else {
      this.send();
    }
  };

  handleSelectValue = (newValue) => {
    const { value } = this.state;
    this.setState({
      value: value && value.title === newValue.title ? null : newValue
    });
  };

  nextDisabled() {
    const { activeStep, value, message } = this.state;
    if ((activeStep === 0 && !value) || (activeStep === 1 && !message)) return true;
    return false;
  }

  renderProgressIndicator() {
    const { activeStep } = this.state;
    const backDisabled = activeStep === 0;
    const nextDisabled = this.nextDisabled();
    const pips = [];
    for (let index = 0; index < SendRecognition.stepMethods.length; index++) {
      pips.push(
        <View
          key={index}
          style={[
            styles.progressPip,
            index === activeStep ? styles.progressPipActive : ''
          ]}
        />
      );
    }

    return (
      <View style={styles.progress}>
        <TrackedTouchableOpacity
          disabled={backDisabled}
          onPress={() => this.setState({ activeStep: activeStep - 1 })}
          name={Env.getEnvParam('google.events.sendRecognitionStepBack')}
          optionalValues={{
            label: 'to_step',
            value: activeStep
          }}
        >
          <Text
            style={[
              styles.progressButton,
              backDisabled ? styles.progressButtonDisabled : ''
            ]}
          >
            Prev
          </Text>
        </TrackedTouchableOpacity>
        <View style={styles.pipContainer}>{pips}</View>
        <TrackedTouchableOpacity
          disabled={nextDisabled}
          onPress={this.handleNextClick}
          style={[
            styles.progressButtonContainer,
            activeStep === CONTENT.steps.length - 1
              ? styles.progressButtonFinalContainer
              : ''
          ]}
          name={Env.getEnvParam('google.events.sendRecognitionStepNext')}
          optionalValues={{
            label: 'to_step',
            value: activeStep + 2
          }}
        >
          <Text
            style={[
              styles.progressButton,
              nextDisabled ? styles.progressButtonDisabled : '',
              activeStep === CONTENT.steps.length - 1
                ? styles.progressButtonFinal
                : ''
            ]}
          >
            {CONTENT.steps[activeStep].nextLabel}
          </Text>
        </TrackedTouchableOpacity>
      </View>
    );
  }

  renderValueButtons() {
    const { initialLoad, value } = this.state;
    if (initialLoad) return null;
    return (
      <View style={[generalStyles.flexRow, styles.selectValue]}>
        <ValueSelector
          values={CONTENT.values}
          onPress={selectedValue => this.handleSelectValue(selectedValue)}
          activeValue={value}
        />
      </View>
    );
  }

  renderSelectValue() {
    const { value: currentValue } = this.state;
    return (
      <View style={generalStyles.alignCenter}>
        <Text style={styles.H1}>
          {currentValue
            ? currentValue.title.toUpperCase()
            : CONTENT.steps[0].defaultTitle.toUpperCase()}
        </Text>
        <Text style={styles.description}>
          {currentValue
            ? currentValue.description
            : CONTENT.steps[0].defaultDescription}
        </Text>
        {this.renderValueButtons()}
      </View>
    );
  }

  renderSelectMessage() {
    const { message: currentMessage } = this.state;
    return (
      <View style={styles.messagsContainer}>
        {CONTENT.messages.map(message => (
          <TrackedTouchableOpacity
            key={message}
            onPress={() => this.setState({
              message: currentMessage === message ? null : message
            })
            }
            style={[
              styles.messageButton,
              currentMessage === message && styles.messageButtonActive
            ]}
            name={Env.getEnvParam('google.events.sendRecognitionSelectMessage')}
            optionalValues={{
              label: 'message',
              value: message
            }}
          >
            <Text
              style={[
                styles.messageText,
                currentMessage === message && styles.messageTextActive
              ]}
            >
              {message}
            </Text>
          </TrackedTouchableOpacity>
        ))}
      </View>
    );
  }

  handleSelectContent = (id) => {
    if (id === 'gif' || id === 'color') {
      this.setState({ showContentSelector: id });
    } else if (id === 'image') {
      ImagePicker.launchImageLibrary(
        { mediaType: 'photo', allowsEditing: true, noData: true },
        (response) => {
          if (!response.didCancel && !response.error) {
            this.setState({ content: { type: id, value: response } });
          }
        }
      );
    } else if (id === 'camera') {
      ImagePicker.launchCamera(
        {
          mediaType: 'photo',
          allowsEditing: true,
          noData: true
        },
        (response) => {
          if (!response.didCancel && !response.error) {
            this.setState({ content: { type: id, value: response } });
          }
        }
      );
    }
  };

  renderSelectContent() {
    const { message, content } = this.state;
    return (
      <View style={styles.selectContentContainer}>
        <Text
          style={[
            styles.selectContentMessage,
            content
              && content.type === 'color' && {
              backgroundColor: content.value,
              color: StyleConstants.colors.white
            }
          ]}
        >
          {message}
        </Text>
        {content && content.type !== 'color' && (
          <Image
            source={content.value}
            resizeMode="cover"
            style={{
              height: Math.round((dimensions.width * 15) / 26),
              width: dimensions.width - StyleConstants.getSpacing(12),
              overflow: 'hidden'
            }}
          />
        )}
        <View style={!content ? styles.selectContentButtonContainer : null}>
          {CONTENT.contentSelection.map(contentType => (!content ? (
              <TrackedTouchableOpacity
                style={styles.selectContentButton}
                key={contentType.text}
                onPress={() => this.handleSelectContent(contentType.id)}
                name={Env.getEnvParam(
                  'google.events.sendRecognitionSelectContentType'
                )}
                optionalValues={{
                  label: 'content_type',
                  value: contentType.text
                }}
              >
                <Icon
                  name={contentType.icon}
                  size={30}
                  style={styles.selectContentIcon}
                />
                <Text style={styles.selectContentType}>{contentType.text}</Text>
              </TrackedTouchableOpacity>
          ) : content.type === contentType.id ? (
              <TrackedTouchableOpacity
                style={styles.selectContentButton}
                key={contentType.removeText}
                onPress={() => this.setState({ content: null })}
                name={Env.getEnvParam(
                  'google.events.sendRecognitionDeselectContentType'
                )}
                optionalValues={{
                  label: 'content_type',
                  value: contentType.text
                }}
              >
                <Icon
                  name="remove"
                  size={30}
                  style={styles.selectContentIcon}
                />
                <Text style={styles.selectContentType}>
                  {contentType.removeText}
                </Text>
              </TrackedTouchableOpacity>
          ) : null))}
        </View>
      </View>
    );
  }

  renderActiveStep() {
    const { activeStep } = this.state;
    return this[SendRecognition.stepMethods[activeStep]]();
  }

  render() {
    const { activeStep, showContentSelector, value } = this.state;
    return (
      <React.Fragment>
        {showContentSelector && (
          <ContentSelector
            contentType={showContentSelector}
            closeCallback={(selection) => {
              const content = selection || this.state.content;

              this.setState({
                showContentSelector: null,
                content
              });
            }}
          />
        )}
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.screen}>
            <View style={styles.header}>
              <View style={[generalStyles.flexRow, styles.alignCenter]}>
                <View style={styles.headerProfileImage}>
                  <ProfileImage
                    profileImageUri={
                      this.props.navigation.state.params.teamMember
                        .profileImageUri
                    }
                    size={StyleConstants.getSpacing(12)}
                  />
                </View>
                {value && (
                  <View style={styles.headerValueIcon}>
                    <ValueIcon value={value.id} size={46} />
                  </View>
                )}
                <Text style={styles.headerText}>
                  Send recognition to{'\n'}
                  <Text style={styles.headerName}>
                    {this.props.navigation.state.params.teamMember.name}
                  </Text>
                </Text>
              </View>
              <ButtonClose onPress={() => NavigationUtils.navigate('Team')} />
            </View>
            <View style={styles.container}>
              {CONTENT.steps[activeStep].title && (
                <Text style={styles.H1}>
                  {CONTENT.steps[activeStep].title.toUpperCase()}
                </Text>
              )}
              {CONTENT.steps[activeStep].description && (
                <Text style={styles.description}>
                  {CONTENT.steps[activeStep].description}
                </Text>
              )}
              <View style={activeStep !== 0 ? styles.innerContainer : ''}>
                {this.renderActiveStep()}
              </View>
              {this.renderProgressIndicator()}
            </View>
          </View>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}
