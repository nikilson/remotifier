import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions } from "react-native";
import CustomInput from "../../components/CustomInput";
// Assets
import RemotifierLogo from "../../../assets/images/pcremote.png"
import CustomButtom from "../../components/CustomButton/CustomButtom";

const LoginScreen = () => {
    const [baseUrl, setBaseUrl] = useState('');

    const onSignInPressed = () => {
        console.warn("Sign In Pressed");
    }
    const onScanServerPressed = () => {
        console.warn("Scanning for servers")
    }
    const {height} = useWindowDimensions();
    return (
        <View style={styles.root}>
            <Image source={RemotifierLogo} style={[styles.logo, {height: height * 0.3}]}  resizeMode="contain"></Image>
            <View style={styles.greetingContainer}>
                <Text style={styles.greeting}>Remotifiy everything!</Text>
            </View>
            
            <CustomInput 
                placeholder="Remotifier Url"
                value={baseUrl}
                setValue={setBaseUrl}
            />
            <CustomButtom 
                onPress={onScanServerPressed}
                text="Find Server"
                type="TERTIARY"
            />
            <CustomButtom 
                onPress={onSignInPressed}
                text="Sign In"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20
    },
    logo: {
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
        marginBottom: '25%'
    },
    greeting: {
        textAlign: 'left',
        fontSize: 25,
        marginVertical: 15,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: 'black'
    },
    greetingContainer: {
        width: '100%'
    } 
})
export default LoginScreen