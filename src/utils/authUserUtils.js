import { Auth } from 'aws-amplify';

const signOut = async () => {
  return Auth.signOut();
};

const getUserAccount = async () => {
  try {
    const user = await Auth.currentAuthenticatedUser();
    return user;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default {
  signOut,
  getUserAccount,
};
