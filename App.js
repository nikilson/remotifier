/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import LoginScreen from './src/screens/LoginScreen';



function App() {

  return (
    <SafeAreaView style={styles.app}>
      <LoginScreen />
      {/* <Text>Hello World!</Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default App;
