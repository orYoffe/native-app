import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableHighlight, Dimensions } from 'react-native'
import Map from './components/Map'

export default class App extends Component {
  state = {
    shouldShowMaps: false,
  }

  toggleMaps = () => {
    console.log('button clicked');
    this.setState({ shouldShowMaps: !this.state.shouldShowMaps })
  }

  render() {
    const { shouldShowMaps } = this.state
    if (shouldShowMaps) {
      return <Map returnBack={this.toggleMaps} />
    }
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        <Text style={styles.text}>Changes you make will automatically reload.</Text>
          <TouchableHighlight
            style={styles.button}
            onPress={this.toggleMaps}
            accessibilityLabel="Learn more about this purple button"
          ><Text style={styles.colorWhite}>Open maps</Text></TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: Dimensions.get('window').width * 0.5,
  },
  colorWhite: {
    color: '#ffffff',
  },
  button: {
    flex: 2,
    backgroundColor: '#841584',
    height: 40,
  },
  text: {
    flex: 1,
  }
})
