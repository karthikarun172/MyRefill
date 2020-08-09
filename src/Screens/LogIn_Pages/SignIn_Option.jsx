import React from "react";
import { View, Text, ImageBackground, Platform } from "react-native";
import SignInOptionImg from "../../../assets/Signinoptions.png";
import { TextButton, IconTextButton } from "../../Components/Buttons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Colors } from "../../Utils/Colors";

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
          marginTop: "100%",
        }}
      >
        <IconTextButton Icon="google" color="red" title="Sign In with Google" />
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
            margin: Platform.OS === "ios" ? 10 : 50,
            alignItems: "center",
          }}
        >
          <Text style={{ color: Colors.ButtonColor }}>
            By Signing In or Sigining Up you agree to
          </Text>
          <Text style={{ color: "grey" }}> Our Terms and Condtions </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignInOption;
