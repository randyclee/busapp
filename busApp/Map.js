import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


const origin = {latitude: 37.3318456, longitude: -122.0296002};
const destination = {latitude: 37.771707, longitude: -122.4053769};
const GOOGLE_MAPS_APIKEY = 'AIzaSyCQqXJflchicdlH2Iq0AMnh126dBaz86dg';


 class Map extends Component {
  render() {
    return (
      <MapView style={styles.map} initialRegion={{
          latitude:41.0082,
          longitude:28.9784,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        style={StyleSheet.absoluteFill}>

        <MapViewDirections
          origin={origin}
          destination={destination}
          apikey={GOOGLE_MAPS_APIKEY}
        />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Map;
