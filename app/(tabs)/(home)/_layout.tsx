import { ScrollableTabBar } from "@/components/Header";
import { APPSECTIONS } from "@/constants/appSections";
import { Tabs } from "expo-router";
import { useState } from "react";

export default function HomeLayout() {
  //Delivery as the initial page when starting the app
  const [activeTab, setActiveTab] = useState("1");
  return (
    <Tabs
      screenOptions={{
        header: () => (
          <ScrollableTabBar
            tabs={APPSECTIONS}
            activeTabId={activeTab}
            onTabSelect={(id) => setActiveTab(id)}
          />
        ),
        tabBarStyle: { display: "none" },
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="rides" />
      <Tabs.Screen name="pickup" />
      <Tabs.Screen name="dineout" />
    </Tabs>
  );
}
