import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const CustomButtom = ({text, onPress, type='PRIMARY'}) => {
    return (
        <Pressable style={[styles.container, styles[`container_${type}`]]} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        margin: 5,
        alignItems: 'center',
        borderColor: 'lightgreen',
        borderWidth: 1,
        marginVertical: 10,
        padding: 15,
        borderRadius: 5
    },
    container_PRIMARY: {
        backgroundColor: 'lightgreen',
    },
    container_TERTIARY:{
        borderColor: 'darkgreen'
    },
    text: {
        color: 'darkgreen',
        fontWeight: 'bold'
    },
    text_PRIMARY: {
        color: 'darkgreen'
    },
    text_TERTIARY:{

    }
})
export default CustomButtom