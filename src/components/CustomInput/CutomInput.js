import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const CustomInput = ({value, setValue, placeholder}) => {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder={placeholder}
                onChangeText={setValue}
                value={value}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'lightgrey',
        width: '100%',
        borderColor: 'lightgrey',
        marginVertical: 10,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 5
    },
    text: {}
})
export default CustomInput