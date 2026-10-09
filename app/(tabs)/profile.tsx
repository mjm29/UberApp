import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View , ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { cs } from "../../styles/styles";
import Features from "../../components/Features";

export default function Profile() {
  //user and not verified are one part
  return (
    <SafeAreaView style={[cs.screen, { flex: 1 }]}>
      <ScrollView>
        <View style={cs.screen}>
          <View style={[cs.container, {alignItems: "center", marginBottom: 20, height:"20%"}]}>

            {/*user name and profile*/}
            <View style={{justifyContent: "space-between"}}>
              <Text style={cs.heading}>Marc Joseph Millare</Text>
                <View
                  style={{
                    width: "25%",
                    height: "25%",
                    borderRadius: 5,
                    alignItems: "center",
                    backgroundColor: "rgb(243, 243, 243)",
                  }}
                >
                <Text>Not verified</Text>
                </View>
            </View>
            <View style={styles.profileIcon}>
              <Ionicons name="person-circle-outline" color="white" size={40} />
            </View>
          </View>

          {/*favorites, wallet, and orders box */}
          <View style={[cs.container, { gap: 15 }]}>
            <View style={styles.smallGrayBox}>
              <Ionicons name="heart-outline" size={25}/>
              <Text style={{ fontWeight: "medium" }}> Favorites</Text>
            </View>

            <View style={styles.smallGrayBox}>
              <Ionicons name="wallet-outline" size={25} />
              <Text style={{ fontWeight: "medium" }}> Wallet</Text>
            </View>

            <View style={styles.smallGrayBox}>
              <Ionicons name="receipt-outline" size={25} />
              <Text style={{ fontWeight: "medium" }}> Orders</Text>
            </View>
          </View>
          
          {/*"Uber free" biger box that expands full width */}
          <View style={[cs.container , styles.bigGrayBox, {marginTop: 10 , padding:20}]}>
                <View>
                  <Text style={{ fontWeight: "bold" , fontSize: 15, marginBottom: 6}}>Try Uber One free</Text>
                  <Text>4 weeks free of $0 Delivery Fee and more</Text>
                </View>

                <View>
                    <Ionicons name="gift" size={50}/>
                </View>
          </View>

          {/*Uses Feature component to add multiple features that include icons and text per feature*/}
          <Features/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  //got some of the profileIcon from ai
  profileIcon: {
    backgroundColor: "gray",
    borderRadius: 50,
    width:50,
    height:50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  smallGrayBox: { //favorites, wallet, orders
    flex: 1,
    backgroundColor: "rgb(243, 243, 243)",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    height: 75,
  },

  bigGrayBox: {//try uber free box
    flexDirection: "row",
    backgroundColor: "rgb(243, 243, 243)",
    borderRadius: 15,
    alignItems: "center",
    height: 100,
    marginBottom:20,
  },
});
