import React, { useState, useEffect, useRef } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Alert,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import * as Location from "expo-location";
import OpenMap from "react-native-open-maps";
import { getDistance, getPreciseDistance } from "geolib";
import _ from "lodash";
import { coordinateData } from "../Utils/DummyDatas";
import Map from "../Components/Map";
import Animated, {
  cond,
  eq,
  interpolate,
  set,
  useCode,
  SpringUtils,
} from "react-native-reanimated";
import {
  FlatList,
  State,
  TapGestureHandler,
  ScrollView,
} from "react-native-gesture-handler";
import { LOGIN_VIEW_HEIGHT, SCREEN_HEIGHT } from "../Utils/Constants";
import {
  onGestureEvent,
  opacity,
  withSpringTransition,
  withTimingTransition,
} from "react-native-redash";
import BackArrow from "../Components/BackArrow";
import OverlayBG from "../Components/OverlayBG";
import ExploreCard1 from "../Components/ExploreCard1";

const { width, height } = Dimensions.get("window");

const HomePage = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({
        enableHighAccuracy: true,
      });
      setLocation(location);
    })();
  }, []);

  let text = { lat: "0", long: "0" };

  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text.lat = JSON.stringify(location.coords.latitude);
    text.long = JSON.stringify(location.coords.longitude);
  }

  let handleDist = (lat, long) => {
    let dist = getPreciseDistance(
      {
        latitude: parseFloat(text.lat),
        longitude: parseFloat(text.long),
      },
      {
        latitude: lat,
        longitude: long,
      }
    );
    let d = dist / 1000;
    return d;
  };
  coordinateData.map((ar) => {
    return (ar.distance = handleDist(ar.latitude, ar.longitude));
  });
  let dat = _.sortBy(coordinateData, ["type", "distance"], ["name", "asc"]);

  const data = dat.find((m) => m.name === Mark);
  const [Mark, SetMark] = useState(null);

  const openA = () => {
    OpenMap.show({
      latitude: data.latitude,
      longitude: data.longitude,
    });
  };
  const scale = useRef(new Animated.Value(0));
  const scaleAnimation = withTimingTransition(scale.current);

  const gestureState = useRef(new Animated.Value(State.UNDETERMINED));
  const gestureHandler = onGestureEvent({ state: gestureState.current });

  const backArrowGestureState = useRef(new Animated.Value(State.UNDETERMINED));
  const backArrowGestureHandler = onGestureEvent({
    state: backArrowGestureState.current,
  });

  const isOpen = useRef(new Animated.Value(0));
  const isOpenAnimation = withSpringTransition(isOpen.current, {
    ...SpringUtils.makeDefaultConfig(),
    overshootClamping: true,
    damping: new Animated.Value(15),
  });

  const outerLoginY = interpolate(isOpenAnimation, {
    inputRange: [0, 1],
    outputRange: [SCREEN_HEIGHT - LOGIN_VIEW_HEIGHT, LOGIN_VIEW_HEIGHT / 2.5],
  });

  useCode(() =>
    cond(eq(gestureState.current, State.END), [
      cond(eq(isOpen.current, 0), set(isOpen.current, 1)),
    ])
  );
  const opacity = interpolate(isOpenAnimation, {
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const innerLoginY = interpolate(scaleAnimation, {
    inputRange: [0, 1],
    outputRange: [LOGIN_VIEW_HEIGHT, 0],
  });

  useCode(() => cond(eq(scale.current, 0), set(scale.current, 1)), []);

  useCode(
    () =>
      cond(eq(backArrowGestureState.current, State.END), [
        set(gestureState.current, State.UNDETERMINED),
        set(isOpen.current, 0),
      ]),
    [backArrowGestureHandler]
  );

  return (
    <View style={styles.container}>
      {text.lat && text.long === "0" ? (
        <ActivityIndicator
          size="large"
          color="blue"
          style={{
            flex: 1,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
          }}
        />
      ) : (
          <View>
            <View>
              <Map lat={text.lat} long={text.long} />
            </View>
            <View>
              <BackArrow
                nav={() => navigation.navigate("Profile")}
                isOpenAnimation={isOpenAnimation}
                header={"Explore"}
                gestureHandler={{ ...backArrowGestureHandler }}
              />
              <Animated.View
                style={{
                  backgroundColor: "white",
                  ...StyleSheet.absoluteFill,
                  transform: [{ translateY: outerLoginY }],
                }}
              >
                <OverlayBG isOpenAnimation={isOpenAnimation} />
                <TapGestureHandler {...gestureHandler}>
                  <Animated.View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      height: SCREEN_HEIGHT,
                      transform: [{ translateY: innerLoginY }],
                      backgroundColor: "#00A2F9",
                      position: "absolute",
                      width: "100%",
                      borderTopEndRadius: 40,
                      borderTopStartRadius: 40,
                      // backgroundColor: 'yellow'
                    }}
                  >
                    <Animated.View style={{ top: 50 }}>
                      <Animated.View
                        style={{
                          ...styles.bar,
                          opacity,
                        }}
                      />
                      <ScrollView showsVerticalScrollIndicator={false}>
                        <FlatList
                          data={coordinateData}
                          keyExtractor={(item) => item.name}
                          renderItem={({ item }) => {
                            return (
                              <ExploreCard1 onpress={() => navigation.navigate("Shop")} name={item.place} />
                            );
                          }}
                        />
                      </ScrollView>
                    </Animated.View>
                  </Animated.View>
                </TapGestureHandler>
              </Animated.View>
            </View>
          </View>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mapStyle: {
    width: width,
    height: height,
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    padding: 10,
    backgroundColor: "#a6a6a6",
    margin: 10,
    width: "50%",
    alignItems: "center",
  },
  bar: {
    height: 5,
    width: 70,
    backgroundColor: 'white',
    alignSelf: 'center'
    , bottom: 25
    , borderRadius: 20
  }
});
export default HomePage;
