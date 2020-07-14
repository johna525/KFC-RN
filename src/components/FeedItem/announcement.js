import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, Image, Dimensions
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const dimensions = Dimensions.get('window');

const Announcement = ({
  image, text, profileImage, senderName
}) => (
  <View style={styles.announcement}>
    <View style={styles.announcementSender}>
      <View style={styles.announcementSenderInner}>
        {profileImage && (
          <Image
            source={{ uri: profileImage }}
            style={styles.announcementProfileImage}
          />
        )}
        <Text style={styles.announcementSenderText}>
          {`${senderName}'s announcement`}
        </Text>
      </View>
      <LinearGradient
        style={styles.announcementSenderBg}
        colors={['#00000050', '#00000000']}
      />
    </View>
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
    <Text style={styles.announcementText}>{text}</Text>
  </View>
);

Announcement.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
  senderName: PropTypes.string.isRequired
};

export default Announcement;
