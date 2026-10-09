import { Ionicons } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable, Text, View } from "react-native";

import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarPosition: "bottom",
        tabBarActiveTintColor: Colors[colorScheme].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="(home)"
        options={{
          title: "",
          tabBarIcon: ({ color }) => <Ionicons name="home" size={24} />,
          headerLeft: () => (
            <View style={{ flexDirection: "row", paddingLeft: 16, gap: 10 }}>
              <Ionicons name="location-outline" size={24} />
              <Text style={{ fontWeight: "700" }}>Current Location</Text>
              <Ionicons name="chevron-down-sharp" size={16} />
            </View>
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable style={{ marginRight: 15 }}>
                {({ pressed }) => <Ionicons name="notifications" size={20} />}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "",
          tabBarIcon: ({ color }) => (
            <Ionicons name="person-circle-outline" size={24} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
