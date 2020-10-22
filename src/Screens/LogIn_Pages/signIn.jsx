import React, { useEffect, useContext, useState } from "react";
import { View, Text, ImageBackground, Dimensions } from "react-native";
import SignInImg from "../../../assets/LoginBG.jpg";
import { Input, PasswordInput } from "../../Components/Input";
import { TextButton } from "../../Components/Buttons";
import { Colors } from "../../Utils/Colors";
import { Context as RegisterContext } from "../../Context/RegisterContext";

const { width, height } = Dimensions.get("window");
const SignIn = ({ navigation }) => {
  const { state, Login, clearErrorMessage, locatSignIn } = useContext(
    RegisterContext
  );

  const [email, Setemail] = useState("");
  const [password, Setpassword] = useState("");

  useEffect(() => {
    locatSignIn();
    clearErrorMessage();
    navigation.addListener("focus", () => {
      clearErrorMessage();
    });
  }, []);

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
        style={{ color: Colors.ButtonColor, marginTop: 70 }}
      >
        {" "}
        {`<`} Back{" "}
      </Text>
      <Text style={{ color: "red" }}>
        {state.errorMessage ? <Text>{state.errorMessage}</Text> : null}
      </Text>
      <Input
        placeholder="Enter Email Id"
        keyboardType="default"
        onChangeText={Setemail}
      />
      <PasswordInput placeholder="Enter Password" onChangeText={Setpassword} />
      <TextButton
        title="Sign In"
        onPress={() => Login(email, password, () => console.log("done"))}
      />
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
