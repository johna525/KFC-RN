import { Platform } from 'react-native';
import PubSub from 'pubsub-js';
import Env from './envUtils';
import { dySize } from '../style/responsive';

const HTML = require('html-parse-stringify');

const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const getParamFromObject = (obj, path, def) => {
  const fullPath = path
    .replace(/\[/g, '.')
    .replace(/]/g, '')
    .split('.')
    .filter(Boolean);
  const everyFunc = (step) => {
    return !(step && (obj = obj[step]) === undefined); // eslint-disable-line
  };
  return fullPath.every(everyFunc) ? obj : def;
};

function showAlert(
  alertTitle,
  alertMessage,
  alertCancelText,
  alertCancelClick,
  alertOkText,
  alertOkClick,
  alertRequestItem,
  alertList
) {
  const key = Env.getEnvParam('constants.broadcastAlert');

  PubSub.publish(key, {
    showAlert: true,
    alertTitle,
    alertMessage,
    alertCancelText,
    alertCancelClick,
    alertOkText,
    alertOkClick,
    alertRequestItem,
    alertList
  });
}

function dismissAlert() {
  const key = Env.getEnvParam('constants.broadcastAlert');

  PubSub.publish(key, {
    showAlert: false
  });
}

function countArrayOccs(array) {
  return array.reduce((tally, item) => {
    tally[item] = (tally[item] || 0) + 1; // eslint-disable-line no-param-reassign
    return tally;
  }, {});
}

function getBirthday(dob) {
  const month = Number(dob.split('-')[0]);
  const day = Number(dob.split('-')[1]);
  let dayString = `${day}th`;
  if (day === 1) dayString = `${day}st`;
  else if (day === 2) dayString = `${day}nd`;
  else if (day === 3) dayString = `${day}rd`;
  return `${dayString} ${monthArray[month - 1].substr(0, 3)}`;
}

const convertHTML = (html) => {
  const data = HTML.parse(html);
  console.log('Parsed HTML', data);
  const result = [];
  data.map((item) => {
    result.push(changeElement(item));
    return true;
  });
  console.log(HTML.stringify(result));
  return HTML.stringify(result);
};

const changeElement = (element) => {
  const temp = element;
  let additionalStyle = 'font-family: impact, sans-serif; line-height: 24px; font-size: 20px';
  if (Platform.OS === 'android') additionalStyle = 'font-family: impact, sans-serif; line-height: 72px; font-size: 60px';
  if (temp.name === 'p') {
    temp.attrs = {
      style: temp.attrs.style === undefined ? additionalStyle : `${temp.attrs.style} ${additionalStyle}`
    };
  } else if (temp.name === 'span') {
    temp.attrs = {
      style: temp.attrs.style === undefined ? additionalStyle : `${temp.attrs.style} ${additionalStyle}`
    };
  } else if (temp.name === 'li') {
    temp.attrs = {
      style: temp.attrs.style === undefined ? additionalStyle : `${temp.attrs.style} ${additionalStyle}`
    };
  } else if (temp.name === 'img') {
    temp.attrs = {
      ...element.attrs,
      width: `${Platform.OS === 'android' ? dySize(1005) : dySize(335)}px`,
      height: `${(Platform.OS === 'android' ? dySize(1005) : dySize(335)) * element.attrs.height / element.attrs.width}px`,
    };
  }
  if (temp.children !== undefined) {
    const children = [];
    temp.children.map((item) => {
      children.push(changeElement(item));
      return true;
    });
    temp.children = children;
  }
  return temp;
};

export default {
  getParamFromObject,
  showAlert,
  dismissAlert,
  countArrayOccs,
  getBirthday,
  convertHTML
};
