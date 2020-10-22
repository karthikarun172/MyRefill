import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from "react-native";
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

export function ProfileInput({ placeholder, onChangeText, keyboardType, title }) {
  return (
    <View style={styles.ProfileIp} >
      <Text style={{ fontWeight: 'bold', fontSize: 18 }} >{title}</Text>
      <TextInput
        style={{ borderWidth: 0.4, borderColor: "black", width: "70%", height: 40, borderRadius: 3, backgroundColor: 'lightgrey', padding: 10, }}
        placeholder={placeholder}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholderTextColor={"grey"}
      />
    </View>
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
  ProfileIp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
    , marginTop: 20,

  }
});
