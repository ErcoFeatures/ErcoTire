import React from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, Image} from 'react-native';
import {Ionicons} from '@expo/vector-icons'
import CarList from "../component/CarList";

const HomeScreen = ({navigation}) => {
    return (
        <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>

            <View style={styles.headerContainer}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Image style={styles.logo} source={require('../assets/images/logo.png')}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Filter")} activeOpacity={0.5}>
                    <Ionicons style={styles.menu} name="menu" size={24} color="#2B68E6"/>
                </TouchableOpacity>
            </View>
            <CarList/>
        </KeyboardAvoidingView>
    );
};

export default HomeScreen;
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: 'center',
        position: 'relative'
    },
    headerContainer: {
        position: 'absolute',
        top: 0,
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        position: 'absolute',
        left: 0,
        marginLeft: 10,
        top: -15
    },
    menu: {
        position: 'absolute',
        right: 0,
        top:25,
        color:"#4F5155",
        marginRight:10
    }
});
