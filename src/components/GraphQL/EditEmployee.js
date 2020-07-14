import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { graphql, compose, Mutation } from 'react-apollo'
import { graphqlMutation } from 'aws-appsync-react'
import { appsyncClient } from '../../index';
import gql from 'graphql-tag'
import { updateEmployee } from '../graphql/mutations'

class EditEmployee extends Component {
  state = {
    id:'',
    name: '',
    userEmailAddress: '',
    profileImageUri: ''
  }
  // Get user input
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  // spread selected item props into state
  componentDidMount() {
    this.setState({
      ...this.props.data
    })
  }

    handleSubmit = updateEmployee => {
    try {
      updateEmployee({
        variables: {
          input: {
            id: this.props.data.id,
            profileImageUri: this.state.profileImageUri,
            userEmailAddress: this.state.userEmailAddress,
            name: this.state.name,
            createdAt: new Date().toISOString()
          }
        }
      }).then(res => {
        console.log(res)
        this.setState
        name: ''
      })
    } catch (e) {
      console.log(e.message)
    }
  }

 render() {
   //const {name, userEmailAddress, profileImageUri} = this.props.data;
    return (
      <View style={styles.container}>
        <Text>Edit Component</Text>
        <Mutation mutation={gql(updateEmployee)}>
          {(updateEmployee, { data, error, loading }) => {
            return (
              <View>
                <TextInput
                  onChangeText={val => this.onChangeText('name', val)}
                  placeholder={'name'}
                  value={this.state.name}
                  style={{ fontSize: 22, padding: 13 }}
                />

                <TextInput
                  onChangeText={val =>
                    this.onChangeText('profileImageUri', val)
                  }
                  placeholder="Image here ..."
                  value={this.state.profileImageUri}
                  style={{ fontSize: 22, padding: 13 }}
                />

                <TextInput
                  onChangeText={val =>
                    this.onChangeText('userEmailAddress', val)
                  }
                  placeholder="Email here ..."
                  value={this.state.userEmailAddress}
                  style={{ fontSize: 22, padding: 13 }}
                />

                <Button
                  title="Edit"
                  // style={styles.buttonStyle}
                  onPress={() => this.handleSubmit(updateEmployee)}
                />
                {/* <Button title={loading ? "Yes boss..." : "Create Task"}/> */}
                {error && <Text>{error.message}</Text>}
              </View>
            )
          }}
        </Mutation>
        
      </View>
    )
  }
}
export default EditEmployee

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
