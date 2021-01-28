import React from 'react';
import CartItem from "../CartItem";
import {StatusBar} from "expo-status-bar";
import {View, FlatList, Dimensions} from "react-native";
import {styles} from "./style";
import cars from  './cars'
const CarList = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <CartItem  {...item}/> }
                keyExtractor={(item, id) => id.toString()}
                snapToAlignment='start'
                decelerationRate='fast'
                snapToInterval={Dimensions.get('window').height}
                />
            <StatusBar style="auto"/>
        </View>
    );
};

export default CarList;