import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { Input, PasswordInput } from "../../Components/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TextButton } from "../../Components/Buttons";
import SignUpImg from "../../../assets/LoginBG.jpg";
import { Colors } from "../../Utils/Colors";

const { width, height } = Dimensions.get("window");

const SignUp = ({ navigation }) => {
  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            backgroundColor: "white",
            height:height,
            paddingTop: 50,
          }}
        >
          <Text
            onPress={() => navigation.goBack()}
            style={{ color: Colors.ButtonColor }}
          >
            {`<`} Back{" "}
          </Text>

          <Input placeholder="Enter Name" />
          <Input placeholder="Enter Email Id" />
          <Input placeholder="Enter Mobile Number" keyboardType="numeric" />
          <PasswordInput placeholder="Enter Password" />
          <TextButton title="Sign Up" onPress={() => console.log("sd")} />
        </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
