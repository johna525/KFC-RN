import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Modal,
} from 'react-native'

import EditEmployee from './EditEmployee'
import DeleteEmployee from './DeleteEmployee'
class Employee extends Component {
  componentDidMount() {
    this.props.subscribeToMore()
  }

  state = {
    modalEditVisible: false,
    modalDeleteVisible: false,
    editEmployee: {},
    deleteEmployee:{}
  }
  toggleModalEdit(visible) {
    this.setState({ modalEditVisible: visible })
  }
  toggleModalDelete(visible) {
    this.setState({ modalDeleteVisible: visible })
  }

  // Get user input
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }

  handleSubmit = updateEmployee => {
    try {
      updateEmployee({
        variables: {
          input: {
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
    const items = this.props.data.listEmployees.items
    return (
        <View>
        {
            items.map(employee => {
                return (
                    <View style={styles.container}>
                    <View key={employee.id}>
                        <Text>{employee.name}</Text>
                        <Text>{employee.profileImageUri}</Text>
                        <Text>{employee.userEmailAddress}</Text>               
                    </View>
                    <TouchableHighlight
                        onPress={() => {
                            this.toggleModalEdit(true);
                            this.setState({editEmployee: employee})
                        }}
                        >
                        <Text style={styles.text}>Edit</Text>
                        </TouchableHighlight>

                           <TouchableHighlight
                        onPress={() => {
                            this.toggleModalDelete(true);
                            this.setState({deleteEmployee: employee})
                        }}
                        >
                        <Text style={styles.text}>Delete</Text>
                        </TouchableHighlight>
                    </View>
                )
            })
        }
        <Modal
            animationType={'slide'}
            transparent={false}
            visible={this.state.modalEditVisible}
            onRequestClose={() => {
            console.log('Modal has been closed.')
            }}>
            <View style={styles.modal}>
            <Text style={styles.text}>Edit Profile View</Text>
            <EditEmployee data={this.state.editEmployee} />
           
            <TouchableHighlight
                onPress={() => {
                this.toggleModalEdit(!this.state.modalEditVisible)
                }}
                >
                <Text style={styles.text}>Close</Text>
            </TouchableHighlight>
            </View>
        </Modal>


         <Modal
            animationType={'slide'}
            transparent={false}
            visible={this.state.modalDeleteVisible}
            onRequestClose={() => {
            console.log('Modal has been closed.')
            }}>
            <View style={styles.modal}>
            <Text style={styles.text}>Delete Profile View</Text>
            <DeleteEmployee data={this.state.deleteEmployee} />
           
            <TouchableHighlight
                onPress={() => {
                this.toggleModalDelete(!this.state.modalDeleteVisible)
                }}
                >
                <Text style={styles.text}>Close</Text>
            </TouchableHighlight>
            </View>
        </Modal>
        </View>
    )
    }
}

export default Employee

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f7021a',
    padding: 100
  }
})
