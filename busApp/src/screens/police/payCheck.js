import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import getDirections from "react-native-google-maps-directions";


class HomeScreen extends Component  {
  state = {
      origin: '',
      destination: ''
   }

   handleOrigin = (text) => {
      this.setState({ origin: text })
   }
   handleDestination = (text) => {
      this.setState({ destination: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
     const { route, navigation } = this.props;
     var payBool;
      if(route.params=true){
        payBool = true;
      }
      else {
        payBool = false;
      }

      return (

         <View style = {styles.container}>
           <View style={styles.title}>
             <Text style={styles.textStyle}>Bus Transit Application </Text>
           </View>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "From: "
               placeholderTextColor = "#4169E1"
               autoCapitalize = "none"
               onChangeText = {this.handleOrigin}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "To: "
               placeholderTextColor = "#4169E1"
               autoCapitalize = "none"
               onChangeText = {this.handleDestination}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress={() => this.props.navigation.navigate('Map', {origin: this.state.origin, destination: this.state.destination})}>
               <Text style = {styles.submitButtonText}> Map </Text>
            </TouchableOpacity>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                 handleGetDirections = () => {
                  const data = {

                      params: [
                          {
                              key: "travelmode",
                              value: "transit"  // may be "walking", "bicycling" or "transit" as well
                          },
                          {
                              key: "dir_action",
                              value: "navigate" // this instantly initializes navigation using the given travel mode
                          },
                          {
                              key: "origin",
                              value: this.state.origin
                          },
                          {
                              key: "destination",
                              value: this.state.destination
                          }
                      ]
                  }
                  getDirections(data)
              }
               }>
               <Text style = {styles.submitButtonText}> Bus Times </Text>
            </TouchableOpacity>
            <TouchableOpacity
               style = {styles.submitButton}
               onPress={() => this.props.navigation.navigate('Payment', {cost: this.state.cst})}>
               <Text style = {styles.submitButtonText}> Payment Proof </Text>
            </TouchableOpacity>
         </View>
      )
   }
}


export default HomeScreen;


const styles = StyleSheet.create({
   container: {
      paddingTop: 23,
      backgroundColor: '#F5F5F5',
      height: '100%',
      justifyContent: 'center'
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#808080',
      borderWidth: 1,

   },
   submitButton: {
      backgroundColor: '#4169E1',
      padding: 10,
      margin: 15,
      height: 40,
   },
   textStyle: {
      padding: 10,
      margin: 15,
      fontWeight: 'bold',
      fontSize: 30,
      textAlign: 'center',
   },
   submitButtonText:{
      color: 'white',
      textAlign: 'center',
   }
})
