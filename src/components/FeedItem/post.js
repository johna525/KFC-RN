import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, Dimensions
} from 'react-native';
import styles from './styles';

const dimensions = Dimensions.get('window');

const Post = ({
  image, profileImage, postedBy, text
}) => (
  <View>
    {image && (
      <Image
        source={{ uri: image }}
        resizeMode="contain"
        style={{
          flex: 1,
          height: Math.round((dimensions.width * 3) / 5),
          width: dimensions.width
        }}
      />
    )}
    {!image && <Text style={styles.typePostText}>{text}</Text>}
    <View style={styles.typePost}>
      <Image style={styles.profileImage} source={{ uri: profileImage }} />
      <Text style={styles.postedBy}>{postedBy}</Text>
    </View>
    {image && <Text style={styles.typePostImageText}>{text}</Text>}
  </View>
);

Post.propTypes = {
  image: PropTypes.string,
  profileImage: PropTypes.string.isRequired,
  postedBy: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default Post;
