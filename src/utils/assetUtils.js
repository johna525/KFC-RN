import { Platform } from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import mime from 'mime-types';
import uuid from 'uuid';
import Storage from '@aws-amplify/storage';

const loadImageFromPhone = async (image) => {
  if (Platform.OS === 'ios') {
    const newpath = image.uri.replace('file://', '');
    return RNFetchBlob.fs.readFile(newpath, 'base64').then(data => data);
  }
  return RNFetchBlob.fs.readFile(image.path, 'base64').then(data => data);
};

const uploadImage = async (image, progressCb) => {
  const extension = mime.extension(image.type);
  const key = `${uuid.v1()}.${extension}`;
  const src = await loadImageFromPhone(image);
  const buffer = await Buffer.from(src, 'base64');
  const response = await Storage.put(key, buffer, {
    progressCallback(progress) {
      if (progressCb) progressCb({ loaded: progress.loaded, total: progress.total });
    }
  });
  return response.key || null;
};

export default {
  loadImageFromPhone,
  uploadImage
};
