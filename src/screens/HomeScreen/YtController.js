import React, {useState} from "react";
import {View, Text, StyleSheet} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import get from "../../networking/Requests/Requests";

const YtController = ({route}) => {
    const [youtubeSearchKey, setYoutubeSearchKey] = useState('');
    const {baseUrl} = route.params;
    //console.log(baseUrl.baseUrlText, "yt");

    const onYtSearchPressed = async () => {
        response = await get(baseUrl.baseUrlText, `/yt/${youtubeSearchKey}/`)
        //console.warn("YT search");
    }
    return (
        <View style={styles.root}>
            <View style={styles.searchrow}>
            <View style={styles.searchinput}>
                <CustomInput 
                    placeholder="Search anything!"
                    value={youtubeSearchKey}
                    setValue={setYoutubeSearchKey}
                />
            </View>
            <View style={styles.ytsearchbtn}>
                <CustomButton
                    style={styles.ytsearchbtn}
                    onPress={onYtSearchPressed}
                    text="Play"
                />
            </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 20,
    },
    searchrow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    searchinput: {
        flex: 3,
        marginHorizontal: 5,
    },
    ytsearchbtn: {
        flex: 1,
        marginHorizontal: 5,
    }
})
export default YtController