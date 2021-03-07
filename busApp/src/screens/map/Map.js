import React, { Component, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Alert, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';

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
		const { route, navigation } = this.props;
		const { origin, destination, history } = route.params;
		/*if(JSON.stringify(origin) && JSON.stringify(destination)){
			alert('Please ensure that both origin and destination are filled out')
		}*/
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
		          origin= {JSON.stringify(origin)}
		          destination= {JSON.stringify(destination)}
		          apikey={GOOGLE_MAPS_APIKEY}
							mode="TRANSIT"
							strokeWidth={3}
	    				strokeColor="blue"
							onStart={(params) => {
	              console.log(`Started routing between "${origin}" and "${destination}"`);

	            }}
	            onReady={result => {
								const dist = JSON.stringify(new Number(result.distance));
				        var dur = JSON.stringify(new Number(result.duration));
								dur = (Math.round(dur * 100) / 100).toFixed(2)
								const cst = (Math.round(dur * 100) / 1400).toFixed(2)
								this.setState({ dist, dur, cst })

	            }}
		        />
		      </MapView>
				</View>
				<View style={{width:'100%', height:'10%', flexDirection: 'row'}}>
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', fontWeight: 'bold',fontSize: 20}}><Text>Distance: {this.state.dist} km</Text></View>
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', fontWeight: 'bold',fontSize: 20}}><Text>Duration of Trip: {this.state.dur}</Text></View>
				</View>
				<View style={{width:'100%', height:'10%', flexDirection: 'row'}}>
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Text style = {{fontWeight: 'bold',fontSize: 20}}>Cost: ${this.state.cst}</Text></View>
				</View>
				<View style={{width:'100%', height:'10%', flexDirection: 'row'}}>
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
							<TouchableOpacity
								 style = {styles.submitButton}
								 onPress={() => this.props.navigation.navigate('Payment', {cost: this.state.cst})}>
								 <Text style = {styles.submitButtonText}> Pay </Text>
							</TouchableOpacity>
					</View>
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
  	bottom:0,
		fontWeight: 'bold',
		fontSize: 20,
	},
  textDur: {
		position: 'absolute',
		justifyContent: 'space-between',
  	bottom:0,
		fontWeight: 'bold',
		fontSize: 20,
	},
  textCst: {
		position: 'absolute',
		justifyContent: 'space-between',
  	bottom:0,
		fontWeight: 'bold',
		fontSize: 20,
	},
	submitButton: {
		 backgroundColor: '#4169E1',
		 padding: 10,
		 margin: 15,
		 height: 40,
	},
	submitButtonText:{
		 color: 'white',
		 textAlign: 'center',
	}
});
