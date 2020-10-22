import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Animated from "react-native-reanimated";

const ExploreCard1 = ({ name, onpress }) => {
  return (
    <TouchableOpacity onPress={onpress} style={{
      height: 150,
      width: 350,
      backgroundColor: "white",
      borderRadius: 20,
      elevation: 15,
      marginBottom: 20,
    }} >
      <Animated.View
      >
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-around",
            height: "100%",
            width: "100%",
            marginLeft: 20,
          }}
        >
          <Text
            style={{
              fontSize: 20,
              marginTop: 25,
              color: "#08366A",
            }}
          >
            Cafe
        </Text>
          <Text
            style={{
              fontSize: 25,
              bottom: 10,
              fontWeight: "bold",
              color: "#08366A",
            }}
          >
            {name}
          </Text>
          <Text style={{ bottom: 25, color: "#08366A" }}>closed.Open at 9</Text>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

export default ExploreCard1;
