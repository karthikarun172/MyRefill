import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Input, PasswordInput } from "../../Components/Input";
import { TextButton } from "../../Components/Buttons";
import SignUpImg from "../../../assets/SignUpImg.png";
import { Colors } from "../../Utils/Colors";
const SignUp = ({ navigation }) => {
  return (
    <ImageBackground
      source={SignUpImg}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={{ width: "100%", alignItems: "center", marginTop: "90%" }}>
        <Text
          onPress={() => navigation.goBack()}
          style={{ color: Colors.ButtonColor }}
        >
          {`<`} Back{" "}
        </Text>
        <Input placeholder="Enter name" />
        <Input placeholder="Enter Email id" />
        <PasswordInput placeholder="Enter Password" />
        <TextButton title="Sign Up" />
      </View>
    </ImageBackground>
  );
};

export default SignUp;
