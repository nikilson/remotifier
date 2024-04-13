import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const CustomCircleButton = ({centerText='Play', onPressCenter, onPressTop, onPressBottom, onPressLeft, onPressRight}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sideButton} onPress={onPressTop}>
        <Ionicons name="chevron-up" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.midButtons}>
      <TouchableOpacity style={styles.sideButton} onPress={onPressLeft}>
        <Ionicons name="chevron-back" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.centerButton} onPress={onPressCenter}>
         {/* <Ionicons name="add" size={36} color="black" /> */}
         <Text style={styles.centerButtonText}>{centerText}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sideButton} onPress={onPressRight}>
        <Ionicons name="chevron-forward" size={24} color="black" />
      </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.sideButton} onPress={onPressBottom}>
        <Ionicons name="chevron-down" size={24} color="black" />
      </TouchableOpacity>
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    width: width * 0.6,
    height: width * 0.6,
    borderRadius: width * 0.3,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column'
  },
  centerButton: {
    width: width * 0.25,
    height: width * 0.25,
    borderRadius: width * 0.125,
    backgroundColor: 'white',
   //  borderWidth: 2,
    //borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  midButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%'
  },
  sideButton: {
    width: width * 0.17,
    height: width * 0.17,
    borderRadius: width * 0.07,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerButtonText: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    color: 'black'
  }
});

export default CustomCircleButton