import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create(
    {

        carContainer: {
            width: '100%',
            height: Dimensions.get('window').height,
            position:'relative'
        },
        titles: {
            marginTop: "30%",
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
            width: '100%',
            height: '100%',
            resizeMode: 'cover',
            position: 'absolute',
            left: 0
        },
        buttonContainer:{
            position:'absolute',
            bottom:80,
            width:'100%',
        },
        subTitleCTA:{
            textDecorationLine:'underline'
        }

    });