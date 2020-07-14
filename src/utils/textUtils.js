const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const isValidEmail = (email) => {
  return EMAIL_REGEX.test(email);
};

const isValidConfirm = (password, confirmPassword) => {
  return password === confirmPassword;
};

const hasValue = (text) => {
  return text;
};

const isValidName = (text) => {
  return text && text.length >= 2;
};

const defaultOptions = {
  inputFormat: 'sentence',
  outputFormat: 'normal'
};

const titleCase = (str, customOptions) => {
  let lStr = null;
  const options = Object.assign({}, defaultOptions, customOptions);
  if (options.inputFormat === 'pascal' || options.inputFormat === 'camel') {
    lStr = str.replace(/([A-Z])/g, ' $1');
  }
  lStr = str.toLowerCase();
  lStr = str.split(' ');
  for (let i = 0; i < lStr.length; i++) {
    lStr[i] = lStr[i].charAt(0).toUpperCase() + lStr[i].slice(1);
  }
  lStr = lStr.join(' ').trim();

  if (options.outputFormat === 'upper') {
    lStr = lStr.toUpperCase();
  }

  return lStr;
};

const getFontSize = size => size * 0.15;

export default {
  isValidEmail,
  isValidConfirm,
  hasValue,
  isValidName,
  getFontSize,
  titleCase
};
