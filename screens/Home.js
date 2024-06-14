import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';
import Navbar from '../components/Navbar';
// import { styles } from '../style/homeStyle';

const Tab = createBottomTabNavigator();

export default function Home()
{
    return (
            <Text>Hello</Text>
    )
}