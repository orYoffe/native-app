import React, { Component } from 'react'
import { StyleSheet, TouchableHighlight, View, Text } from 'react-native'
import MapView from 'react-native-maps'

export default class Map extends Component {
  render() {
    const { returnBack } = this.props
    return (
      <View style={styles.MapContainer}>
        <TouchableHighlight
          style={styles.mapButton}
          onPress={returnBack}
          accessibilityLabel="Close Maps"
          ><Text>Close Maps</Text></TouchableHighlight>
        <MapView
          style={styles.map}
          region={{
            latitude: 52.5166667,
            longitude: 13.4,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
          >
        </MapView>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  MapContainer: {
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  mapButton: {
    flex: 2,
    backgroundColor: '#0000ff',
    zIndex: 3,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})
