import { StatusBar } from "expo-status-bar";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
} from "react-native";
import { styles } from "../style/navStyle";

export default function People(props) {
  const peopleArr = [];
  let i = 0;
  for (let pObject of props.people) {
    if (i > 2) {
      const personObj = (
        <View
          source={pObject.profile_pic}
          style={{
            marginRight: 20,
            borderRadius: 100,
            width: 40,
            height: 40,
            borderColor: `#ffffff`,
            borderWidth: 2,
            zIndex: i,
            backgroundColor: "#f2f2f2",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20 }}>{`+${props.people.length - i}`}</Text>
        </View>
      );
      peopleArr.push(personObj);
      break;
    }

    const text = <Text>Hello world</Text>;
    const personObj = (
      <Image
        source={pObject.profile_pic}
        style={{
          marginRight: -20,
          borderRadius: 100,
          width: 40,
          height: 40,
          borderColor: `#ffffff`,
          borderWidth: 2,
          zIndex: i,
        }}
      />
    );
    peopleArr.push(personObj);
    i++;
  }

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 200,
        height: 40,
      }}
    >
      <FlatList
        style={{ marginLeft: 0 }}
        data={peopleArr}
        horizontal={true}
        renderItem={({ item }) => item}
      ></FlatList>
    </View>
  );
}
