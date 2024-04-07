import React, {useState} from "react";
import {View, Text, StyleSheet, ScrollView} from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import get from "../../networking/Requests/Requests";
import CustomCircleButton from "../../components/RemoteComponents/CustomCircleButton";
import CustomPillButton from "../../components/RemoteComponents/CustomPillButton";
import CustomRemoteButton from "../../components/RemoteComponents/CustomRemoteButton";

const YtController = ({route}) => {
    const [youtubeSearchKey, setYoutubeSearchKey] = useState('');
    const {baseUrl} = route.params;
    //console.log(baseUrl.baseUrlText, "yt");

    const onYtSearchPressed = async () => {
        response = await get(baseUrl.baseUrlText, `/yt/${youtubeSearchKey}/`)
        setYoutubeSearchKey('');
        //console.warn("YT search");
    }
    return (
        <ScrollView>
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
            <View style={styles.buttonsContainer}>
                <View style={styles.row1}>
                    <CustomRemoteButton icon={"chatbox-ellipses"}/>
                    <CustomRemoteButton icon={"close"} color={'red'}/>
                    <CustomRemoteButton icon={"swap-horizontal"}/>
                </View>
                <View style={styles.row2}>
                    <CustomPillButton label={'Vol'}/>
                    <CustomRemoteButton icon={"volume-mute"}/>
                    <CustomPillButton label={'Vid'}/>
                </View>
                <CustomCircleButton/>
                <View style={styles.row4}>
                    <CustomRemoteButton icon={"expand"}/>
                    <CustomRemoteButton icon={"list"}/>
                    <CustomRemoteButton icon={"contract"}/>
                </View>
                <View style={styles.row1}>
                    <CustomRemoteButton icon={"share-social"}/>
                    <CustomRemoteButton icon={"mic"}/>
                    <CustomRemoteButton icon={"bookmark"}/>
                </View>
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    root: {
        padding: 20,
        justifyContent: 'center'
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
    },
    buttonsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%',
        paddingVertical: 5
        
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 50,
        paddingVertical: 10
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 50,
        width: '100%',
        paddingVertical: 10
    },
    row4: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 50,
        paddingVertical: 10
    }
})
export default YtController