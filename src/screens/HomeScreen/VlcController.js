import React from "react";
import {View, Text} from "react-native";

const VlcController = ({route}) => {
    const {baseUrl} = route.params;
    
    return (
        <View><Text>{baseUrl.baseUrlText}</Text></View>
    )
}

export default VlcController