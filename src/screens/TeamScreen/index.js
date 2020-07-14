import React from 'react';
import {
  FlatList, Text, View, RefreshControl
} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';
import Loader from '../../components/Loader';
import TeamMember from '../../components/TeamMember';
import CacheUtils, { CacheConstants } from '../../utils/cacheUtils';
import APIUtils from '../../utils/apiUtils';
import NavigationUtils from '../../utils/navigationUtils';
import styles from './styles';
import StyleConstants from '../../style/styleConstants';

const HEADER_HEIGHT = StyleConstants.getFontSize(getStatusBarHeight(true))
  + StyleConstants.getFontSize(96);

const TEAM_MEMBERS_STORAGE_KEY = 'TeamMembers:Members';

export default class TeamScreen extends React.Component {
  state = {
    teamMembers: [],
    listRefreshing: false
  };

  async componentDidMount() {
    const cachedTeamMembers = await CacheUtils.get(TEAM_MEMBERS_STORAGE_KEY);
    if (cachedTeamMembers) {
      this.setState({ teamMembers: cachedTeamMembers });
    } else {
      this.fetchTeamMembers();
    }
  }

  fetchTeamMembers = async () => {
    try {
      this.setState({ listRefreshing: true });
      const teamMembers = await APIUtils.getAllEmployees();
      console.log('teamMembers', teamMembers);
      if (teamMembers) {
        this.setState(
          {
            teamMembers,
            listRefreshing: false
          },
          () => {
            CacheUtils.set(TEAM_MEMBERS_STORAGE_KEY, this.state.teamMembers, {
              expiry: CacheConstants.expiry.SHORT
            });
          }
        );
      }
    } catch (error) {
      console.log('Error: ', error);
      this.setState({ listRefreshing: false });
    }
  };

  refreshTeamMembers = () => {
    this.fetchTeamMembers();
  };

  renderLoader = () => {
    return <Loader text="LOADING TEAM MEMBERS" />;
  };

  sendRecognition = (teamMember) => {
    NavigationUtils.navigate('SendRecognition', {
      teamMember
    });
  };

  renderHeader = () => {
    return (
      <View style={[styles.team.header, { height: HEADER_HEIGHT }]}>
        <View style={[styles.team.headerInner]}>
          <Text style={styles.team.welcome}>People you work with</Text>
          <Text style={styles.team.H1}>TEAM MEMBERS</Text>
        </View>
      </View>
    );
  };

  renderEmptyView = () => {
    return (
      <Text style={styles.team.emptyText}>No members</Text>
    );
  }

  render() {
    const { teamMembers, listRefreshing } = this.state;
    return (
      <React.Fragment>
        {this.renderHeader()}
        {!listRefreshing ? (
          <FlatList
            data={teamMembers}
            renderItem={({ item, index }) => (
              <TeamMember
                {...item}
                index={index}
                sendRecognition={() => this.sendRecognition({ ...item })}
              />
            )}
            keyExtractor={item => item.id}
            ListEmptyComponent={this.renderEmptyView}
            refreshControl={<RefreshControl
              refreshing={this.state.listRefreshing}
              onRefresh={this.refreshTeamMembers}
              colors={[
                StyleConstants.colors.colorPrimary,
                StyleConstants.colors.colorPrimaryDark
              ]}
            />}
          />
        ) : (
          <React.Fragment>{this.renderLoader()}</React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
