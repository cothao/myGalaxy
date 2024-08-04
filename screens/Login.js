import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image,Alert, AppState  } from 'react-native';
import { styles } from '../style/loginStyle';
import People from '../components/People';
import { supabase } from '../lib/supabase';
import { useState, useEffect } from 'react';

AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh()
  } else {
    supabase.auth.stopAutoRefresh()
  }
})


export default function Login({props, navigation})
{

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {

    const fetchEventData = async () =>
    {
      const { data, error } = await supabase
      .from("Events")
      .select('*')

      if (error) {
        console.error('Error fetching data:', error)
      }
      else
      {
        setEventData(data);
      }

    setLoading(false)
    }

    const fetchData = async () => {
      const { data, error } = await supabase
        .from("Users")
        .select('*')

      if (error) {
        console.error('Error fetching data:', error)
      }
      else
      {
        setUserData(data);
      }

      setLoading(false)
    }

    fetchData()
  }, [])
  
  async function signInWithEmail() 
  {
    setLoading(true)
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error)
    {
      Alert.alert(error.message);
      setLoading(false);
    }
    else
    {
      const test = userData.find((user) => user.id == data.user.id);
      setCurrentUser(test);
      navigation.navigate("Home");
    }
  }

    return (
        <View style={styles.container}>
        <View style = {styles.mainContainer}>
          <Image source = {{url: "https://reactnative.dev/img/tiny_logo.png"}}/>
          <TextInput 
          placeholder='Email' 
          style = {styles.textInput}
          label = "Email"
          onChangeText={(text) => setEmail(text)}
          value = {email} 
          ></TextInput>
          <TextInput 
          placeholder='Password' 
          style = {styles.textInput}
          onChangeText={(text) => setPassword(text)}
          value = {password}
          label = "Password"
          secureTextEntry = {true}
          ></TextInput>
          <Button 
            style = {{marginTop: 100}}
            title='Login'
            disabled = {loading}
            onPress={() => {
              signInWithEmail()
              // navigation.navigate("Home");
              }}
            ></Button>
          {/* <StatusBar style="auto" /> */}
        </View>
        </View>
    )
}