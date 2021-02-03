import React from 'react';
import {View, Image, TouchableOpacity} from "react-native";
import {styles} from "./style";
import {Ionicons} from '@expo/vector-icons'

const Header = ({enterFilter}) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.5}>
                <Image style={styles.logo} source={require('../../assets/images/logo.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={enterFilter} activeOpacity={0.5}>
                <Ionicons style={styles.menu} name="menu" size={30} color="#2B68E6"/>
            </TouchableOpacity>
        </View>
    );
};

export default Header;
