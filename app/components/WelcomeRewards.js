import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppButton from "./AppButton";
import AppCard from "./AppCard";
import AppText from "./AppText";
import colors from "../configuration/colors";

export default function WelcomeRewards({ cards }) {
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
        borderColor={colors.primary}
        fontSize={14}
        marginHorizontal={25}
        onPress={() => console.log("poop!")}
        style={styles.button}
        textColor={colors.medium}
        title="Join now"
        width={90}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 15,
  },
  container: {
    flexDirection: "column",
    marginVertical: 10,
  },
  rewards: {
    flexDirection: "row",
  },
});
