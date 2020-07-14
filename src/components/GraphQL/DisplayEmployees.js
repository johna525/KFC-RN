import React, { Component } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Query } from 'react-apollo'
import { listEmployees } from '../../graphql/queries'
import { onCreateEmployee } from '../../graphql/subscriptions'
import gql from 'graphql-tag'
import Employee from './Employee'
 
class DisplayEmployees extends Component {
  subScribeNewEmployees = subscribeToMore => {
    return subscribeToMore({
      document: gql(onCreateEmployee),
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev
        const newEmployeeData = subscriptionData.data.onCreateEmployee
        return Object.assign({}, prev, {
          listEmployees: {
            ...prev.listEmployees,
            items: [...prev.listEmployees.items, newEmployeeData]
          }
        })
      }
    })
  }
  render() {
    return (
      <Query query={gql(listEmployees)}>
        {({ loading, data, error, subscribeToMore }) => {
          if (loading) return <ActivityIndicator />
          if (error) return <Text>{error.message}</Text>

          return (
            <Employee
              data={data}
              subscribeToMore={() =>
                this.subScribeNewEmployees(subscribeToMore)
              }
            />
          )
        }}
      </Query>
    )
  }
}
export default DisplayEmployees

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
