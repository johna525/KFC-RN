import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { graphql, compose, Mutation } from 'react-apollo';
import { graphqlMutation } from 'aws-appsync-react';
import { appsyncClient } from '../../index';
import gql from 'graphql-tag';
import { deleteEmployee } from '../../graphql/mutations';
import { listEmployees } from '../../graphql/queries';

// active
// badgeCount
// badges
// createdAt
// id
// name
// pointCount
// posts
// profileCompletionStatus
// profileImageUri
// recognitionCount
// recognitions
// rewardCount
// rewards
// termsAccepted
// userEmailAddress
// username
// yumdob
// yumgivenname
// yumstoreid
// yumusertype

class DeleteEmployee extends Component {
  state = {
    id: '',
    name: '',
    userEmailAddress: '',
    profileImageUri: '',
  };
  // Get user input
  onChangeText = (key, val) => {
    this.setState({ [key]: val });
  };
  // spread selected item props into state
  componentDidMount() {
    this.setState({
      ...this.props.data,
    });
  }

  handleSubmit = (deleteEmployee) => {
    try {
      deleteEmployee({
        variables: {
          input: {
            id: this.props.data.id,
          },
        },
        // not needed in the main app as we will log the user out etc rather than display a list
        optimisticResponse: () => ({
          deleteEmployee: {
            __typename: 'Employee',
            id: this.props.data.id,
            profileImageUri: this.state.profileImageUri,
            userEmailAddress: this.state.userEmailAddress,
            name: this.state.name,
            createdAt: new Date().toISOString(),
            woo: Math.round
          },
        }),
        update: (cache, { data: { deleteEmployee } }) => {
          const query = gql(listEmployees);

          // read query from cache
          const data = cache.readQuery({ query });

          // add updated employeeList to cache copy - filter out deleted employee
          data.listEmployees.items = [
            ...data.listEmployees.items.filter(
              (item) => item.id !== this.props.id
            ),
          ];

          //Overwrite cache with new results
          cache.writeQuery({ query, data });
        },
      }).then((res) => {
        console.log(res);
        this.setState;
        name: '';
      });
    } catch (e) {
      console.log(e.message);
    }
    // delete profile image...
    // Storage.remove('image-key')
    // .then(result => console.log(result))
    // .catch(err => console.log(err));
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>DeleteEmployee Component</Text>
        <Mutation mutation={gql(deleteEmployee)}>
          {(deleteEmployee, { data, error, loading }) => {
            return (
              <View>
                <Button
                  title="Delete"
                  onPress={() => this.handleSubmit(deleteEmployee)}
                />
                {error && <Text>{error.message}</Text>}
              </View>
            );
          }}
        </Mutation>
      </View>
    );
  }
}
export default DeleteEmployee;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
