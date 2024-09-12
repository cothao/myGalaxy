import { Dimensions, StyleSheet } from "react-native";
const dimScreen = Dimensions.get("screen");

export const styles = StyleSheet.create({
  createContainer: {
    display: "flex",
    width: dimScreen.width,
    height: dimScreen.height,
    flexDirection: "column",
    backgroundColor: "#f8f7f2",
  },
  padding: {
    padding: 14,
  },
  header: {
    fontSize: 24,
  },
  inputTop: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderBottomWidth: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderRadius: 4,
    marginTop: 12,
  },
  inputBottom: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderRadius: 4,
  },
  secondaryText: {
    fontSize: 10,
    color: "#626262",
  },
  input: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    fontSize: 16,
    marginBottom: 10,
  },
  title: {
    color: "purple",
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
  bar: {
    backgroundColor: '#EEEEEE',
    height: 18.01,
    width: dimScreen.width,
  },
  linkText: {
    fontSize: 10,
    color: "#256fc6",
    padding: 10
  },
  btn: {
    paddingVertical: 10,
    paddingHorizontal: 14
  }
});
