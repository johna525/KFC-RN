import { AsyncStorage } from 'react-native';

const saveUserId = async (user) => {
  try {
    await AsyncStorage.setItem('user', user);
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
};

const getUserId = async () => {
  let user = '';
  try {
    user = await AsyncStorage.getItem('user') || 'none';
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
  return user;
};


const deleteUserId = async () => {
  try {
    await AsyncStorage.removeItem('user');
  } catch (error) {
    // Error retrieving data
    console.log(error.message);
  }
};

export {
  saveUserId,
  getUserId,
  deleteUserId
};
