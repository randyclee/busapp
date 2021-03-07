
import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/map/HomeScreen.js'
import Map from './src/screens/map/Map.js'
import Payment from './src/screens/map/payment.js'
import PayCheck from './src/screens/police/payCheck.js'



const Stack = createStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen
            name="Map"
            component={Map}
          />
          <Stack.Screen
            name="Payment"
            component={Payment}
          />
          <Stack.Screen
            name="PayCheck"
            component={PayCheck}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}


export default App
