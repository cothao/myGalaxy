import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  ScrollView,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground,
} from "react-native";
import Login from "./Login";
import { NavigationContainer } from "@react-navigation/native";
import Navbar from "../components/Navbar";
import { styles } from "../style/homeStyle";
import * as Svg from "react-native-svg";
import Carousel from "react-native-reanimated-carousel";
import * as ALL from "../assets/assets.js";
import People from "../components/People.js";
import { events } from "../assets/dummyData.js";
import Event from "../components/Event.js";
import Connect from "../components/Connect.js";
import { connectStyle } from "../style/connectStyle.js";
// import { processColorsInProps } from 'react-native-reanimated/lib/typescript/reanimated2/Colors.js';

const Tab = createBottomTabNavigator();

export default function Home({ currentUser }) {
  console.log(currentUser);

  return (
    <View style={styles}>
      <View style={styles.events}>
        <View style={styles.events.bellflex}>
          <View style={styles.events.person_info}>
            <Image
              style={styles.events.person_info.profile_pic}
              source={require("../assets/haylee.jpg")}
            />
            <View style={{ margin: 8 }}>
              <Text style={{ fontSize: 20, fontWeight: 500 }}>Haylee Thao</Text>
              <Text style={{ fontSize: 10, fontWeight: 200 }}>
                3 upcoming events
              </Text>
            </View>
          </View>
          <View
            style={{
              elevation: 5,
              shadowOpacity: 0,
              backgroundColor: "#f2f2f2",
              shadowColor: "black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 0,
              borderRadius: 100,
              width: 50,
              height: 50,
            }}
          >
            <Image
              style={styles.events.bell}
              source={require("../assets/bell.png")}
            />
          </View>
        </View>
        <View>
          <View style={styles.events.event}>
            <Text style={{ fontSize: 25, fontWeight: 700, flex: 1 }}>
              Upcoming Events
            </Text>
            <Text style={{ fontSize: 15, fontWeight: 700 }}>See all</Text>
          </View>
          <ScrollView>
            <Carousel
              width={1600}
              height={350}
              loop
              style={{ display: "flex" }}
              autoPlay={false}
              scrollAnimationDuration={1000}
              data={[...new Array(events.length).keys()]}
              onSnapToItem={(index) => console.log("current index:", index)}
              renderItem={({ index }) => {
                return <Event event={events[index]} />;
              }}
            />
          </ScrollView>
        </View>
      </View>
      <Connect style={connectStyle} />
    </View>
  );
}
