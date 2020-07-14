// @flow

import React from 'react';
import ReactNative, {
  ScrollView,
  View,
  Animated,
  TextInput,
  Text,
  Platform
} from 'react-native';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './style';
import StyleConstants from '../../style/styleConstants';

const DEFAULT_PLACEHOLDER_COLOR = StyleConstants.colors.black;
const DEFAULT_LABEL_COLOR = StyleConstants.colors.colorPrimary;
const DEFAULT_LABEL_ERROR_COLOR = StyleConstants.colors.red;
const DEFAULT_TEXTINPUT_COLOR = StyleConstants.colors.black;
const DEFAULT_MAX_LENGTH = 40;
const ANIMATION_DURATION = 250;

export type Props = {
  style?: ViewStyle,
  id?: number,
  maxLength?: number,
  secureTextEntry?: boolean,
  placeholderColor?: string,
  errorColor?: string,
  textInputColor?: string,
  defaultText?: string,
  text?: string,
  fontSize?: number,
  focusColor?: string,
  placeholder?: string,
  placeholderFontSize?: number,
  hint?: string,
  checkValid?: (text: string) => boolean,
  onFocus?: (textInputLayout: any) => void,
  onBlur?: (textInputLayout: any) => void,
  onChangeText?: (textInputLayout: any) => void,
  keyboardType?: string,
  editable?: boolean,
  autoCapitalize?: string,
  onTouchStart?: () => void,
  required?: boolean,
  returnKeyType?: string,
  onSubmitEditing?: (textInputLayout: any) => void,
  blurOnSubmit?: boolean,
  textContentType?: string,
  multiline?: boolean,
  onLayout?: (event: any) => void,
  rightIconName?: string,
  showAnimatedPlaceholder?: boolean,
  leftView?: (fontSize: number, text: string) => any,
  autoFocus: boolean,
  clearButtonMode: boolean,
  onClear?: () => void
};

type State = {
  text: ?string,
  isFocused: boolean,
  isError: boolean,
  showLabel: boolean,
  labelAnimationValue: any,
  secureTextEntry: boolean,
  error: ?string
};

export default class TextInputLayout extends React.PureComponent<Props, State> {
  mText: string;

  placeholderStyle: any;

  placeholderConatinerStyle: any;

  textInput: any;

  static defaultProps = {
    maxLength: DEFAULT_MAX_LENGTH,
    secureTextEntry: false,
    placeholderColor: DEFAULT_PLACEHOLDER_COLOR,
    errorColor: DEFAULT_LABEL_ERROR_COLOR,
    focusColor: DEFAULT_LABEL_COLOR,
    textInputColor: DEFAULT_TEXTINPUT_COLOR,
    fontSize: 18,
    placeholderFontSize: 14,
    defaultText: undefined,
    text: undefined,
    placeholder: undefined,
    hint: undefined,
    checkValid: undefined,
    onTouchStart: undefined,
    keyboardType: 'default',
    autoCapitalize: 'sentences',
    editable: true,
    required: false,
    blurOnSubmit: true,
    textContentType: 'none',
    multiline: false,
    onLayout: undefined,
    rightIconName: undefined,
    showAnimatedPlaceholder: true,
    leftView: undefined,
    autoFocus: false,
    clearButtonMode: false,
    clearTextOnFocus: false
  };

  state = {
    text: null,
    showLabel: false,
    isFocused: false,
    isError: false,
    labelAnimationValue: new Animated.Value(0),
    secureTextEntry: false,
    error: null
  };

  get id() {
    return this.props.id;
  }

  get text() {
    return this.mText;
  }

  constructor(props: Props) {
    super(props);

    this.mText = this.props.text ? this.props.text : this.props.defaultText;
    if (this.mText) {
      this.state = {
        ...this.state,
        text: this.mText,
        showLabel: true,
        labelAnimationValue: new Animated.Value(1)
      };
    }

    this.state.secureTextEntry = this.props.secureTextEntry;

    this.updateAnimateProperties(this.state.labelAnimationValue);
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    if (this.props.text !== nextProps.text) {
      this.mText = nextProps.text;

      let labelAnimationValue;
      if (this.mText) {
        labelAnimationValue = new Animated.Value(1);
        this.setState({
          text: this.mText,
          error: null,
          isError: false,
          showLabel: true,
          labelAnimationValue
        });
      } else {
        labelAnimationValue = new Animated.Value(0);
        this.setState({
          text: this.mText,
          error: null,
          isError: false,
          showLabel: false,
          labelAnimationValue
        });
      }

      this.updateAnimateProperties(labelAnimationValue);
    }
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (prevState.showLabel !== this.state.showLabel) {
      this.animatePlaceholder(
        this.state.labelAnimationValue,
        this.state.showLabel ? 1 : 0
      );
    }
  }

  animatePlaceholder = (animatedValue: any, toValue: number) => {
    Animated.timing(animatedValue, {
      toValue,
      duration: ANIMATION_DURATION
    }).start();
  };

