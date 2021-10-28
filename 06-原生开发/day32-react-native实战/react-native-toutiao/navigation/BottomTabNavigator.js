import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

import TabBarIcon from "../components/TabBarIcon";
import NewsScreen from "../screens/NewsScreen";
import FindScreen from "../screens/FindScreen";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "News";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="News"
        component={NewsScreen}
        options={{
          title: "新闻",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-paper" />
          ),
        }}
      />
      <BottomTab.Screen
        name="Find"
        component={FindScreen}
        options={{
          title: "发现",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} name="md-search" />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "News":
      return "新闻";
    case "Video":
      return "视频";
    case "Find":
      return "发现";
  }
}
