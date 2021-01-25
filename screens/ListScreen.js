import React from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView, ImageBackground} from 'react-native';
import {StatusBar} from 'expo-status-bar';
import CartItem from "../component/CartItem";
import Car from '../component/CarList/cars'
import CarList from "../component/CarList";
import Header from "../component/Header";

const ListScreen = () => {
    return (
        <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
            <Header/>
            <CarList/>
        </KeyboardAvoidingView>
    );
};

export default ListScreen;
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: 'center',
        position:'relative'
    }
});
