import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Messages()
{
    return (
        <View 
        style = {{margin: 20}}
        >
            <View style={{display:"flex", flexDirection:"row", gap: wp("49.85%")}}>
            <Text style={{fontSize: wp("6%")}}>Messages</Text>
            <Image style = 
                {{
                    width: wp("9%"),
                    height: wp("9%"),
                    borderRadius: 100,
                }}
                source={require("../assets/haylee.jpg")}

            />

            </View>
            <View style = {{display: "flex", flexDirection: "row"}}>
                <TouchableOpacity
                    style={styles.ScreenButton}
                    onPress={() => {}}
                    underlayColor='#000000'>
                    <Text style={styles.ButtonText}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.ScreenButton}
                    onPress={() => {}}
                    underlayColor='#000000'>
                    <Text style={styles.ButtonText}>Keyword</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.ScreenButton}
                    onPress={() => {}}
                    underlayColor='#000000'>
                    <Text style={styles.ButtonText}>Support</Text>
                </TouchableOpacity>

            </View>
            <View style = {{display: "flex", alignItems: "center", justifyContent: "center", top: wp("50%")}}>
            <Image style = 
                {{
                    width: wp("9%"),
                    height: wp("9%"),
                    borderRadius: 100,
                }}
                source={require("../assets/haylee.jpg")}

            />
            <Text style = {{opacity: 1., marginTop: wp("5%")}}>You don't have any messages.</Text>
            <Text style = {{opacity: .5, width: 300, textAlign: "center", marginTop: wp("2%")}}>When you recieve a new message, it will appear here.</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        ScreenButton:{
            marginRight:10,
            marginLeft:0,
           marginTop:10,
            paddingTop:wp("2.0%"),
            paddingBottom:wp("2.0%"),
            backgroundColor:'#E0E0E0',
            borderRadius:20,
            // borderWidth: 1,
            // borderColor: '#fff'
          },
          ButtonText:{
              color:'#000000',
              textAlign:'center',
              paddingLeft : wp("3.5%"),
              paddingRight : wp("3.5%")
          }
    }
)