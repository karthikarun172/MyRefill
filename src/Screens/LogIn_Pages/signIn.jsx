import React from "react";
import { View, Text, ImageBackground } from "react-native";
import SignInImg from "../../../assets/SignInImg.png";
import { Input, PasswordInput } from "../../Components/Input";
import { TextButton } from "../../Components/Buttons";
import { Colors } from "../../Utils/Colors";

const SignIn = ({ navigation }) => {
  return (
    <ImageBackground
      source={SignInImg}
      style={{ width: "100%", height: "100%" }}
    >
      <View
        style={{
          width: "100%",
          alignItems: "center",
          marginTop: "100%",
        }}
      >
        <Text
          onPress={() => navigation.goBack()}
          style={{ color: Colors.ButtonColor }}
        >
          {" "}
          {`<`} Back{" "}
        </Text>
        <Input placeholder="Enter Email Id" keyboardType="default" />
        <PasswordInput placeholder="Enter Password" />
        <TextButton title="Sign In" />
        <Text
          onPress={() => navigation.navigate("ForgotPassword")}
          style={{ marginTop: 20, color: Colors.ButtonColor }}
        >
          Forgot Password ?
        </Text>
      </View>
    </ImageBackground>
  );
};

export default SignIn;
