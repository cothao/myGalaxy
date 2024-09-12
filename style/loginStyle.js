import { Dimensions, StyleSheet } from "react-native";
const dimScreen = Dimensions.get("screen");

export const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    width: dimScreen.width,
    height: dimScreen.height,
    flexDirection: "column",
    backgroundColor: "#f8f7f2",
  },
  loginContainer: {
    width: dimScreen.width,
    height: 300,
  },
  headerText: {
    position: "absolute",
    top: dimScreen.height * 0.08,
    color: "#f8f7f2",
    zIndex: 1,
    fontSize: 38,
    paddingLeft: 8,
  },
  headerText2: {
    position: "absolute",
    top: dimScreen.height * 0.12,
    color: "#f8f7f2",
    zIndex: 1,
    fontSize: 38,
    paddingLeft: 8,
  },
  subheaderText: {
    position: "absolute",
    top: dimScreen.height * 0.19,
    color: "#f8f7f2",
    zIndex: 1,
    fontSize: 16,
    paddingLeft: 8,
  },
  subheaderText2: {
    position: "absolute",
    top: dimScreen.height * 0.215,
    color: "#f8f7f2",
    zIndex: 1,
    fontSize: 16,
    paddingLeft: 8,
  },
  text: {
    fontSize: 18,
    padding: 16,
  },
  headerImg: {
    height: 400,
  },
  loginBody: {
    width: dimScreen.width,
    display: "flex",
    flexDirection: "column",
    padding: 16,
    gap: 16,
  },
  link: {
    color: "#256fc6",
    textAlign: "center",
  },
  createButton: {
    flex: 1,
    backgroundColor: "#f8f7f2",
    borderColor: "#3a322d",
    padding: 20,
  },
  elevation: {
    elevation: 20,
    shadowColor: '#52006A',
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  button: {
    backgroundColor: '#4830D3',
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    borderRadius: 4,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
  },
  text1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});
