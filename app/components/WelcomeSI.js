import React from "react";
import { StyleSheet, View } from "react-native";
import AppText from "./AppText";

export default function WelcomeRewardsSI({ cards, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.rewards}>
        <AppText style={styles.text}>LET'S GET STARTED</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginVertical: 10,
    marginHorizontal: 15,
  },
  rewards: {
    flexDirection: "row",
  },
  text: {
    fontSize: 12,
    fontWeight: "bold",
  },
});
