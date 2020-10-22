import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignInOption from "../Screens/LogIn_Pages/SignIn_Option";
import SignIn from "../Screens/LogIn_Pages/signIn";
import SignUp from "../Screens/LogIn_Pages/signUp";
import ForgotPassword from "../Screens/LogIn_Pages/ForgotPassword";
import ResetPassword from "../Screens/LogIn_Pages/ResetPassword";
import { StatusBar } from "expo-status-bar";
import { Context as RegisterContext } from "../Context/RegisterContext";
import HomePage from "../Screens/Home";
import ShopPortal from "../Screens/ShopPortal";
import LitreSeletion from "../Screens/LitreSelection";
import Profile from "../Screens/Profile";
import ViewProfile from '../Screens/ViewProfile';
import PaymentHistory from '../Screens/PaymentHistory';
import ChangePassword from "../Screens/ChangePassword";
import Report from "../Screens/Report";

const Stack = createStackNavigator();

const Navigation = () => {
  const { state } = useContext(RegisterContext);
  return (
    <>
      {state.token == null ? (
        <Stack.Navigator initialRouteName="SignInOptions" headerMode={null}>
          <Stack.Screen name="SignInOptions" component={SignInOption} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
        </Stack.Navigator>
      ) : (
          <Stack.Navigator initialRouteName="Home" headerMode={null}>
            <Stack.Screen name="Home" component={HomePage} />
            <Stack.Screen name="Shop" component={ShopPortal} />
            <Stack.Screen name="LitreSelection" component={LitreSeletion} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ViewProfile" component={ViewProfile} />
            <Stack.Screen name="PaymentHistory" component={PaymentHistory} />
            <Stack.Screen name="ChangePassword" component={ChangePassword} />
            <Stack.Screen name="Report" component={Report} />

          </Stack.Navigator>
        )}
    </>
  );
};

export default Navigation;
