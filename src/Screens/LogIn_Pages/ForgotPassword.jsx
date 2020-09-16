import React from "react";
import { View, Text, ImageBackground,Dimensions } from "react-native";
import { Input } from "../../Components/Input";
import ForgotPasswordImg from "../../../assets/ResetLink.png";
import { Colors } from "../../Utils/Colors";
import { TextButton } from "../../Components/Buttons";

const {width,height} = Dimensions.get('window')

const ForgotPassword = ({ navigation }) => {
  return (
      <View
        style={{
          width: "100%",
          backgroundColor:'white',
          alignItems: "center",
          height:height
          
        }}
      >
        <Text
          style={{ color: Colors.ButtonColor ,marginTop:height/3 }}
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
  );
};

export default ForgotPassword;
