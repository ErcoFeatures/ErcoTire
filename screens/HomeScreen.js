import React, {useEffect, useLayoutEffect, useState} from 'react';
import {StyleSheet, Text, View, KeyboardAvoidingView, TouchableOpacity, Image} from 'react-native';
import CarList from "../component/CarList";
import data from  '../cars'
import Header from "../component/Header";

const HomeScreen = ({navigation, route}) => {
    const [tires , setTires] = useState(data);
    const enterFilter = () => {
        navigation.navigate("Filter")
    };

    useEffect(()=>{
        if(route.params){
            const filteredData =  data.filter(tire => tire.status = route.params.id);
            setTires(filteredData);
        }


    }, [route])
    return (
        <KeyboardAvoidingView behavior="padding" enabled style={styles.container}>
            <Header
                enterFilter={enterFilter}
            />
            <CarList tires={tires}/>
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
    }
});
