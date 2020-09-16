import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ExploreCard = ({ ShopName, Time, distance }) => {
  return (
    <View style={styles.ExploreCont}>
      <View style={styles.ExploreLeft}>
        <Text style={styles.ExploreLeftText1}>cafe</Text>
        <Text style={styles.ExploreLeftText2}>{ShopName}</Text>
        <Text style={styles.ExploreLeftText3}>Closed open at {Time}</Text>
      </View>
      <View style={styles.ExploreRight}>
        <Text style={styles.ExploreRightText}>{distance}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ExploreCont: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    elevation: 4,
    borderRadius: 25,
    width: "90%",
    height: 130,
  },
  ExploreLeft: {
    flexDirection: "column",
    justifyContent: "center",
  },
  ExploreRight: {
    alignSelf: "center",
    borderWidth: 2,
    padding: 5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 25,
    borderColor: "#00A2F9",
  },
  ExploreRightText: {
    color: "#00A2F9",
    fontWeight: "bold",
  },
  ExploreLeftText1: {
    fontSize: 16,
    fontWeight: "normal",
    textAlign: "left",
    marginBottom: 5,
  },
  ExploreLeftText2: {
    fontSize: 25,
    textAlign: "left",
  },
  ExploreLeftText3: {
    color: "grey",
    top: 5,
  },
});

export default ExploreCard;
