import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment-mini';
import { View, Text } from 'react-native';
import generalStyles from '../../style';
import styles from './styles';
import NavigationUtils from '../../utils/navigationUtils';
import PointsProgress from '../PointsProgress';
import ProfileStats from '../ProfileStats';
import StyleConstants from '../../style/styleConstants';
import ProfileImage from '../ProfileImage';
import RecognitionStats from '../RecognitionStats';
import RankStats from '../RankStats';
import BadgeStats from '../BadgeStats';
import Utils from '../../utils/utils';
import NextShift from '../NextShift';
import TrackedTouchableOpacity from '../TouchableOpacity';

const Profile = ({
  name,
  profileImageUri,
  yumdob,
  yumstoreid,
  pointCount,
  recognitionCount,
  recognitionCountDetails,
  badgeCount,
  rewardCount,
  currentRank,
  completedBadges,
}) => (
  <View style={styles.container}>
    <View style={styles.section}>
      <View style={[generalStyles.flexRow, generalStyles.alignCenter]}>
        <View
          style={[
            styles.profileImage,
            { width: StyleConstants.getSpacing(24) }
          ]}
        >
          <ProfileImage
            profileImageUri={profileImageUri}
            size={StyleConstants.getSpacing(24)}
          />
        </View>
        <View>
          <Text style={styles.name}>{name}</Text>
          {yumstoreid && <Text style={styles.birthday}>StoreId: {yumstoreid === 'NOT_FOUND' ? 'RSA' : yumstoreid}</Text>}
          {yumdob && <Text style={styles.birthday}>Birthday: {yumdob}</Text>}
        </View>
      </View>
      <PointsProgress points={pointCount} />
    </View>

    <View style={styles.section}>
      <View style={[generalStyles.flexRow, generalStyles.justifyBetween, generalStyles.alignCenter]}>
        <Text style={styles.sectionTitle}>UPCOMING SHIFT</Text>
        <TrackedTouchableOpacity onPress={() => NavigationUtils.navigate('ShiftsScreen')}>
          <Text style={styles.seeAllShifts}>SEE ALL</Text>
        </TrackedTouchableOpacity>
      </View>
      <View style={styles.upcomingShift}>
        <NextShift />
      </View>
    </View>

    <View style={[styles.section, { paddingHorizontal: 0 }]}>
      <ProfileStats {...{ recognitionCount, badgeCount, rewardCount }} />
    </View>

    <View style={styles.section}>
      <View style={[generalStyles.flexRow, generalStyles.justifyBetween]}>
        <Text style={styles.sectionTitle}>RECOGNITIONS</Text>
        <Text style={styles.sectionTitle}>{recognitionCount}</Text>
      </View>
      <RecognitionStats stats={recognitionCountDetails} />
    </View>

    <View style={styles.section}>
      <View style={[generalStyles.flexRow, generalStyles.justifyBetween]}>
        <Text style={styles.sectionTitle}>RANKS</Text>
        <Text style={styles.sectionSubTitle}>{currentRank.toUpperCase()}</Text>
      </View>
      <RankStats points={pointCount} />
    </View>

    <View style={styles.section}>
      <View style={[generalStyles.flexRow, generalStyles.justifyBetween]}>
        <Text style={styles.sectionTitle}>BADGES</Text>
        <Text style={styles.sectionTitle}>{badgeCount}</Text>
      </View>
      <BadgeStats ranks={completedBadges} />
    </View>

    <View style={styles.section}>
      <View style={[generalStyles.flexRow, generalStyles.justifyBetween]}>
        <Text style={styles.sectionTitle}>REWARDS</Text>
      </View>
      <Text>COMING SOON</Text>
    </View>
    <TrackedTouchableOpacity style={styles.section} onPress={() => NavigationUtils.navigate('Browser', { URI: 'https://kfc1010.reactnative.guru/privacy-policy/' })}>
      <View style={[generalStyles.flexRow, generalStyles.justifyBetween]}>
        <Text style={styles.sectionTitle}>Privacy Policy</Text>
      </View>
      <Text>Read</Text>
    </TrackedTouchableOpacity>
  </View>
);

Profile.defaultProps = {
  name: '',
  pointCount: 0,
  recognitionCount: 0,
  recognitionCountDetails: {
    authenticity: 0,
    grit: 0,
    integrity: 0,
    generosity: 0,
    hospitality: 0,
    hardwork: 0
  },
  completedRanks: [],
  currentRank: '',
  badgeCount: 0,
  completedBadges: [],
  rewardCount: 0
};

Profile.propTypes = {
  name: PropTypes.string,
  profileImageUri: PropTypes.string,
  yumdob: PropTypes.string,
  pointCount: PropTypes.number,
  recognitionCount: PropTypes.number,
  recognitionCountDetails: PropTypes.shape({
    authenticity: PropTypes.number,
    grit: PropTypes.number,
    integrity: PropTypes.number,
    generosity: PropTypes.number,
    hospitality: PropTypes.number,
    hardwork: PropTypes.number
  }),
  currentRank: PropTypes.string,
  badgeCount: PropTypes.number,
  completedBadges: PropTypes.arrayOf(PropTypes.string),
  rewardCount: PropTypes.number,
};

export default Profile;
