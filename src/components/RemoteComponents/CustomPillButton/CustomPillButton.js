import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');

const CustomPillButton = ({label}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sideButton}>
        <Ionicons name="chevron-up" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.centerText}>{label}</Text>
      <TouchableOpacity style={styles.sideButton}>
        <Ionicons name="chevron-down" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: width * 0.18,
      height: width * 0.35,
      borderRadius: width * 0.08,
      backgroundColor: 'lightgrey',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexDirection: 'column'
    },
    sideButton: {
      width: width * 0.15,
      height: width * 0.15,
      borderRadius: width * 0.08,
      backgroundColor: 'lightgrey',
      alignItems: 'center',
      justifyContent: 'center',
    },
    centerText: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'black'
      }
  });

export default CustomPillButton