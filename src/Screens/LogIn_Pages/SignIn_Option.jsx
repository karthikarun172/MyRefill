import React, { Component } from "react";
import {
  View,
  Text,
  ImageBackground,
  Platform,
  Dimensions, Linking
} from "react-native";
import SignInOptionImg from "../../../assets/SignInImg.png";
import { TextButton, IconTextButton } from "../../Components/Buttons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../../Utils/Colors";
import config from '../../config.json'

const { width, height } = Dimensions.get("window");

const SignInOption = ({ navigation }) => {
  return (
    <ImageBackground
      source={SignInOptionImg}
      style={{ width: "100%", height: "100%" }}
    >
      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: height / 2,
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          style={{ width: "100%" }}
        >
          <IconTextButton
            Icon="mail"
            color="white"
            title="Sign Up with Email"
          />
        </TouchableOpacity>

        <TextButton
          title="Log In"
          onPress={() => navigation.navigate("SignIn")}
        />
        <View
          style={{
            alignItems: "center",
            position:"absolute",
            top:height/2.5
          }}
        >
          <Text style={{ color: Colors.ButtonColor }} onPress={()=>Linking.openURL(config.Terms)} >
            By Signing In or Sigining Up you agree to
          </Text>
          <Text style={{ color: "grey" }} onPress={()=>Linking.openURL(config.Terms)}> Our Terms and Condtions </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignInOption;
