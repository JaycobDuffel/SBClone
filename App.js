import React, { useState } from "react";
import { StyleSheet, TextInput, Text } from "react-native";

import LoginScreen from "./app/screen/LoginScreen";
import Screen from "./app/components/Screen";
import colors from "./app/configuration/colors";

const cards = [
  {
    id: 1,
    image: require("./assets/sb1.jpg"),
    text:
      "Welcome! You are on your way to earning Stars\nhowever you choose to pay",
  },
  {
    id: 2,
    image: require("./assets/sb2.jpg"),
    text: "Scan in store to earn Stars, then redeem for food,\ndrinks and more",
  },
  {
    id: 3,
    image: require("./assets/sb3.jpg"),
    text:
      "Pay directly (even cash) or preoload a Starbucks\nCard to get Rewards faster",
  },
  {
    id: 4,
    image: require("./assets/sb4.jpg"),
    text:
      "Keep an eye out for games, offers, a treat on your\nbirthday, and more!",
  },
];

export default function App() {
  return (
    <Screen>
      <LoginScreen />
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    borderWidth: 0,
  },
  container: {
    padding: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    padding: 15,
    marginVertical: 10,
    marginLeft: 10,
  },
  text: {
    marginTop: -30,
    fontSize: 24,
    fontWeight: "bold",
  },
});
