import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import BackArrow from '../Components/BackArrow';
import { TextButton, TextButton1, TextButtonWhite } from '../Components/Buttons';
import AppHeader from '../Components/common/header';
import ExploreCard1 from '../Components/ExploreCard1';
import Circle1 from "../../assets/circle13.svg"
import Circle2 from "../../assets/circle12.svg"
import { Context as CityContext } from "../Context/CityContext"
import { Context as StationContext } from "../Context/StationContext"

const { width, height } = Dimensions.get("window")

const ShopPortal = ({ navigation }) => {
    const { state: st, Get_Cities } = useContext(CityContext)
    const { state: station, Get_Stations } = useContext(StationContext)

    useEffect(() => {
        Get_Cities()
        Get_Stations()
    }, [])

    // console.log(st.data.map(s => s.name))
    console.log(station.data)

    return (
        <>
            <View style={styles.shopContainer} >
                <AppHeader header={"MyReFill"} navtoPofile={() => navigation.navigate("Profile")} nav={() => navigation.goBack()} />
                <View style={styles.Images}>
                    <Circle1 width={150} height={150} />
                    <Circle2 width={150} height={150} />
                </View>
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }} >'Burger King' have helped us save</Text>
                <View style={styles.cardPlace} >
                    <ExploreCard1 onpress={() => navigation.navigate("LitreSelection")} />
                    <TextButtonWhite onPress={() => navigation.navigate("LitreSelection")} title={"Select Quantity"} />
                    <Text onPress={() => navigation.navigate("Report")} style={styles.Report} >Report</Text>
                </View>
            </View>
            <View style={styles.address}>
                <Text style={{ width: 150, textAlign: 'center', fontWeight: 'bold', color: '#08366A', }} >No 201 , Arcot Road
                virugambakkam
chennai-600092</Text>
                <TextButton1 title="Get Direction >>" />


            </View>
        </>
    );
}

const styles = StyleSheet.create({
    shopContainer: {
        flex: 3,
        backgroundColor: '#00A2F9'
        , borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
        , flexDirection: "column"
    },
    address: {
        flex: 1
        , flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
    },
    Images: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: 'center',
        top: 40
    },
    cardPlace: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        flex: 1,
        bottom: 10
        ,
    },
    Report: {
        color: '#F32020'
        , fontWeight: "bold"
        , top: 20

    }
})

export default ShopPortal;