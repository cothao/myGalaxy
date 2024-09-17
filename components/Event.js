import People from "./People"
import { Button, StyleSheet, ScrollView, Text, TextInput, View, Image, ImageBackground } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Event(props) {
    return (
        <View style={{ display: "flex", width: wp("100%"), height: hp("33%"), borderWidth: 0, alignItems: "center" }}>
            <View style={{ borderRadius: 20, display: "flex", alignItems: "center" }}>
                <ImageBackground
                    imageStyle={{ borderRadius: 20 }}
                    style={{ width: wp("90%"), height: hp("30%"), justifyContent: "flex-end" }}
                    source={props.event.eventImg}
                >
                    <View style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        backgroundColor: "#000000a0",
                        color: "white",
                        opacity: 1,
                        width: "100%",
                        height: hp("10%"),
                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        justifyContent: "space-between",
                        // paddingHorizontal: 30,
                        // gap: 30,
                    }}>
                        <View
                        style =
                        {
                            {
                                display: "flex",
                                width: "100%",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                paddingHorizontal: 6,
                            }
                        }
                        >
                        <View>
                            <Text style={{ color: "white", fontSize: wp("3%"), width:wp("50%"),fontWeight: '400', opacity: 1.0 }}>{props.event.eventName} at {props.event.location}</Text>
                            <Text style={{ color: "white", fontSize: wp("3%"), width:wp("35%"),fontWeight: '400', opacity: 0.7 }}>
                            {props.event.eventType} | {props.event.startTime}
                            </Text>
                        </View>
                        <People people={props.event.attendees} />
                        </View>
                    </View>
                </ImageBackground>
                {/* <Text style={{ fontSize: wp("3%"), color: "black", height: 200, width: wp("90%") }}>{props.event.desc}</Text> */}
            </View>
        </View>
    );
}
