import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Markdown from 'react-native-easy-markdown';
import styles from './styles';

let ToastUtils = null;

const setNotifcationEl = (toastRef) => {
  ToastUtils = toastRef;
};

const actions = {
  show: (message, duration = 2000) => {
    ToastUtils.show(
      <SafeAreaView>
        <View style={styles.container}>
          <Markdown markdownStyles={styles}>{message}</Markdown>
        </View>
      </SafeAreaView>,
      duration
    );
  }
};

export { setNotifcationEl };

export default actions;
