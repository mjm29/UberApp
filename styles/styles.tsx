import { StyleSheet } from "react-native";

//cs = common style
export const cs = StyleSheet.create({
  screen: {
    flex: 1, //take up all the available space
    backgroundColor: "white",
    padding: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  ch: {
    //container header
    flexDirection: "row",
    alignItems: "center",
    margin: 16,
  },
  heading: {
    fontSize: 42,
    fontWeight: "900",
  },
  subheading: {
    fontWeight: "bold",
    fontSize: 22,
  },
  subheadingMiddle: {
    textAlign: "center",
  },
  subheadingLeft: {
    textAlign: "left",
    margin: 12,
  },
  boldText: {
    fontWeight: "bold",
  },
  notification: {
    justifyContent: "flex-end",
  },
  iconSm: {
    width: 18,
    height: 18,
  },
  iconMd: {
    height: 35,
    width: 35,
  },
  image: {
    height: 55,
    width: 55,
  },
});
