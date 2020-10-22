import React, { useContext } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import ProfileBG from "../../assets/profileBG.svg"
import { ImageBackground } from 'react-native';
import ProfileC1 from "../../assets/profileC1.svg"
import ProfileC2 from "../../assets/profileC2.svg"
import ProfileC3 from "../../assets/profileC3.svg"
import { TextButton, TextButton1 } from '../Components/Buttons';
import { Ionicons as Icon } from "@expo/vector-icons";
import { TouchableOpacity, Platform } from 'react-native';
import Ellips from '../../assets/Ellipse.svg'
import { Context as RegisterContext } from "../Context/RegisterContext";


const { width, height } = Dimensions.get("window")

let topOfCircle = Platform.OS === "ios" ? height / 8 : height / 12

const Profile = ({ navigation }) => {
    const { state, SignOut } = useContext(RegisterContext)
    return (
        <>
            <View style={styles.profileCont} >
                <View style={{ position: 'absolute', top: 1, left: -30 }} >
                    <Ellips width={220} height={220} />
                </View>

                <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 60, left: 30 }} >
                    <Icon name="md-arrow-back" size={25} color={"white"} />
                </TouchableOpacity>


                <View style={{ position: 'absolute', top: 150 }} >
                    <TouchableOpacity style={{ position: 'absolute', alignItems: "flex-start", marginLeft: 40, zIndex: 100 }} onPress={() => navigation.navigate("ViewProfile")} >
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 'bold' }}  >Porn kumar</Text>
                        <Text style={{ color: 'white' }} >View Profile</Text>
                    </TouchableOpacity>
                    <ProfileBG width={width} height={height} />
                    <View style={{ position: 'absolute', flexDirection: 'row', width: "100%", top: topOfCircle, justifyContent: 'space-evenly' }} >
                        <ProfileC1 width={100} height={100} />
                        <ProfileC2 width={100} height={100} />
                        <ProfileC3 width={100} height={100} />
                    </View>
                </View>
                <View style={{ bottom: 200 }} >
                    <View style={{ alignItems: 'center', zIndex: 100 }} >

                        <TextButton onPress={() => console.log("df")} title="LeaderBoard" />
                        <TextButton onPress={() => navigation.navigate("PaymentHistory")} title="Transaction History" />
                    </View>
                    <View style={{ width: 300, alignSelf: 'center', top: 30 }} >
                        <Text onPress={() => navigation.navigate("ChangePassword")} style={{ fontSize: 18, fontWeight: 'bold', }} >Change Password</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', top: 20 }} >Contact Us</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', top: 90, textAlign: 'center', color: '#E32020' }} onPress={() => SignOut()} >Log out</Text>
                    </View>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    profileCont: {
        flex: 1,
        backgroundColor: '#00A2F9'
        , justifyContent: 'flex-end'

    }
})
export default Profile;