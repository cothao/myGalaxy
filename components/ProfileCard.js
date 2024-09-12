import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  FlatList,
} from "react-native";

export default function ProfileCard() {
  return (
    <View
      style={{
        width: 350,
        height: 250,
        backgroundColor: "white",
        borderRadius: 20,
      }}
    >
      <View
        style={{
          marginLeft: 20,
          marginTop: 20,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
        }}
      >
        <Image
          source={require("../assets/henry.jpg")}
          style={{
            borderRadius: 100,
            width: 60,
            height: 60,
          }}
        />
        <View>
          <Text style={{ fontSize: 20, fontWeight: 500 }}>Henry Nguyen</Text>
          <Text style={{ fontSize: 10, fontWeight: 300 }}>
            Cycle 6 | i.c stars Milwaukee
          </Text>

          <Text style={{ fontSize: 10, fontWeight: 300 }}>
            Senior Developer at American Family Insurance
          </Text>
        </View>
      </View>
    </View>
  );
}
