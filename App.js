import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import FilterScreen from "./screens/FilterScreen";
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
