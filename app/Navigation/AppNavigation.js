import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../configuration/colors";
import GiftScreen from "../screen/GiftScreen";
import OrderScreen from "../screen/OrderScreen";
import ScanScreen from "../screen/ScanScreen";
import StoresScreen from "../screen/StoresScreen";
import AuthNavigator from "./AuthNavigation";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: colors.dollarGreen,
    }}
  >
    <Tab.Screen
      name="Home"
      component={AuthNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons color={color} name="home" size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Scan"
      component={ScanScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons color={color} name="qrcode" size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Order"
      component={OrderScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons color={color} name="coffee" size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Gift"
      component={GiftScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons color={color} name="gift" size={size} />
        ),
      }}
    />
    <Tab.Screen
      name="Stores"
      component={StoresScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons color={color} name="map-marker" size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
