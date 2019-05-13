import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Camera } from 'expo';

export default class App extends React.Component {
  render() {
    return (
      <Camera style={styles.container}>
        <Text>Open up Ap.js to start working on your app!</Text>
      </Camera>
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
