import React from "react";
import Animated, { interpolate } from "react-native-reanimated";
import { Ionicons as Icon } from "@expo/vector-icons";
import { Text, StyleSheet, View } from "react-native";
import { opacity } from "react-native-redash";
import { TapGestureHandler, TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome5 } from "@expo/vector-icons";
const BackArrow = ({ isOpenAnimation, gestureHandler, header, nav }) => {
  const opacity = interpolate(isOpenAnimation, {
    inputRange: [0, 0.7, 1],
    outputRange: [0, 0, 1],
  });

  return (
    <Animated.View style={{ ...styles.backArrow, opacity }}>
      <TapGestureHandler {...gestureHandler}>
        <Animated.View style={{ opacity }}>
          <Icon name="md-arrow-back" size={25} color={"white"} />
        </Animated.View>
      </TapGestureHandler>
      <Text style={{ color: "white", fontSize: 25, fontWeight: "bold", }}>
        {header}
      </Text>
      <TouchableOpacity onPress={nav} >
        <FontAwesome5 name="bars" size={24} color="white" />
      </TouchableOpacity>
    </Animated.View>

  );
};
const styles = StyleSheet.create({
  backArrow: {
    flexDirection: "row",
    justifyContent: "space-around",
    position: "absolute",
    width: "100%",
    top: 60,
    zIndex: 100,
    paddingBottom: 20,
    // backgroundColor: 'red'



  },
  HeaderCont: {

  }
});

export default BackArrow;
