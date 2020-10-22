import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import ReportHeader from '../Components/ReportHeader';

const { width, height } = Dimensions.get("window")

const Report = ({ navigation }) => {
    return (
        <View style={styles.ReportContainer} >
            <ReportHeader nav={() => navigation.goBack()} navtoPofile={() => navigation.navigate("Profile")} header={"Report"} />
            <View style={{ top: height / 3 }} >
                <TextInput placeholder={"Mention"} placeholderTextColor={"grey"} style={{ height: 100, width: 200, alignSelf: 'center', textAlign: 'center', fontSize: 20, borderBottomWidth: 2, borderBottomColor: 'lightgrey', }} />
                <TouchableOpacity style={{ width: 200, height: 50, backgroundColor: "#00599E", borderRadius: 8, elevation: 10, alignSelf: "center", marginTop: 50 }} >
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 20, fontWeight: 'bold', flex: 1, marginTop: 10 }} >Report</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    ReportContainer: {
        flex: 1

    }
})
export default Report;