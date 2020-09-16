import React from "react";
import { View, Text, ImageBackground, Dimensions } from "react-native";
import SignInImg from "../../../assets/LoginBG.jpg";
import { Input, PasswordInput } from "../../Components/Input";
import { TextButton } from "../../Components/Buttons";
import { Colors } from "../../Utils/Colors";

const { width, height } = Dimensions.get("window");
const SignIn = ({ navigation }) => {
  return (
   
      <View
        style={{
          width: "100%",
          alignItems: "center",
          backgroundColor: "white",
          paddingBottom: height,
        }}
      >
        <Text
          onPress={() => navigation.goBack()}
          style={{ color: Colors.ButtonColor,marginTop:70 }}
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
  );
};

export default SignIn;
