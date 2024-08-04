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

export default function Navbar(props)
{

    console.log("Navbar", props.currentUser)

    if (props.currentPage == "Login")
    {
      const HomeComponent = (props) => <Home {...props} currentUser = {props.currentUser}/>;

        return (
            <Tab.Navigator
                  tabBarOptions=
                    {{
        style: {
          backgroundColor: '#ff0000', // Background color of tab bar
          borderRadius: 10,
        },
        }}
            >
            <Tab.Screen style = {styles.buttons} name = "Login" component={Login}></Tab.Screen>
            <Tab.Screen name = "Home" component={HomeComponent}></Tab.Screen>
            <Tab.Screen  name = "Settings" component={Settings}></Tab.Screen>
      </Tab.Navigator>
        )
    }
    else
    {
        const HomeComponent = <Home currentUser = {props.currentUser}/>;
        return (
        <Tab.Navigator>
            <Tab.Screen  name = "Login" component={Login}></Tab.Screen>
            <Tab.Screen  name = "Home" component={HomeComponent}></Tab.Screen>
            <Tab.Screen  name = "Settings" component={Settings}></Tab.Screen>
      </Tab.Navigator>
    
        )

    }


}