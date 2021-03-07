import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';


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
      return (
         <View style = {styles.container}>
           <View style={styles.title}>
             <Text style={styles.textStyle}>Bus Transit Application </Text>
           </View>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "From"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleOrigin}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "To"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleDestination}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> See on Map </Text>
            </TouchableOpacity>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Bus Route </Text>
            </TouchableOpacity>

            <View style={styles.bottomView}>
              <Text style={styles.textStyle}>Total Cost: </Text>
            </View>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> Pay </Text>
            </TouchableOpacity>
         </View>
      )
   }
}


export default HomeScreen;


const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      margin: 15,
      height: 40,
      borderColor: '#7a42f4',
      borderWidth: 1
   },
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
   textStyle: {
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white'
   }
})
