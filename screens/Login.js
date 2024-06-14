import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { styles } from '../style/loginStyle';

export default function Login({navigation})
{
    return (
        <View style={styles.container}>
        <View style = {styles.mainContainer}>
          <Image source = {{url: "https://reactnative.dev/img/tiny_logo.png"}}/>
          <TextInput placeholder='Username' style = {styles.textInput}></TextInput>
          <TextInput placeholder='Password' style = {styles.textInput}></TextInput>
          <Button 
            style = {{marginTop: 100}}
            title='Login'
            onPress={() => navigation.navigate("Home")}
            ></Button>
          {/* <StatusBar style="auto" /> */}
        </View>
        </View>
    )
}