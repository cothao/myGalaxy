import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { styles } from '../style/navStyle';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import Home from '../screens/Home';
import Settings from '../screens/Settings';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Navbar()
{

    const style = 
    {
        display: "hidden"
    }

    return (
    <Tab.Navigator 
        screenOptions={({route}) =>
        {
            // if (route.name == "Login")
            // {

            // }
        }}
    >
        <Tab.Screen  name = "Login" component={Login}></Tab.Screen>
        <Tab.Screen  name = "Home" component={Home}></Tab.Screen>
        <Tab.Screen  name = "Settings" component={Settings}></Tab.Screen>
  </Tab.Navigator>

    )

}