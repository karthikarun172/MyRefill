import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  TextButton,
  IconTextButton,
  TextButtonWhite,
} from "./src/Components/Buttons";
import { Input, PasswordInput } from "./src/Components/Input";
import ExploreCard from "./src/Components/ExploreCard";
import SignInOption from "./src/Screens/LogIn_Pages/SignIn_Option";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as RegisterProvider } from "./src/Context/RegisterContext";
import { Provider as CityProvider } from "./src/Context/CityContext";
import { Provider as StationProvider } from "./src/Context/StationContext";


import Navigation from "./src/Navigations/Navigation";

export default function App() {
  return (
    <StationProvider>
      <CityProvider>
        <RegisterProvider>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </RegisterProvider>
      </CityProvider>
    </StationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00A2F9",
    alignItems: "center",
    justifyContent: "center",
  },
});
