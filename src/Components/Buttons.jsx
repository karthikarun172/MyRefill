import React from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity } from "react-native";
import { Colors } from "../Utils/Colors";
import { AntDesign } from "@expo/vector-icons";

export function TextButton({ title, onPress }) {
  return (
    <View style={styles.ButtonCont}>
      <Text onPress={onPress} style={styles.ButtonText}>
        {title}
      </Text>
    </View>
  );
}
export function TextButton1({ title, onPress }) {
  return (
    <View style={{ ...styles.ButtonCont1 }}>
      <Text onPress={onPress} style={{ ...styles.ButtonText, fontWeight: 'bold' }}>
        {title}
      </Text>
    </View>
  );
}
export function TextButtonWhite({ title, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...styles.ButtonContWhite }}>
      <Text style={styles.ButtonTextWhite}>{title}</Text>
    </TouchableOpacity>
  );
}

export function IconTextButton({ title, Icon, color }) {
  return (
    <View style={styles.IconButtonCont}>
      <AntDesign name={Icon} size={24} color={color} />
      <Text style={styles.ButtonText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  ButtonCont: {
    width: "80%",
    marginTop: 30,
    backgroundColor: Colors.ButtonColor,
    borderRadius: 25,
    elevation: 4,
  },
  ButtonCont1: {
    width: "50%",
    marginTop: 30,
    backgroundColor: Colors.ButtonColor2,
    borderRadius: 15,
    elevation: 4,
  },
  ButtonContWhite: {
    width: "80%",
    backgroundColor: Colors.ButtonColor1,
    borderRadius: 15,
    elevation: 4,

  },
  IconButtonCont: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: Colors.ButtonColor,
    width: "80%",
    borderRadius: 25,
    elevation: 4,
  },
  ButtonText: {
    color: Colors.TextColor,
    textAlign: "center",
    textAlignVertical: "center",
    top: Platform.OS === "ios" ? 12 : 0,
    height: 50,
    fontSize: 18,
  },
  ButtonTextWhite: {
    color: Colors.TextColor1,
    textAlign: "center",
    textAlignVertical: "center",
    height: 40,
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5, paddingBottom: 5,
    fontWeight: 'bold'
  },
});
