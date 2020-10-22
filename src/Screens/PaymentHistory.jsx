import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import Transaction from "../../assets/Transaction.svg"
import TransClock from "../../assets/TransClock.svg"
import { Ionicons as Icon } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native';

const { width, height } = Dimensions.get("window")

const PaymentHistory = ({ navigation }) => {
    return (
        <>
            <View style={styles.viewProfileCont} >
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 60, left: 30, zIndex: 100 }} >
                    <Icon name="md-arrow-back" size={25} color={"white"} />
                </TouchableOpacity>

                <View style={{}} >
                    <Transaction width={width} height={height} />
                </View>
                <View style={{ backgroundColor: 'white', height: 150, top: height / 3.2, width: 300, position: 'absolute', alignSelf: 'center', borderRadius: 20 }} >
                    <Text style={{ textAlign: 'center', top: 20, fontSize: 20, fontWeight: 'bold' }} >Last Transaction</Text>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly', width: "100%", top: 10 }} >

                        <View >
                            <Text style={{ textAlign: 'center', top: 30, fontSize: 17 }} >Blind Chemistry</Text>
                            <Text style={{ textAlign: 'center', top: 30, fontSize: 17 }} >1.5litre</Text>
                        </View>
                        <View>
                            <Text style={{ textAlign: 'center', top: 30, fontSize: 17 }} > 28/06</Text>
                            <Text style={{ textAlign: 'center', top: 30, fontSize: 17 }} >21:00</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.TransactionList} >
                <View style={{ backgroundColor: "white", bottom: 30, width, height, borderRadius: 40, flexDirection: 'row', justifyContent: "space-evenly", }} >
                    <Text style={{ marginLeft: 50, top: 50, fontWeight: 'bold', fontSize: 20 }} >Transactions</Text>
                    <View style={{ marginLeft: 50, top: 55, }} >
                        <TransClock width={20} height={20} />
                    </View>
                </View>


            </View>
        </>
    );
}

const styles = StyleSheet.create({
    viewProfileCont: {
        flex: 2,
        backgroundColor: '#00A2F9'
    },
    TransactionList: {
        flex: 1,


    }
})

export default PaymentHistory;