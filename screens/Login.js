import {
  Button,
  View,
  Alert,
  AppState,
  Text,
  ImageBackground,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { styles } from "../style/loginStyle";
import { supabase } from "../lib/supabase";
import { useState, useEffect } from "react";

AppState.addEventListener("change", (state) => {
  if (state === "active") {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});

export default function Login({ props, navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState([]);
  const [eventData, setEventData] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  // useEffect(() => {
  //   const fetchEventData = async () => {
  //     const { data, error } = await supabase.from("Events").select("*");

  //     if (error) {
  //       console.error("Error fetching data:", error);
  //     } else {
  //       setEventData(data);
  //     }

  //     setLoading(false);
  //   };

  //   const fetchData = async () => {
  //     const { data, error } = await supabase.from("Users").select("*");

  //     if (error) {
  //       console.error("Error fetching data:", error);
  //     } else {
  //       setUserData(data);
  //     }

  //     setLoading(false);
  //   };

  //   fetchData();
  // }, []);

  // async function signInWithEmail() {
  //   setLoading(true);
  //   const { data, error } = await supabase.auth.signInWithPassword({
  //     email: email,
  //     password: password,
  //   });

  //   if (error) {
  //     Alert.alert(error.message);
  //     setLoading(false);
  //   } else {
  //     const test = userData.find((user) => user.id == data.user.id);
  //     setCurrentUser(test);
  //     navigation.navigate("Home");
  //   }
  // }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.loginContainer}>
        <Text style={styles.headerText}>Start Your</Text>
        <Text style={styles.headerText2}>Residency Journey</Text>
        <Text style={styles.subheaderText}>
          Sign up or Log in to see what's
        </Text>
        <Text style={styles.subheaderText2}>happening with i.c.stars*</Text>
        <ImageBackground
          resizeMode="cover"
          style={styles.headerImg}
          source={require("../assets/header.png")}
        />
        <Text style={styles.text}>Log in to start your residency journey.</Text>
        <View style={styles.loginBody}>
          <Button color="#3a322d" title="Login to Account" />
          <Button
            onPress={() => {
              navigation.navigate("Create")
            }}
            color="#3a322d"
            title="Create an Account"
          />
        </View>
      </View>
    </View>
  );
}
