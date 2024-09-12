import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
} from "react-native";
import ProfileCard from "./ProfileCard";
import Carousel from "react-native-reanimated-carousel";
import { ScrollView } from "react-native";

export default function Connect(props) {
  return (
    <View style={props.style}>
      <Text style={props.style.header}>Connect with Others</Text>
      <ScrollView>
        <Carousel
          width={1600}
          height={350}
          loop
          style={{ display: "flex" }}
          autoPlay={false}
          scrollAnimationDuration={1000}
          data={[...new Array(6).keys()]}
          onSnapToItem={(index) => console.log("current index:", index)}
          renderItem={({ index }) => {
            return <ProfileCard />;
          }}
        />
      </ScrollView>
    </View>
  );
}
