import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FontAwesome5, Ionicons as Icon } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';


const AppHeader = ({ header, nav, navtoPofile }) => {
    return (
        <View style={{ ...styles.backArrow }} >
            <View>
                <Icon name="md-arrow-back" size={25} color={"white"} onPress={nav} />
            </View>
            <Text style={styles.headerText} >
                {header}
            </Text>
            <TouchableOpacity onPress={navtoPofile} >
                <FontAwesome5 name="bars" size={24} color="white" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    backArrow: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-around",
        position: "absolute",
        width: "100%",
        top: 50,
        zIndex: 100,
    },
    headerText: { color: "white", fontSize: 25, fontWeight: "bold" }
});


export default AppHeader;