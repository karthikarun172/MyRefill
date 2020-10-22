import React, { useContext, useState, useEffect } from "react";
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
import { Context as RegisterContext } from "../../Context/RegisterContext";

const { width, height } = Dimensions.get("window");

const SignUp = ({ navigation }) => {
  const { state, Register, clearErrorMessage, locatSignIn } = useContext(
    RegisterContext
  );
  useEffect(() => {
    locatSignIn();
    clearErrorMessage();
    navigation.addListener("focus", () => {
      clearErrorMessage();
    });
  }, []);
  const [fullname, Setfullname] = useState("");
  const [email, Setemail] = useState("");
  const [phoneNumber, SetphoneNumber] = useState("");
  const [password, Setpassword] = useState("");
  const [confirmPassword, SetconfirmPassword] = useState("");

  return (
    <KeyboardAwareScrollView style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          backgroundColor: "white",
          height: height + 100,
          paddingTop: 50,
        }}
      >
        <Text
          onPress={() => navigation.goBack()}
          style={{ color: Colors.ButtonColor }}
        >
          {`<`} Back{" "}
        </Text>
        <Text style={{ color: "red" }}>
          {state.errorMessage ? <Text>{state.errorMessage}</Text> : null}
        </Text>
        <Input placeholder="Enter Name" onChangeText={Setfullname} />
        <Input
          placeholder="Enter Email Id"
          // keyboardType="default"
          onChangeText={Setemail}
        />
        <Input
          placeholder="Enter Mobile Number"
          keyboardType="numeric"
          onChangeText={SetphoneNumber}
        />
        <PasswordInput
          placeholder="Enter Password"
          onChangeText={Setpassword}
        />
        <PasswordInput
          placeholder="Confirm Password"
          onChangeText={SetconfirmPassword}
        />
        <TextButton
          title="Sign Up"
          onPress={() =>
            Register(
              fullname,
              email,
              password,
              phoneNumber,
              confirmPassword,
              () => navigation.navigate("SignIn")
            )
          }
        />
      </View>
    </KeyboardAwareScrollView>
  );
};

export default SignUp;
