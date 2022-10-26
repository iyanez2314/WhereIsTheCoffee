import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from './screens/HomeScreen';


export default function RootNavigation(){
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initalRoute="HomeScreen" screenOptions={screenOptions}>
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
;}
