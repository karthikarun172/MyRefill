import React, { useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { coordinateData } from "../Utils/DummyDatas";

const { width, height } = Dimensions.get("window");

const Map = ({ lat, long }) => {
  const [Mark, SetMark] = useState(null);

  const pinColor = "#1b262c";

  return (
    <View>
      <MapView
        followUserLocation={true}
        scrollEnabled={false}
        showsUserLocation={true}
        style={{
          width: width,
          height: height / 1.3,
          ...StyleSheet.absoluteFillObject,
        }}
        initialRegion={{
          latitude: parseFloat(lat),
          longitude: parseFloat(long),
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      >
        {coordinateData.map((marker) => (
          <Marker
            onPress={() => SetMark(marker.name)}
            backgroundColor={pinColor}
            pinColor={pinColor}
            coordinate={{
              latitude: marker.latitude,
              longitude: marker.longitude,
            }}
            key={marker.name}
          >
            <Callout onPress={() => console.log("Asd")}>
              <Text>{marker.place}</Text>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    width: width,
    height: height / height,
    ...StyleSheet.absoluteFillObject,
  },
});

export default Map;
