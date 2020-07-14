import { AsyncStorage } from 'react-native';
import moment from 'moment-mini';

export const CacheConstants = {
  expiry: {
    SHORT: 30,
    MEDIUM: 60 * 60,
    LONG: 60 * 60 * 24
  }
};

const defaultOptions = {
  expiry: CacheConstants.expiry.SHORT,
  store: '@KFC'
};

const getExpiryTime = (expiryInSeconds) => {
  const now = moment();
  const expiryTime = now.add(expiryInSeconds, 'seconds');
  return expiryTime.format();
};

const get = async (key) => {
  const cacheResponseString = await AsyncStorage.getItem(
    `${defaultOptions.store}:${key}`
  );
  if (!cacheResponseString) return null;

  const cacheResponse = JSON.parse(cacheResponseString);
  if (cacheResponse && cacheResponse.data) {
    if (cacheResponse.expireAt && moment(cacheResponse.expireAt).isAfter()) {
      return cacheResponse.data;
    }
    AsyncStorage.removeItem(key);
  }

  return null;
};

const set = async (key, data, customOptions) => {
  const options = Object.assign({}, defaultOptions, customOptions);
  const item = {
    data,
    expireAt: getExpiryTime(options.expiry)
  };
  AsyncStorage.setItem(`${defaultOptions.store}:${key}`, JSON.stringify(item));
};

const remove = async (key) => {
  AsyncStorage.removeItem(`${defaultOptions.store}:${key}`);
};

/* export =================================================================== */

export default {
  get,
  set,
  remove
};
