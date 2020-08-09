import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Input } from "../../Components/Input";
import ForgotPasswordImg from "../../../assets/ResetLink.png";
import { Colors } from "../../Utils/Colors";
import { TextButton } from "../../Components/Buttons";
const ForgotPassword = ({ navigation }) => {
  return (
    <ImageBackground
      source={ForgotPasswordImg}
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
          style={{ color: Colors.ButtonColor }}
          onPress={() => navigation.goBack()}
        >
          {`<`} Back{" "}
        </Text>
        <Input placeholder="Enter the Email id" />
        <Text style={{ marginTop: 20, color: Colors.ButtonColor }}>
          Enter your Email ID to send Reset Link
        </Text>
        <TextButton title="Request for link" />
      </View>
    </ImageBackground>
  );
};

export default ForgotPassword;
