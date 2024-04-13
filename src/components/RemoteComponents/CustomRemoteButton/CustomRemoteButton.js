import { View, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';


const { width, height } = Dimensions.get('window');

const CustomRemoteButton = ({icon, color="black", onPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sideButton} onPress={onPress}>
        <Ionicons name={icon} size={24} color={color} />
      </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: width * 0.18,
      height: width * 0.18,
      borderRadius: width * 0.07,
      backgroundColor: 'lightgrey',
    },
    sideButton: {
      width: width * 0.18,
      height: width * 0.18,
      borderRadius: width * 0.07,
      backgroundColor: 'lightgrey',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default CustomRemoteButton