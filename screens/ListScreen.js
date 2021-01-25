import React from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView, ImageBackground} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CartItem from "../component/CartItem";

const ListScreen = () => {
    return (
        <KeyboardAvoidingView  behavior="padding" enabled style={styles.container}>
            <View style={styles.container}>
               <CartItem title='Model S' subTitle="Starting at $69.429"/>
                <StatusBar style="auto"/>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({

    container : {
        flex:1,
        backgroundColor:"white",
        justifyContent:'center'
    }
});
export default ListScreen;