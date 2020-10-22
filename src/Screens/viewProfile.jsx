import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons as Icon } from "@expo/vector-icons";
import ProfileBG from "../../assets/profileBG.svg"
import { ProfileInput } from "../Components/Input"
import { TextButton } from '../Components/Buttons';


const { width, height } = Dimensions.get("window")

const ViewProfile = ({ navigation }) => {
    return (
        <>
            <View style={styles.viewProfileCont} >
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 60, left: 30 }} >
                    <Icon name="md-arrow-back" size={25} color={"white"} />
                </TouchableOpacity>
                <View style={{ position: 'absolute', top: 150, width: width, alignItems: "flex-start", marginLeft: 40, zIndex: 100 }} >
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}  >Porn Kumar</Text>
                </View>
                <View style={{ position: 'absolute', top: 150 }}>
                    <ProfileBG width={width} height={height} />
                    <View style={{ position: 'absolute', top: 120, alignSelf: 'center' }} >
                        <ProfileInput title={"Name"} placeholder={'Porn Kumar'} />
                        <ProfileInput title={"Email Id"} placeholder={'PornKumar@brazzer.com'} />
                        <ProfileInput title={"State"} placeholder={'Porn Kumar'} />
                        <ProfileInput title={"City"} placeholder={'Porn Kumar'} />
                        <ProfileInput title={"Phone"} placeholder={'Porn Kumar'} />
                    </View>
                </View>
                <View style={{ width, alignItems: 'center', bottom: 50 }} >
                    <TextButton title="Save Preference" />
                </View>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    viewProfileCont: {
        flex: 1,
        backgroundColor: '#00A2F9'
        , justifyContent: 'flex-end'

    }
})

export default ViewProfile;