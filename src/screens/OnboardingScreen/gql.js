import { API, graphqlOperation } from 'aws-amplify';
import Utils from '../../utils/utils';
import Notification from '../../components/Notification';

const ListRecognitions = `
    query  {
    listRecognitions{
        items{
            description
            receiverName
            id
        }
    }
}`;

const UpdatePersonalInformation = `
    mutation CreateRecognition
      (
      $description: String!
      $completed: Boolean
      $media: String
      $mediaValue: String
      $value: String
      $senderName: String
      $receiverName: String
      ) {
      CreateRecognition(input: {
        description: $text
        completed: $completed
        media: $media
        mediaValue: $mediaValue
        value: $value
        senderName: $senderName
        receiverName: $receiverName
      })
      {
        id
        description
        completed
        media
        mediaValue
        value
        senderName
        receiverName
      }
    }
`;

export default {
  saveUserInformation: async (
    description,
    media,
    mediaValue,
    value,
    senderName,
    receiverName
  ) => {
    const recognition = {
      description,
      completed: false,
      media,
      mediaValue,
      value,
      senderName,
      receiverName
    };

    try {
    //   await API.graphql(graphqlOperation(CreateRecognition, recognition)); // TODO Make this work
      setTimeout(() => {
        Notification.show(
          'Your information has been saved. **Welcome!**'
        );
      }, 1000);
    } catch (error) {
      Utils.showAlert(
        'Whoops!',
        'Something went wrong',
        null,
        null,
        'Close',
        Utils.dismissAlert
      );
    }
  },
  getListRecognitions: async () => {
    const recogs = await API.graphql(graphqlOperation(ListRecognitions));
    console.log(recogs);
  }
};
