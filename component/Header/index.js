import React from 'react';
import {View, Image, TouchableOpacity} from "react-native";
import {styles} from "./style";

const Header = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.5}>
            <Image style={styles.logo} source={require('../../assets/images/logo.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Filter")} activeOpacity={0.5}>
                <Image style={styles.menu} source={require('../../assets/images/menu.png')}/>
            </TouchableOpacity>

        </View>
    );
};

export default Header;