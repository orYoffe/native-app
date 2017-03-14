import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import MapView from 'react-native-maps'

export default class App extends Component {
  state = {
    shouldShowMaps: false,
  }
  onPressButton = () => {
    console.log("You tapped the button!")
    this.setState({ shouldShowMaps: true })
  }

  render() {
    const { shouldShowMaps } = this.state
    console.log(shouldShowMaps)
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
          <Button
            style={styles.button}
            onPress={this.onPressButton}
            title="Open maps"
            accessibilityLabel="Learn more about this purple button"
          />
        {shouldShowMaps && (
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
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flex: 2,
    backgroundColor: '#841584',
    alignItems: 'center',
    justifyContent: 'center',
  },
   map: {
     ...StyleSheet.absoluteFillObject,
   },
})
