import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';

const GOOGLE_MAPS_APIKEY = 'AIzaSyCQqXJflchicdlH2Iq0AMnh126dBaz86dg';

class HomeScreen extends Component  {

  state = {
      origin: '',
      destination: '',
      distance:'hi'
   }


   handleOrigin = (text) => {
      this.setState({ origin: text })
   }
   handleDestination = (text) => {
      this.setState({ destination: text })
   }
   handleDistance = (text) => {
      this.setState({ distance: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }

   _onPressButton() {
    fetch("https://maps.googleapis.com/maps/api/distancematrix/json?origins=17 mark wilson court&destinations=queens university&key=AIzaSyCQqXJflchicdlH2Iq0AMnh126dBaz86dg")
    .then(response => response.json())
    .then((responseJson)=> {
      this.handleDistance(responseJson.rows[0].elements[0].distance)
    })
    .catch(error=>console.log(error))
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

            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                 this._onPressButton()
               }>
               <Text style = {styles.submitButtonText}> Calculate Cost </Text>
            </TouchableOpacity>

            <View style={styles.bottomView}>
              <Text style={styles.textStyle}> {this.state.destionation} </Text>
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
