import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      width: 60,
      height: 150,
      borderRadius: 24,
      backgroundColor: 'lightgrey',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      flexDirection: 'column'
    },
    sideButton: {
      width: 48,
      height: 48,
      borderRadius: 24,
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