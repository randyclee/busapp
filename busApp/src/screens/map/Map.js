import React, { Component } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';


const origin = "17 Mary Wilson Court";
const destination = "73 Pathlane Avenue";
const GOOGLE_MAPS_APIKEY = 'AIzaSyCQqXJflchicdlH2Iq0AMnh126dBaz86dg';

const [text, setText] = useState('');


export default class Map extends Component {
	state = {
		longitude: 0,
    latitude: 0
	};

	findCoordinates = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
				const longitude = JSON.stringify(new Number(position.coords.longitude));
        const latitude = JSON.stringify(new Number(position.coords.latitude));
				this.setState({ longitude, latitude });
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
	};

	render() {
		return (
      <View style={styles.container}>
					<MapView style={styles.map} region={{
		          latitude:43.651070,
		          longitude:-79.347015,
		          latitudeDelta: 1.5,
		          longitudeDelta: 1.5
		        }}
						showsUserLocation={true}
		        style={StyleSheet.absoluteFill}>

		        <MapViewDirections
		          origin={origin}
		          destination={destination}
		          apikey={GOOGLE_MAPS_APIKEY}
							mode="TRANSIT"
		        />
		      </MapView>
      </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
  map: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	}
});
