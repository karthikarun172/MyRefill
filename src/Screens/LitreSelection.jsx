import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import AppHeader from '../Components/common/header';
import LiterCircle from "../../assets/LiterCircle.svg"
import Animated, { add, call, cond, eq, Extrapolate, interpolate, set, Value } from 'react-native-reanimated';
import { onGestureEvent } from 'react-native-redash';
import { PanGestureHandler, State } from 'react-native-gesture-handler';



const { width, height } = Dimensions.get("window")

const SLIDER_SIZE = width - 50;


const LitreSeletion = ({ navigation }) => {

    const state = new Value(State.UNDETERMINED)
    const translationX = new Value(0)
    const OffSetX = new Value(0)
    const gestureHandler = onGestureEvent({
        state,
        translationX
    })


    const addX = add(OffSetX, translationX);


    const transX = cond(eq(state, State.ACTIVE), addX, [
        cond(eq(state, State.END), call([], onDrop)),
        set(OffSetX, 0),
    ]);

    function onDrop() {
        console.log("initiate navigation");
    }


    const translateX = interpolate(transX, {
        inputRange: [0, 200],
        outputRange: [OffSetX, SLIDER_SIZE - 132],
        extrapolate: Extrapolate.CLAMP,
    });

    return (
        <>
            <View style={styles.LitreSeletionCont} >
                <AppHeader header={"Select and Pay"} navtoPofile={() => navigation.navigate("Profile")} nav={() => navigation.goBack()} />
                <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }} >

                    <View style={{ height: 350, top: 30, width: "70%", borderRadius: 20, backgroundColor: 'white', elevation: 12 }} >
                        <View style={{ flex: 1, justifyContent: "flex-start", alignItems: 'center', marginTop: 30 }} >
                            <LiterCircle width={190} height={190} />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', top: 50 }} >
                            <Text style={{ fontWeight: 'bold', fontSize: 17, color: '#08366A' }} > 90.4L Co2 | 52g Plastic</Text>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
                            <View style={{ width: 140, height: 40, borderRadius: 10, backgroundColor: '#0077F4' }} >
                                <View style={{ flexDirection: 'row', justifyContent: "space-evenly", alignContent: 'center', alignItems: 'center', flex: 1 }} >
                                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }} >-</Text>
                                    <Text style={{ backgroundColor: 'white', padding: 7, borderRadius: 10, fontWeight: 'bold', fontSize: 17 }} >0</Text>
                                    <Text style={{ fontWeight: 'bold', color: 'white', fontSize: 20 }}>+</Text>
                                </View>

                            </View>
                        </View>
                    </View>
                    <Text style={{ color: "white", top: 60, width: "60%", fontSize: 18, fontWeight: 'bold', textAlign: 'center', }} >yipeee ! You are fighting against plastic by Saving .</Text>
                </View>

            </View>
            <View style={styles.LitreSeletionContFooter} >
                <Text style={{ textAlign: 'center', top: 30, fontSize: 17, fontWeight: 'bold', width: 250, alignSelf: 'center' }} >Do you confirm the payment of Rs 8 for 1 litre ?</Text>
                <View style={{ width: "80%", backgroundColor: "#0077F4", height: 50, alignSelf: 'center', marginTop: 60, borderRadius: 30, justifyContent: 'center' }} >
                    <PanGestureHandler {...gestureHandler} >
                        <Animated.View style={{ height: 45, width: 100, backgroundColor: 'white', borderRadius: 30, alignItems: 'center', justifyContent: 'center', borderWidth: 2, borderColor: '#0077F4', marginLeft: 2, transform: [{ translateX }] }} >
                            <Text style={{ fontWeight: 'bold', color: "#0077F4" }} >Pay {">>"} </Text>
                        </Animated.View>
                    </PanGestureHandler>
                </View>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    LitreSeletionCont: {
        flex: 3,
        backgroundColor: '#00A2F9'
        , borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
        , flexDirection: "column"
    }
    , LitreSeletionContFooter: {
        flex: 1

    }
})
export default LitreSeletion;