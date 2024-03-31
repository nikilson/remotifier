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


import Navigation from './src/screens/Navigation';



function App() {

  return (
    <SafeAreaView style={styles.app}>
      <Navigation/>
      {/* <HomeScreen/> */}
      {/* <LoginScreen /> */}
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
