import { ScrollableTabBar } from "@/components/Header";
import { APPSECTIONS } from "@/constants/appSections";
import { Stack } from "expo-router";
import { useState } from "react";

export default function HomeLayout() {
  //Delivery as the initial page when starting the app
  const [activeTab, setActiveTab] = useState("1");
  return (
    <Stack
      screenOptions={{
        header: () => (
          <ScrollableTabBar
            tabs={APPSECTIONS}
            activeTabId={activeTab}
            onTabSelect={(id) => setActiveTab(id)}
          />
        ),
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="rides" />
    </Stack>
  );
}
