import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Input, PasswordInput } from '../Components/Input';
import { Colors } from '../Utils/Colors';
import { TextButton } from '../Components/Buttons';

const { width, height } = Dimensions.get("window");


const ChangePassword = ({ navigation }) => {
    return (
        <KeyboardAwareScrollView style={{ flex: 1 }}>
            <View style={{
                width: "100%",
                alignItems: "center",
                backgroundColor: "white",
                height: height + 100,
                paddingTop: 50,
            }} >
                <Text
                    onPress={() => navigation.goBack()}
                    style={{ color: Colors.ButtonColor, marginTop: 30 }}
                >
                    {`<`} Back{" "}
                </Text>
                <PasswordInput placeholder={"Enter old Password"} />
                <PasswordInput placeholder={"Enter New Password"} />
                <PasswordInput placeholder={"Retype old Password"} />
                <TextButton title={"Change password"} />
            </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    PasswordChangeCont: {
        flex: 1
    }
})

export default ChangePassword;