import People from "./People"
import { Button, StyleSheet, ScrollView, Text, TextInput, View, Image, ImageBackground } from 'react-native';
import { styles } from '../style/homeStyle';

export default function Event(props)
{
    return (
        <View style = {{display: "flex",width: 560, height: 300, borderWidth: 0,alignItems: "center"}}>
        <View style = {{borderRadius: 20}}>
        <ImageBackground imageStyle = {{borderRadius: 20}} style = {styles.carousel_img} source = {props.event.eventImg}>
            <View style = {{ display: "flex", flexDirection: "row",justifyContent: "center",alignItems: "center",backgroundColor: "#000000a0", color: "white",opacity: 1, width: 560, height: 80, top: 215, borderBottomLeftRadius: 20, borderBottomRightRadius: 20}}>
                <View style = {{flex: 1, marginLeft: 30}}>
                    <Text style = {{color: "white", fontSize: 20, fontWeight: 400, opacity: 0.7}}>{props.event.eventType} | {props.event.startTime}</Text>
                </View>
                <People people = {props.event.attendees}/>
            </View>
        </ImageBackground>
        <Text style = {{fontSize: 20, color: "black", height: 200, width: 450}}>{props.event.desc}</Text>
        </View>
    </View>
    )
}