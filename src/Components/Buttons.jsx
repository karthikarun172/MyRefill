import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
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

export function TextButtonWhite({ title }) {
  return (
    <View style={styles.ButtonContWhite}>
      <Text style={styles.ButtonTextWhite}>{title}</Text>
    </View>
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
    marginTop: 30,
    width: "80%",
    backgroundColor: Colors.ButtonColor,
    borderRadius: 25,
    elevation: 4,
  },
  ButtonContWhite: {
    marginTop: 20,
    width: "80%",
    backgroundColor: Colors.ButtonColor1,
    borderRadius: 25,
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
    height: 50,
    fontSize: 18,
  },
});
