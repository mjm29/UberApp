import { Href, Link } from "expo-router";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export interface HeaderTabItem {
  id: string;
  label: string;
  icon?: ImageSourcePropType;
  link?: Href;
}

interface ScrollableTabBarProps {
  tabs: HeaderTabItem[];
  activeTabId: string;
  onTabSelect: (tabId: string) => void;
}

export function ScrollableTabBar({
  tabs,
  activeTabId,
  onTabSelect,
}: ScrollableTabBarProps) {
  return (
    <View style={styles.headerWrapper}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;

          return (
            <Link key={tab.id} href={tab.link as Href} replace asChild>
              <Pressable
                key={tab.id}
                style={styles.tabButton}
                onPress={() => onTabSelect(tab.id)}
              >
                <View style={styles.tabInner}>
                  {tab.icon && (
                    <Image
                      source={tab.icon}
                      style={styles.tabIcon}
                      resizeMode="contain"
                    />
                  )}
                  <Text
                    style={[styles.tabLabel, isActive && styles.activeTabLabel]}
                  >
                    {tab.label}
                  </Text>
                </View>
                {isActive && <View style={styles.activeIndicator} />}
              </Pressable>
            </Link>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    height: 50,
    width: "100%",
  },
  scrollContent: {
    paddingHorizontal: 16,
    gap: 20,
  },
  tabButton: {
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  tabInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  tabIcon: {
    width: 20,
    height: 20,
  },
  tabLabel: {
    fontSize: 15,
    fontWeight: "900",
    color: "#6B7280",
  },
  activeTabLabel: {
    fontWeight: "700",
    color: "#000000",
  },
  activeIndicator: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 2.5,
    backgroundColor: "#000000",
    borderRadius: 2,
  },
});
