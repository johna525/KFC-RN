import { graphqlOperation } from 'aws-amplify';
import { Connect } from 'aws-amplify-react-native';
import React, { Component } from 'react';
import {
 StyleSheet, Text, View, Image 
} from 'react-native';
import { Button, Input, Card } from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import Storage from '@aws-amplify/storage';
import RNFetchBlob from 'react-native-fetch-blob';
import mime from 'mime-types';

const CreatePost = `
  mutation CreatePost(
    $username: String,
    $bio: String
    $username: String
    $name: String
    ){
      createEmployee(input :{
        username: $username
        bio: $bio
        username: $username
        name: $name
      })
      {
        id
        username
        name
        bio
         __typename

      }
    }
`;

class PostScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      media: '',
      photo: null
    };
  }

  handleChoosePhoto = () => {
    const options = {
      noData: true
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        this.setState({ photo: response });
      }
      const file = {
        uri: response.uri,
        name: response.fileName,
        type: 'image/png'
      };
      console.log('Image', response);
      console.log('Image URI::', response.uri);
      // this._handleImagePicked(file)
      this.readFile(response.uri)
        .then((buffer) => {
          Storage.put('MYKEY', buffer, {
            contentType: 'image/jpeg'
          });
        })
        .catch((e) => {
          console.log(e);
        });
    });
  }

  handleSubmit = async () => {
    const CreateEmployee = `
  mutation CreateEmployee(
    $username: String,
    $bio: String
    $username: String
    $name: String
    ){
      createEmployee(input :{
        username: $username
        bio: $bio
        username: $username
        name: $name
      })
      {
        id
        username
        name
        bio
         __typename

      }
    }
`;

    const result = await API.graphql(
      graphqlOperation(CreatePost, {
        name: this.state.name,
        username: this.state.username,
        bio: this.state.bio
      })
    ).then(response => console.log(response));

    console.info(`Created Employee with id ${result.data.createEmployee.id}`);
  }

  // this handles the image upload to S3
  _handleImagePicked = async (pickerResult) => {
    this.setState({ uploading: true });
    const imageName = pickerResult.uri.replace(/^.*[\\\/]/, '');
    const fileType = mime.lookup(pickerResult.uri);
    const access = {
      level: 'public',
      contentType: 'image/jpeg'
      // customPrefix: { public: 'uploads/' }
    };
    const imageData = await fetch(pickerResult.uri);
    const blobData = await imageData.blob();

    try {
      await Storage.put(imageName, blobData, access)
        .then(result => console.log(result))
        .catch(err => console.log(err));
      console.log('image uploaded', imageName);
    } catch (err) {
      console.log('error: ', err);
    }
    this.setState({ uploading: false });
  }

  readFile(filePath) {
    return RNFetchBlob.fs
      .readFile(filePath, 'base64')
      .then(data => new Buffer(data, 'base64'));
  }

  uploadPhoto = () => {
    //   fileName: "IMG_0005.JPG"
    // fileSize: 245357
    // height: 2002
    // isVertical: false
    // latitude: 63.5314
    // longitude: -19.5112
    // origURL: "assets-library://asset/asset.JPG?id=ED7AC36B-A150-4C38-BB8C-B6D696F4F2ED&ext=JPG"
    // timestamp: "2012-08-08T21:55:30Z"
    // type: "image/jpeg"
    // uri: "file:///Users/johnamuesi/Library/Developer/CoreSimulator/Devices/9654C0BB-6622-4AB7-910B-D72410C7CBA0/data/Containers/Data/Application/B194540D-1364-4191-85AC-301DE88454AC/tmp/93800FB1-2B90-4E71-A844-7AFA9D983026.jpg"
    // width: 3000
    const { photo } = this.state;
    console.log(photo);
    console.log('URI::', photo.uri);
    this._handleImagePicked(photo);

    //   uri: photo.uri,
    //   name: photo.fileName,
    //   type: 'image/png'
    // })

    // this._handleImagePicked(photo)
  }

  render() {
    const { photo } = this.state;

    return (
      <View>
        <Connect mutation={graphqlOperation(CreatePost)}>
          {({ mutation, response }) => {
            const post = {
              text: this.state.text,
              media: this.state.media
            };
            return (
              <View>
                <Text>Create Post</Text>
                <Card title="post content">
                  <Input
                    placeholder="Text"
                    onChangeText={val => this.onChangeText('text', val)}
                  />
                  <Input
                    placeholder="Media"
                    onChangeText={val => this.onChangeText('media', val)}
                  />
                </Card>
                <Card title="post media">
                  <View>
                    {photo && (
                      <Image
                        source={{ uri: photo.uri }}
                        style={{ width: 100, height: 100 }}
                      />
                    )}
                    <Button
                      title="Choose Photo"
                      onPress={this.handleChoosePhoto}
                    />
                    <Button
                      style={{ marginTop: 30 }}
                      title="upload Photo"
                      onPress={this.uploadPhoto}
                    />
                  </View>
                </Card>

                <Button
                  title="Post"
                  onPress={this.handleSubmit}
                  style={{ marginTop: 300 }}
                />
              </View>
            );
          }}
        </Connect>
      </View>
    );
  }
}
export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
