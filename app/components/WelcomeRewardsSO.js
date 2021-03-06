import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppButton from "./AppButton";
import AppCard from "./AppCard";
import AppText from "./AppText";
import colors from "../configuration/colors";

export default function WelcomeRewardsSO({ cards, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.rewards}>
        <AppText style={styles.text}>{"    "}STARBUCKS</AppText>
        <MaterialCommunityIcons
          style={styles.logo}
          name="registered-trademark"
          size={10}
        />
        <AppText style={styles.text}> REWARDS</AppText>
      </View>
      <AppCard cards={cards} />
      <AppButton
        backgroundColor={colors.white}
        fontSize={14}
        style={styles.button}
        textColor={colors.dark}
        title="Join now"
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    borderColor: colors.medium,
    height: 35,
    marginHorizontal: 15,
    marginVertical: 15,
    width: 95,
  },
  container: {
    flexDirection: "column",
    marginVertical: 10,
  },
  rewards: {
    flexDirection: "row",
  },
});
