import React, { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';

const origin = "17 Mary Wilson Court";
const destination = "73 Pathlane Avenue";
const GOOGLE_MAPS_APIKEY = 'AIzaSyCQqXJflchicdlH2Iq0AMnh126dBaz86dg';


export default class Map extends Component {

	state = {
		dist:0,
		dur:0,
		cst:0
	};

	findCoordinates = () => {
		navigator.geolocation.getCurrentPosition(
			position => {
				const longitude = JSON.stringify(new Number(position.coords.longitude));
        const latitude = JSON.stringify(new Number(position.coords.latitude));
				console.log(`Longitude: `+ longitude)
				console.log(`Latitude: ` + latitude)
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
	};

	render() {
		return (
			<View style={{width:'100%', height:'100%'}}>
				<View style={{width:'100%', height:'70%'}}>
					<MapView style={{width:'100%', height:'100%'}} region={{
		          latitude:43.651070,
		          longitude:-79.347015,
		          latitudeDelta: 1,
		          longitudeDelta: 1
		        }}
						provider={PROVIDER_GOOGLE}
						showsUserLocation={true}
		        style={StyleSheet.absoluteFill}>

		        <MapViewDirections
		          origin={origin}
		          destination={destination}
		          apikey={GOOGLE_MAPS_APIKEY}
							mode="TRANSIT"
							strokeWidth={3}
	    				strokeColor="blue"
							onStart={(params) => {
	              console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
	            }}
	            onReady={result => {
								const dist = JSON.stringify(new Number(result.distance));
				        var dur = JSON.stringify(new Number(result.duration));
								dur = (Math.round(dur * 100) / 100).toFixed(2)
								const cst = (Math.round(dur * 100) / 765).toFixed(2)
								this.setState({ dist, dur, cst })
	            }}
		        />
		      </MapView>
				</View>
				<View style={{width:'100%', height:'20%', flexDirection: 'row'}}>
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text>Distance: {this.state.dist} km</Text></View>
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}><Text>Duration of Trip: {this.state.dur}</Text></View>
				</View>
				<View style={{width:'100%', height:'10%', flexDirection: 'row'}}>
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text>Cost: ${this.state.cst}</Text></View>
				</View>
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
		backgroundColor: '#F5FCFF',
		height:'80%'
	},
  textDist: {
		position: 'absolute',
		justifyContent: 'space-between',
  	bottom:0
	},
  textDur: {
		position: 'absolute',
		justifyContent: 'space-between',
  	bottom:0
	},
  textCst: {
		position: 'absolute',
		justifyContent: 'space-between',
  	bottom:0
	}
});
