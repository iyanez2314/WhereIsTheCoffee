import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from './screens/HomeScreen';
import ResturantDetail from "./screens/ResturantDetail";
import Login from "./screens/Login";


export default function RootNavigation(){
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="ResturantDetail" component={ResturantDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};
