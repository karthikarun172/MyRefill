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

import Navigation from "./src/Navigations/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
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
