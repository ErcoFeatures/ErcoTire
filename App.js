import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import FilterScreen from "./screens/FilterScreen";
// import paydunya from 'paydunya'

// const paydunyaSetup = new paydunya.Setup({
//     masterKey: process.env.PAYDUNYA_MASTER_KEY,
//     privateKey: process.env.PAYDUNYA_PRIVATE_KEY,
//     publicKey: process.env.PAYDUNYA_PUBLIC_KEY,
//     token: process.env.PAYDUNYA_TOKEN,
//     mode: 'test' // optional. use in sandbox mode.
// });
//
// const store = new paydunya.Store({
//     name: 'Erco Tire', // only name is required
//     tagline: "Vente de Pneu de voiture provenant du Canada",
//     phoneNumber: 'Whatsapp: +1 418 265 6202',
//     postalAddress: 'Dakar Plateau - Etablissement kheweul',
//     logoURL: 'http://www.chez-sandra.sn/logo.png'
// });
export default function App() {
  const Stack  = createStackNavigator();
    const globalScreenOptions ={
        headerStyle : {backgroundColor:  "#4F5155"},
        headerTitleStyle:{color : "white"},
        headerTinColor:"white"

    };


  return (
      <NavigationContainer>
        <Stack.Navigator
            initialRouteName={"Home"}
            screenOptions={globalScreenOptions}
        >
          <Stack.Screen name="Home" component={HomeScreen}/>
          <Stack.Screen name="Filter" component={FilterScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      position:'relative'
  },
});
