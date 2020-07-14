// @flow

import React from 'react';
import ReactNative, {
  View,
  Animated,
  TouchableOpacity,
  Text,
  Picker,
  Platform,
  ScrollView
} from 'react-native';
import { ViewStyle } from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './style';
import StyleConstants from '../../style/styleConstants';

const DEFAULT_PLACEHOLDER_COLOR = StyleConstants.colors.gray;
const DEFAULT_LABEL_ERROR_COLOR = '#C5270E';

export type Item = {
  label: string,
  value: string
};

type Props = {
  style: ViewStyle,
  placeholderColor: string,
  errorColor: string,
  placeholder: string,
  fontSize: number,
  placeholderFontSize: number,
  hint: string,
  items: [Item], // array of Item type
  selectedItem: Item,
  required: boolean,
  onPress: () => void, // this is for ios only
  onValueChange: (item: Item) => void // this is for android only
};

type State = {
  isError: boolean,
  selectedItem: ?Item,
  error: ?string
};

export default class PickerInputLayout extends React.PureComponent<
  Props,
  State
> {
  placeholderStyle: any;

  placeholderConatinerStyle: any;

  static defaultProps = {
    placeholderColor: DEFAULT_PLACEHOLDER_COLOR,
    errorColor: DEFAULT_LABEL_ERROR_COLOR,
    fontSize: 14,
    placeholderFontSize: 11,
    placeholder: undefined,
    hint: undefined,
    selectedItem: undefined,
    required: false,
    items: undefined,
    onPress: undefined,
    onValueChange: undefined
  };

  state = {
    isError: false,
    selectedItem: null,
    error: null
  };

  get selectedItem() {
    return this.state.selectedItem;
  }

  constructor(props: Props) {
    super(props);

    let { selectedItem } = this.props;
    if (Platform.OS === 'android') {
      selectedItem = selectedItem || this.props.items[0];
    }

    if (selectedItem) {
      this.state = { ...this.state, selectedItem };
    }

    this.updateAnimateProperties(this.state.selectedItem);
  }

  scrollToInput(scrollView: ScrollView) {
    setTimeout(() => {
      const node = ReactNative.findNodeHandle(this);
      const responder = scrollView.getScrollResponder();
      if (node && responder) {
        responder.scrollResponderScrollNativeHandleToKeyboard(node, 80, true);
      }
    }, 300);
  }

  onValueChange = (itemValue: any, itemIndex: number) => {
    const selectedItem = this.props.items[itemIndex];

    this.setState({
      selectedItem,
      isError: false,
      error: null
    });
    if (this.props.onValueChange) this.props.onValueChange(selectedItem);
  };

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    if (this.props.selectedItem !== nextProps.selectedItem) {
      const { selectedItem } = nextProps;

      this.setState({
        selectedItem,
        isError: false,
        error: null
      });

      this.updateAnimateProperties(selectedItem);
    }
  }

  updateAnimateProperties(selectedItem: ?Item) {
    const translateY = selectedItem ? 0 : styles.HEIGHT;

    this.placeholderConatinerStyle = {
      transform: [{ translateY }]
    };

    const placeholderFontSize = selectedItem
      ? this.props.placeholderFontSize
      : this.props.fontSize;

    this.placeholderStyle = {
      fontSize: placeholderFontSize
    };
  }

  getPlaceholderText() {
    let placeholderText = this.props.placeholder;
    if (this.props.required) {
      placeholderText += ' *';
    }
    return placeholderText;
  }

  setError(error: ?string) {
    this.setState({
      error,
      isError: !!error
    });
  }

  render() {
    const { isError } = this.state;
    const { errorColor, placeholderColor } = this.props;
    const color = isError ? errorColor : placeholderColor;
    const errorElseHint = this.state.error ? this.state.error : this.props.hint;

    return (
      <View style={this.props.style}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: color
          }}
        >
          <Animated.View
            style={[
              styles.placeholderContainer,
              this.placeholderConatinerStyle
            ]}
          >
            <Animated.Text
              style={[styles.placeholderText, this.placeholderStyle, { color }]}
            >
              {this.getPlaceholderText()}
            </Animated.Text>
          </Animated.View>
          {Platform.OS === 'ios'
            ? this.renderPickerIOS()
            : this.renderPickerAndroid()}
        </View>
        {errorElseHint && (
          <Text style={[styles.hint, { color }]}>{errorElseHint}</Text>
        )}
      </View>
    );
  }

  renderPickerIOS() {
    return (
      <TouchableOpacity
        style={styles.pickerContainer}
        onPress={this.props.onPress}
        activeOpacity={0.7}
      >
        <Text style={[styles.pickerText, { fontSize: this.props.fontSize }]}>
          {this.state.selectedItem ? this.state.selectedItem.label : ''}
        </Text>

        <Icon
          name={'arrow-drop-down'}
          size={30}
          color={StyleConstants.colors.gray}
        />
      </TouchableOpacity>
    );
  }

  renderPickerAndroid() {
    return (
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.pickerAndroid}
          selectedValue={
            this.state.selectedItem ? this.state.selectedItem.value : null
          }
          onValueChange={this.onValueChange}
        >
          {this.props.items.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>
    );
  }
}
