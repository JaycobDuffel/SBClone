import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import GiftScreen from "../screen/GiftScreen";
import OrderScreen from "../screen/OrderScreen";
import ScanScreen from "../screen/ScanScreen";
import StoresScreen from "../screen/StoresScreen";
import WelcomeScreen from "../screen/WelcomeScreen";
import AuthNavigator from "./AuthNavigation";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={AuthNavigator} />
    <Tab.Screen name="Scan" component={ScanScreen} />
    <Tab.Screen name="Order" component={OrderScreen} />
    <Tab.Screen name="Gift" component={GiftScreen} />
    <Tab.Screen name="Stores" component={StoresScreen} />
  </Tab.Navigator>
);

export default AppNavigator;