  updateAnimateProperties(labelAnimationValue: any) {
    const translateY = labelAnimationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [styles.HEIGHT, 0]
    });

    this.placeholderConatinerStyle = {
      transform: [{ translateY }]
    };

    const placeholderFontSize = labelAnimationValue.interpolate({
      inputRange: [0, 1],
      outputRange: [this.props.fontSize, this.props.placeholderFontSize]
    });

    this.placeholderStyle = {
      fontSize: placeholderFontSize
    };
  }

  onFocus = () => {
    if (this.mText) {
      const isError = this.props.checkValid
        ? !this.props.checkValid(this.mText)
        : false;
      this.setState({ isFocused: true, isError });
    } else {
      this.setState({ showLabel: true, isFocused: true });
    }

    if (this.props.onFocus) this.props.onFocus(this);
  };

  onBlur = () => {
    if (this.mText) {
      this.validate();
    } else {
      this.setState({ showLabel: false, isFocused: false, isError: false });
    }

    if (this.props.onBlur) this.props.onBlur(this);
  };

  validate() {
    let isError = false;
    if (this.props.checkValid) isError = !this.props.checkValid(this.mText);
    if (!this.mText) {
      this.setState({ showLabel: false, isFocused: false, isError });
    } else this.setState({ isFocused: false, isError });
  }

  onClear = () => {
    if (this.props.onClear) this.props.onClear();
  };

  onChangeText = (text: string) => {
    this.mText = text;

    let isError = false;

    if (this.props.checkValid) {
      isError = !this.props.checkValid(text);
    }

    this.setState({ text, isError, error: null });

    if (this.props.onChangeText) this.props.onChangeText(this);
  };

  togglePassword = () => {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry
    });
  };

  focus() {
    if (this.props.editable) {
      this.textInput.focus();
    }
  }

  blur() {
    if (this.props.editable) {
      this.textInput.blur();
    }
  }

  scrollToFocusedInput(scrollView: ScrollView) {
    if (this.props.editable) {
      this.textInput.focus();
    }
    if (Platform.OS === 'android') {
      this.scrollToInput(scrollView);
    }
  }

  scrollToInput(scrollView: ScrollView) {
    setTimeout(() => {
      const node = ReactNative.findNodeHandle(this.textInput);
      const responder = scrollView.getScrollResponder();
      if (node && responder) responder.scrollResponderScrollNativeHandleToKeyboard(node, 80, true);
    }, 300);
  }

  setError(error: ?string) {
    this.setState({
      error,
      isError: !!error
    });
  }

  getPlaceholderText() {
    let placeholderText = this.props.placeholder;
    if (placeholderText && this.props.required) {
      placeholderText += ' *';
    }
    return placeholderText;
  }

  render() {
    const { isFocused, isError, text } = this.state;
    const {
      errorColor,
      placeholderColor,
      focusColor,
      onLayout,
      rightIconName,
      showAnimatedPlaceholder,
      leftView,
      fontSize,
      textInputColor
    } = this.props;
    const color = isError
      ? errorColor
      : isFocused
        ? focusColor
        : placeholderColor;
    const errorElseHint = this.state.error ? this.state.error : this.props.hint;

    return (
      <View style={this.props.style} onLayout={onLayout}>
        <View
          style={!this.props.multiline ? {
            paddingBottom: isFocused ? 0 : 1,
            borderBottomWidth: isFocused ? 2 : 1,
            borderBottomColor: color
          } : {}}
        >
          {showAnimatedPlaceholder && (
            <Animated.View
              style={[
                styles.placeholderContainer,
                this.placeholderConatinerStyle
              ]}
            >
              <Animated.Text
                style={[
                  styles.placeholderText,
                  this.placeholderStyle,
                  { color }
                ]}
              >
                {this.getPlaceholderText()}
              </Animated.Text>
            </Animated.View>
          )}
          <View style={styles.textInputContainer}>
            {leftView && leftView(fontSize, text)}
            <TextInput
              ref={(c) => {
                this.textInput = c;
              }}
              style={[
                styles.textInput,
                {
                  fontSize,
                  color: textInputColor
                }
              ]}
              underlineColorAndroid={StyleConstants.colors.transparent}
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.props.onSubmitEditing}
              secureTextEntry={this.state.secureTextEntry}
              maxLength={this.props.maxLength}
              keyboardType={this.props.keyboardType}
              autoCorrect={false}
              editable={this.props.editable}
              onTouchStart={this.props.onTouchStart}
              autoCapitalize={this.props.autoCapitalize}
              autoFocus={this.props.autoFocus}
              value={text}
              returnKeyType={this.props.returnKeyType}
              blurOnSubmit={this.props.blurOnSubmit}
              textContentType={this.props.textContentType}
              multiline={this.props.multiline}
              onContentSizeChange={this.props.onContentSizeChange}
              placeholder={
                showAnimatedPlaceholder ? '' : this.getPlaceholderText()
              }
            />
            {this.props.secureTextEntry && (
              <Icon
                name={
                  this.state.secureTextEntry ? 'visibility-off' : 'visibility'
                }
                size={30}
                color={StyleConstants.colors.gray}
                onPress={this.togglePassword}
              />
            )}
            {this.props.clearButtonMode && (
              <Icon
                name={'close'}
                size={18}
                color={StyleConstants.colors.black}
                onPress={this.onClear}
              />
            )}
            {rightIconName && (
              <Icon
                name={rightIconName}
                size={24}
                color={StyleConstants.colors.gray}
              />
            )}
          </View>
        </View>
        {errorElseHint && (
          <Text style={[styles.hint, { color }]}>{errorElseHint}</Text>
        )}
      </View>
    );
  }
}
