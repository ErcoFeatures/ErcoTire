import React from 'react';
import Car from "./cars";
import CartItem from "../CartItem";
import {StatusBar} from "expo-status-bar";
import {View, FlatList} from "react-native";
import {styles} from "./style";
import cars from  './cars'
const CarList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                renderItem={({item}, id) => <CartItem  key={id} {...item}/> }
                />
            <StatusBar style="auto"/>
        </View>
    );
};

export default CarList;