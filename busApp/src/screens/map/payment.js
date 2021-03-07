import React, { Component } from 'react';
import { Button, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, createAppContainer } from '@react-navigation/stack';
import getDirections from "react-native-google-maps-directions";


class Payment extends Component  {

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
   pay = () => {
      alert('paid')
   }

   render() {
      const { route, navigation } = this.props;
      const { cost } = route.params;
      return (
         <View style = {styles.container}>
           <View style={styles.title}>
             <Text style={styles.textStyle}>Payment: ${cost} </Text>
           </View>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Card Number: "
               placeholderTextColor = "#4169E1"
               autoCapitalize = "none"
               onChangeText = {this.handleOrigin}/>

            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Exirpation Date: "
               placeholderTextColor = "#4169E1"
               autoCapitalize = "none"
               onChangeText = {this.handleDestination}/>

           <TextInput style = {styles.input}
              underlineColorAndroid = "transparent"
              placeholder = "CVV: "
              placeholderTextColor = "#4169E1"
              autoCapitalize = "none"
              onChangeText = {this.handleDestination}/>

            <TouchableOpacity
               style = {styles.submitButton}
               onPress={
                 () => this.pay()
               }>
               <Text style = {styles.submitButtonText}> Pay </Text>
            </TouchableOpacity>
         </View>
      )
   }
}


export default Payment;


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
