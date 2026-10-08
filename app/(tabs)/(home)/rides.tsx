import { useRouter } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { cs } from "../../../styles/styles";

//export default this is the main/default thing that this file exports
export default function Rides() {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/*first {} says I am about to put javascript inside the jsx attribute, then second says this is the actual js object containing your style */}
      <View style={cs.screen}>
        <ScrollView>
          <View style={[cs.notification, cs.ch]}>
            <Image
              style={cs.iconMd}
              source={require("../../../assets/images/notification.png")}
            />
          </View>
          <View style={style.container}>
            <Text style={[cs.subheadingMiddle, cs.subheading]}>
              Request a ride
            </Text>
            <Image
              style={style.lines}
              source={require("../../../assets/images/lines.png")}
            />
          </View>
          <View style={style.searchBox}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                style={[cs.iconMd, { borderRadius: 20 }]}
                source={require("../../../assets/images/searchGrey.png")}
              />
              <Text>Where to?</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderRadius: 20,
                backgroundColor: "white",
              }}
            >
              <Image
                style={[cs.iconMd, { borderRadius: 20 }]}
                source={require("../../../assets/images/clock.png")}
              />
              <Text style={{ alignItems: "center" }}>Later</Text>
              <Image
                style={[cs.iconMd, { borderRadius: 20 }]}
                source={require("../../../assets/images/downArrow.png")}
              />
            </View>
          </View>

          <View style={{ marginTop: 10 }}>
            <Text style={[cs.subheading, cs.subheadingLeft]}>Suggestions</Text>
          </View>

          <View style={style.suggestionsParent}>
            <ScrollView horizontal={true}>
              {medBox("Rides", require("../../../assets/images/rideGrey.png"))}
              {medBox("Reserve", require("../../../assets/images/reserve.png"))}
            </ScrollView>
          </View>

          <ScrollView horizontal={true} style={{ marginBottom: 6 }}>
            {bigBoxDesc(
              require("../../../assets/images/budgetCar.webp"),
              "black",
              "Escape on a budget",
              "Rent a car",
            )}
            {bigBoxDesc(
              require("../../../assets/images/budgetCar.webp"),
              "navy",
              "Escape on a budget",
              "Rent a car",
            )}
          </ScrollView>

          <View>
            <Text style={[cs.subheading, cs.subheadingLeft]}>
              Reserve ahead
            </Text>
          </View>

          <ScrollView horizontal={true}>
            {bigBoxImage(require("../../../assets/images/flight.webp"))}
            {bigBoxImage(require("../../../assets/images/bookUber.jpg"))}
          </ScrollView>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

//got imagesourceproptype from chatgpt because Image wasn't working for parameter type
const medBox = (text: string, pic: ImageSourcePropType) => {
  return (
    <View style={style.suggestionsChild}>
      <Image style={cs.image} source={pic} />
      <Text style={[cs.boldText, { textAlign: "center" }]}>{text}</Text>
    </View>
  );
};
const bigBoxDesc = (
  pic: ImageSourcePropType,
  bc: string,
  description: string,
  buttonText: string,
) => {
  {
    /*1 box */
  }
  return (
    <View style={[style.suggestionsBigBoxParent, { backgroundColor: bc }]}>
      <View style={style.suggestionsBigBoxChildOne}>
        <View>
          <Text
            style={{ color: "white", fontSize: 20, fontWeight: "semibold" }}
          >
            {description}
          </Text>
        </View>

        <View
          style={{
            padding: 9,
            borderRadius: 20,
            width: 100,
            backgroundColor: "white",
          }}
        >
          <Text style={[cs.boldText, { fontSize: 15, textAlign: "center" }]}>
            {buttonText}
          </Text>
        </View>
      </View>

      <View style={style.suggestionsBigBoxChildTwo}>
        <Image
          style={{ borderRadius: 20, width: 170, height: 180 }}
          source={pic}
        />
      </View>
    </View>
  );
};

const bigBoxImage = (pic: ImageSourcePropType) => {
  {
    /*1 box */
  }
  return <Image source={pic} style={style.suggestionsBigBoxParent} />;
};

const style = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    width: "100%", //chatgpt, to make the container 100% of parent
    position: "relative", //parent, reference point for absolute children from ai
  },
  searchBox: {
    padding: 9,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    height: "5%",
    marginHorizontal: 8,
    marginTop: 14,
    backgroundColor: "rgb(243, 243, 243)",
    borderRadius: 20,
  },
  lines: {
    //child of container
    position: "absolute", //from ai
    right: 16, //from ai. without it, it will be in the center
  },
  suggestionsParent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 120,
    padding: 5,
  },
  suggestionsChild: {
    width: 170, //makes them equal
    height: 100,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(243, 243, 243)",
    margin: 4,
  },
  suggestionsBigBoxParent: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    width: 340,
    height: 200,
    padding: 10,
    margin: 6,
  },
  suggestionsBigBoxChildOne: {
    flex: 1,
    height: "90%",
    padding: 10,
    justifyContent: "space-between",
  },
  suggestionsBigBoxChildTwo: {
    flex: 1,
    height: "90%",
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
