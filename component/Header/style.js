import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({

    container: {
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
        top: 20,
        color: "#4F5155",
        marginRight: 10
    }
})