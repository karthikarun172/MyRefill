import React, { useState } from "react";
import { View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "../Utils/Colors";
import { Entypo } from "@expo/vector-icons";

export function Input({ placeholder, onChangeText, keyboardType }) {
  return (
    <TextInput
      style={styles.TextIp}
      placeholder={placeholder}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
    />
  );
}

export function PasswordInput({ placeholder, onChangeText }) {
  const [eye, Seteye] = useState(true);
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 20,
      }}
    >
      <TextInput
        style={styles.TextIp}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={eye}
      />

      <Entypo
        onPress={eye === false ? () => Seteye(true) : () => Seteye(false)}
        name={eye === true ? "eye-with-line" : "eye"}
        style={{ marginTop: 30, right: 50 }}
        size={24}
        color="darkgrey"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  TextIp: {
    marginTop: 30,
    backgroundColor: Colors.TextInputBGColor,
    color: "black",
    width: "80%",
    height: 50,
    padding: 10,
    paddingLeft: 13,
    fontSize: 16,
    borderRadius: 15,
  },
});
