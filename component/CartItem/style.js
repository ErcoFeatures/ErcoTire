import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create(
    {

        carContainer: {
            width: '100%',
            alignItems: "center",
            height: Dimensions.get('window').height,
            position: 'relative'
        },
        titles: {
            position:"absolute",
            top: "65%",
            width: "100%",
            alignItems: "center"
        },
        subTitle: {
            fontSize: 16,
            color: '#5c5e62'

        },
        title: {
            fontSize: 40,
            fontWeight: '500'
        }

        ,
        image: {
            width: 250,
            height: 350,
            position: "absolute",
            top:"10%"
        },
        buttonContainer: {
            position: 'absolute',
            bottom: 80,
            width: '100%',
        },
        subTitleCTA: {
            textDecorationLine: 'underline'
        }

    });