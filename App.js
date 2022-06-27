import React from 'react';
//import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from '@react-navigation/native';
//import { Ionicons } from '@expo/vector-icons';
import Home from './Home';
import Menu from './Menu';
import GMN from './GMN';
import GYN from './GYN';
import PPT from './PPT';
import Proxi from './Proxi';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root(){
  return(
    <Drawer.Navigator>
        <Drawer.Screen name="Inicio" component={Home}/>
        <Drawer.Screen name="Menu" component={Menu}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="GMN" component={GMN}/>
        <Stack.Screen name="GYN" component={GYN}/>
        <Stack.Screen name="PPT" component={PPT}/>
        <Stack.Screen name="Proxi" component={Proxi}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}