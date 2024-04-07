import React, {useState} from "react";
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from "react-native";
import CustomInput from "../../components/CustomInput";
// Assets
import RemotifierLogo from "../../../assets/images/pcremote.png"
import CustomButtom from "../../components/CustomButton/CustomButtom";
import scanForFlaskServers from "../../networking/ScanFlaskServer";
import { useNavigation } from "@react-navigation/native";
import get from "../../networking/Requests/Requests";


const LoginScreen = () => {
    const navigation = useNavigation();
    const [baseUrlText, setBaseUrlText] = useState('');

    const onSignInPressed = async () => {
        var response = await get(baseUrl=baseUrlText, endpoint='/connect');
        console.log(response, baseUrlText);
        if (response != null && response.success){
            navigation.navigate("Home", {"baseUrl": {baseUrlText}});
        }
    }
    const onScanServerPressed = () => {
        let baseUrl = scanForFlaskServers(5000);
        console.warn("Scanning for servers");
    }
    const {height} = useWindowDimensions();
    return (
        <ScrollView>
        <View style={styles.root}>
            <Image source={RemotifierLogo} style={[styles.logo, {height: height * 0.3}]}  resizeMode="contain"></Image>
            <View style={styles.greetingContainer}>
                <Text style={styles.greeting}>Remotifiy everything!</Text>
            </View>
            
            <CustomInput 
                placeholder="Remotifier Url"
                value={baseUrlText}
                setValue={setBaseUrlText}
            />
            <CustomButtom 
                onPress={onScanServerPressed}
                text="Find Server"
                type="TERTIARY"
            />
            <CustomButtom 
                onPress={onSignInPressed}
                text="Connect"
            />
        </View>
        </ScrollView>
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
        marginBottom: '5%'
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