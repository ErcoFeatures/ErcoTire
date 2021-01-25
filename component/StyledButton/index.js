import React from 'react';
import {View, Text, Pressable} from "react-native";
import {styles} from "./style.js";


const StyledButton = (props) => {
    const {type, content, onPress}= props;
    const backgroundColor = type==='primary' ? '#171A20CC' : '#FFFFFFA6';
    const textColor = type !=='primary' ? '#171A20CC' : '#FFFFFFA6';
    return (
        <View>
            <Pressable
                style={[styles.button, {backgroundColor:backgroundColor}]}
                onPress={onPress}
            >
                <Text style={[styles.text, {color:textColor}]}> {content}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;