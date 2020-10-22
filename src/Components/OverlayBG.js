import React from "react";
import { Text } from "react-native";
import Animated, { interpolate } from "react-native-reanimated";

import { LOGIN_VIEW_HEIGHT, SCREEN_HEIGHT } from "../Utils/Constants";

const OverlayBG = ({ isOpenAnimation }) => {
  const translateY = interpolate(isOpenAnimation, {
    inputRange: [0, 1],
    outputRange: [SCREEN_HEIGHT - LOGIN_VIEW_HEIGHT, -LOGIN_VIEW_HEIGHT / 2],
  });
  return (
    <Animated.View
      style={{
        height: LOGIN_VIEW_HEIGHT,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        backgroundColor: "#00A2F9",
        top: 0,
        left: 0,
        right: 0,
        transform: [{ translateY }],
      }}
    ></Animated.View>
  );
};

export default OverlayBG;
