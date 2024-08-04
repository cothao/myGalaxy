import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import Login from './screens/Login';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Navbar from './components/Navbar';
import React, {useState} from "react"
import { styles } from './style/navStyle';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {

  const [currentPage, setCurrentPage] = useState("Login");
  const [currentUser, setCurrentUser] = useState({});
  return (
    <NavigationContainer>
      <Navbar currentUser = {currentUser} currentPage = {currentPage}/>
    </NavigationContainer>
  );
}