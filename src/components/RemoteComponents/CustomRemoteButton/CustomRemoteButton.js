import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const CustomRemoteButton = ({icon, color="black"}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sideButton}>
        <Ionicons name={icon} size={24} color={color} />
      </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: 60,
      height: 60,
      borderRadius: 24,
      backgroundColor: 'lightgrey',
    },
    sideButton: {
      width: 60,
      height: 60,
      borderRadius: 24,
      backgroundColor: 'lightgrey',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default CustomRemoteButton