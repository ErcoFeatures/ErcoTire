import React from 'react';
import {View, Text, ImageBackground} from 'react-native'
import {styles} from "./style";
import StyledButton from "../StyledButton";
const CartItem = (props) => {
    const {name, tagLine, image, taglineCTA} = props
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image}
                             style={styles.image}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{tagLine} {' '}
                    <Text style={styles.subTitleCTA}>{taglineCTA}</Text>
                </Text>

            </View>
            <View style={styles.buttonContainer}>
            <StyledButton type='primary' content="Custom Order"
                onPress={() =>{
                    console.warn("custom order was pressed")
                }}
            />
            </View>
        </View>
    );
};

export default CartItem;