import { API, graphqlOperation } from 'aws-amplify';
import AuthUtils from './authUserUtils';
import AssetUtils from './assetUtils';
import NavigationUtils from './navigationUtils';
import DBUtils from './dbUtils';
import Env from './envUtils';
import Utils from './utils';
import Notification from '../components/Notification';
import * as gql from './graphqlUtils';
import parseHotSchedulesDate from './hotSchedulesUtils';
import { updateEmployee, deleteEmployee, deletePost } from '../graphql/mutations';
import BadgeContent from '../configs/content/badges.json';
import { MockShifts } from '../configs/mockData';

const BADGE_TIERS = Env.getEnvParam('badgeTiers');

const createEmployee = async (
  profileImageUri,
  yumdob,
  yumstoreid,
  userEmailAddress,
) => {
  const defaultData = {
    pointCount: 5,
    recognitionCount: 0,
    badgeCount: 1,
    rewardCount: 0,
    yumusertype: 'tester',
    yumstoreid,
    profileCompletionStatus: true,
    termsAccepted: true
  };

  const userAccount = await AuthUtils.getUserAccount();

  const fullProfileData = {
    ...defaultData,
    username: userAccount.username,
    name: userAccount.attributes.name,
    profileImageUri,
    yumgivenname: userAccount.attributes.name,
    yumdob,
    userEmailAddress
  };

  const response = await API.graphql(
    graphqlOperation(gql.createEmployee, fullProfileData)
  );
  if (response) {
    DBUtils.updateTallyValue(
      response.data.createEmployee.username,
      'points',
      5,
      'badge'
    );
  }
  return response;
};

const getEmployee = async (username) => {
  try {
    const response = await API.graphql(
      graphqlOperation(gql.getEmployee, {
        username
      })
    );

    return {
      ...response.data.listEmployees.items[0]
    };
  } catch (error) {
    console.log('Error getting employee: ', error); // @TODO: Push this error somewhere
  }
};

const getEmployeeProfile = async (username) => {
  const employee = await getEmployee(username);
  const completedBadges = [];
  let rankBadgeCount = 0;
  const recognitionsReceived = await API.graphql(
    graphqlOperation(gql.listUserRecognitions, { userId: username })
  );
  const recognitionsSent = await API.graphql(
    graphqlOperation(gql.listUserSentRecognitions, { userId: username })
  );
  const points = await DBUtils.getTallyValue(username, 'points');
  const recognitions = await DBUtils.getTallyValue(username, 'recognitions');

  Object.keys(BADGE_TIERS).forEach((k) => {
    if (points.tally > BADGE_TIERS[k].minValue) rankBadgeCount += 1;
  });

  // const rankBadgeCount = BADGE_TIERS.length.reduce((total, amount, i) => {
  //   if (Object.keys(BADGE_TIERS)[i] < points) {
  //     total += 1;
  //   }
  //   return total;
  // });

  if (recognitionsReceived.data.listRecognitions.items.length > 0) completedBadges.push('firstRecognitionSent');
  if (recognitionsSent.data.listRecognitions.items.length > 0) completedBadges.push('firstRecognitionReceived');

  // console.log(rankBadgeCount);

  console.log(rankBadgeCount);

  return {
    ...employee,
    ...{
      pointCount: points.tally,
      recognitionCount: recognitions.tally,
      recognitionIds: recognitions.ids,
      completedBadges,
      badgeCount: completedBadges.length + rankBadgeCount,
    }
  };
};

