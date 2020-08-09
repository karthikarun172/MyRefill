import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInOption from "../Screens/LogIn_Pages/SignIn_Option";
import SignIn from "../Screens/LogIn_Pages/signIn";
import SignUp from "../Screens/LogIn_Pages/signUp";
import ForgotPassword from "../Screens/LogIn_Pages/ForgotPassword";
import ResetPassword from "../Screens/LogIn_Pages/ResetPassword";
import { StatusBar } from "expo-status-bar";

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator initialRouteName="SignInOptions" headerMode={null}>
      <Stack.Screen name="SignInOptions" component={SignInOption} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default Navigation;
