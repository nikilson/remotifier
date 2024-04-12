import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';


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
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column'
  },
  centerButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
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
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  }
});

export default CustomCircleButton