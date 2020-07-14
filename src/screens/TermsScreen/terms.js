import React from 'react';
import PropTypes from 'prop-types';
import {
  View, ScrollView, TouchableOpacity, Text
} from 'react-native';
import Markdown from 'react-native-easy-markdown';
import { Icon } from 'native-base';
import NavigationUtils from '../../utils/navigationUtils';
import ButtonClose from '../../components/ButtonClose';
import StyleConstants from '../../style/styleConstants';
import styles from './styles';
import content from '../../configs/content/terms';
import generalStyles from '../../style';

export default class TermsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accepted: false
    };
  }

  render() {
    return (
      <React.Fragment>
        <View style={styles.close}>
          <ButtonClose
            onPress={() => this.props.navigation.goBack()}
            size={24}
            color={StyleConstants.colors.black}
          />
        </View>
        <View style={styles.screen}>
          <ScrollView style={styles.inner}>
            <Markdown markdownStyles={styles}>{content}</Markdown>
          </ScrollView>
        </View>

      </React.Fragment>
    );
  }
}