const getAllEmployees = async () => {
  try {
    const userAccount = await AuthUtils.getUserAccount();
    const response = await API.graphql(graphqlOperation(gql.getEmployees));
    return response.data.listEmployees.items
      .filter(u => u.username !== userAccount.username && u.yumstoreid === userAccount.yumstoreid)
      .sort((a, b) => {
        const nameA = a.name.split(' ')[0].toLowerCase();
        const nameB = b.name.split(' ')[0].toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
  } catch (error) {
    console.log('Error getting all employees: ', error); // @TODO: Push this error somewhere
  }
};

const updateEmployeeProfile = async (
  name,
  email,
  profileImage,
  imageUploadCallback
) => {
  let profileImageS3Key = null;

  const userAccount = await AuthUtils.getUserAccount();
  const user = await getEmployee(userAccount.username);

  if (profileImage) {
    profileImageS3Key = await AssetUtils.uploadImage(
      profileImage,
      imageUploadCallback
    );
  }

  const input = {
    id: user.id,
    name,
    userEmailAddress: email,
    profileImageUri: profileImageS3Key === null ? user.profileImageUri : profileImageS3Key
  };

  Object.keys(input).forEach((k) => {
    if (!input[k]) delete input[k];
  });

  console.log('Input data', input);

  try {
    const response = await API.graphql(
      graphqlOperation(updateEmployee, {
        input: {
          ...input,
          expectedVersion: 1
        },
      })
    );
    return response;
  } catch (error) {
    console.log('Error sending updating profile: ', error); // @TODO: Push this error somewhere
  }
};

const deleteEmployeeProfile = async () => {
  try {
    const userAccount = await AuthUtils.getUserAccount();
    const user = await getEmployee(userAccount.username);

    if (user) {
      await API.graphql(
        graphqlOperation(deleteEmployee, { input: { id: user.id, expectedVersion: 1 } })
      );
    }
    // AuthUtils.signOut();
    userAccount.deleteUser((error) => {
      if (error) {
        console.log('Error removing user from cognito: ', error);
      }
    });
  } catch (error) {
    console.log('Error deleting profile: ', error); // @TODO: Push this error somewhere
  }
};

const sendFeedbackEmail = async (body) => {
  const url = 'https://jhxrw0d6ll.execute-api.eu-west-1.amazonaws.com/dev/email/send';
  try {
    fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  } catch (error) {
    console.log('Error sending feedback email: ', error); // @TODO: Push this error somewhere
  }
};

const createFeedback = async (content) => {
  const userAccount = await AuthUtils.getUserAccount();
  const user = await getEmployee(userAccount.userDataKey);
  const email = user.userEmailAddress || userAccount.username;
  try {
    return API.graphql(
      graphqlOperation(gql.createFeedback, {
        senderId: email,
        feedbackMessage: content
      })
    ).then(() => {
      sendFeedbackEmail({
        name: user.name,
        email,
        content
      });
    });
  } catch (error) {
    console.log(`Error saving feedback: ${error}`); // @TODO: Push this error somewhere
    return false;
  }
};

const createBadge = async (name, receiverName, receiverId) => {
  console.log(name, receiverName, receiverId);
  try {
    const response = await API.graphql(
      graphqlOperation(gql.createBadge, {
        name,
        receiverName,
        receiverId
      })
    );
    if (response) {
      const pointsUpdated = await DBUtils.updateTallyValue(
        receiverId,
        'points',
        5,
        'badge'
      );
      const badgesUpdated = await DBUtils.updateTallyValue(
        receiverId,
        'badges',
        1,
        name
      );
      if (pointsUpdated && badgesUpdated) return true;
    }
  } catch (error) {
    console.log(error);
  }
};

const sendRecognition = async (
  recognitionMessage,
  mediaType,
  mediaValue,
  recognitionValue,
  receiverId,
  receiverName
) => {
  const userAccount = await AuthUtils.getUserAccount();
  const userProfile = await getEmployee(userAccount.username);
  let profileImageS3Key = null;

  if (mediaType === 'image') {
    profileImageS3Key = await AssetUtils.uploadImage(mediaValue);
  }

  const recognition = {
    completed: false,
    mediaType,
    mediaValue: profileImageS3Key || mediaValue,
    recognitionMessage,
    recognitionValue,
    senderName: userProfile.name,
    senderId: userAccount.username,
    receiverId,
    receiverName
  };

  try {
    const response = await API.graphql(
      graphqlOperation(gql.createRecognition, recognition)
    );
    console.log('recognition response', response);
    if (response) {
      const pointsUpdated = await DBUtils.updateTallyValue(
        receiverId,
        'points',
        10,
        'recognition'
      );
      const recognitionsUpdated = await DBUtils.updateTallyValue(
        receiverId,
        'recognitions',
        1,
        recognitionValue
      );
      console.log('recognition updated', pointsUpdated);
      console.log('recognition updated', recognitionsUpdated);
      if (pointsUpdated && recognitionsUpdated) {
        Notification.show(`Recognition was sent to **${receiverName}**`);
      } else {
        Utils.showAlert(
          'Whoops!',
          'Something went wrong',
          'Close',
          Utils.dismissAlert,
          null,
          null
        );
      }
    }
  } catch (error) {
    Utils.showAlert(
      'Whoops!',
      'Something went wrong',
      'Close',
      Utils.dismissAlert,
      null,
      null
    );
  }
};

const listRecognitions = async () => {
  try {
    const response = await API.graphql(graphqlOperation(gql.listRecognitions));
    const {
      data: {
        listRecognitions: { items }
      }
    } = response;
    return items
      ? items
        .map(r => ({ ...r, type: 'recognition' }))
      : [];
  } catch (error) {
    console.log(`Error getting recognitions: ${error}`, error); // @TODO: Push this error somewhere
    return false;
  }
};

const listUserRecognitions = async (userId) => {
  try {
    const response = await API.graphql(
      graphqlOperation(gql.listUserRecognitions, { userId })
    );
    const {
      data: {
        listRecognitions: { items }
      }
    } = response;
    return items
      ? items
        .sort((a, b) => {
          const dateA = new Date(a.createdAt);
          const dateB = new Date(b.createdAt);
          return dateB - dateA;
        })
        .map(r => ({ ...r, type: 'recognition' }))
      : [];
  } catch (error) {
    console.log(`Error getting recognitions: ${error}`, error); // @TODO: Push this error somewhere
    return false;
  }
};

const getBadge = (index) => {
  return {
    ...BADGE_TIERS[index],
    ...BadgeContent[BADGE_TIERS[index].id]
  };
};

const getRank = (points) => {
  const nextBadgeIndex = BADGE_TIERS.findIndex(tier => points < tier.minValue);
  const currentBadgeIndex = nextBadgeIndex - 1;

  // Get badge data
  const nextBadge = getBadge(nextBadgeIndex);
  const currentBadge = getBadge(
    (BADGE_TIERS[currentBadgeIndex] && currentBadgeIndex) || 0 // Defaults to first
  );

  return {
    nextBadge,
    currentBadge
  };
};

const getNextShift = () => {
  const nextShift = MockShifts[0];
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(parseHotSchedulesDate(nextShift));
    }, 1000);
  });
};

const getShifts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        MockShifts.slice(0, 7).map(shift => parseHotSchedulesDate(shift))
      );
    }, 1000);
  });
};

export default {
  createEmployee,
  getEmployee,
  getEmployeeProfile,
  getAllEmployees,
  getRank,
  deleteEmployeeProfile,
  updateEmployeeProfile,
  createFeedback,
  createBadge,
  sendRecognition,
  listRecognitions,
  listUserRecognitions,
  getNextShift,
  getShifts
};
