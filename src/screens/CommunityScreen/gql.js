import { API, graphqlOperation } from 'aws-amplify';
import Utils from '../../utils/utils';
import Notification from '../../components/Notification';

export const ListRecognitions = `
    query  {
    listRecognitions{
        items{
            description
            receiverName
            id
            senderName
            recognitionMessage
        }
    }
}`;


export const ListPosts = `
query listPosts {
  listPosts {
    items{
      id
      createdAt
      postMessage
      postMediaType
      postMediaValue
    }
  }
}
`;

const getPostsData = async () => {
  try {
    const posts = await API.graphql(graphqlOperation(ListPosts));
    console.log('POST data: ', posts);
  } catch (err) {
    console.log(err);
  }
};

export { getPostsData };

const CreateRecognition = `
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
  createRecognition: async (
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
        Notification.show(`Recognition was sent to **${receiverName}**`);
      }, 1000);
    } catch (error) {
      Utils.showAlert(
        'Whoops!',
        'Something went wrong',
        'Close',
        Utils.dismissAlert,
        null,
        null,
      );
    }
  },
  getListRecognitions: async () => {
    const recogs = await API.graphql(graphqlOperation(ListRecognitions));
    console.log(recogs);
  }
};
