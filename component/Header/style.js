import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
        container: {
            position:'absolute',
            top:50,
            zIndex:100,
            flexDirection:'row',
            justifyContent:'space-between',
            width: '100%',
            paddingHorizontal:20
        },
        logo: {
            width:100,
            height:100,
            resizeMode:'contain',
            position:'absolute',
            left:0,
            marginLeft :10,
            top:-15
        },
        menu: {
            width: 25,
            height: 25,
            resizeMode:'contain',
            position:'absolute',
            right:0,
            margin: 15
        }
    }
)