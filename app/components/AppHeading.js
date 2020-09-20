import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../configuration/colors";
import AppText from "./AppText";
import Screen from "./Screen";

export default function AppHeading({
  children,
  color = colors.medium,
  fontSize = 31,
  style,
}) {
  return (
    <Screen>
      <View style={[styles.container, style]}>
        <AppText color={color} style={[styles.heading, { fontSize }]}>
          {children}
        </AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  heading: {
    justifyContent: "center",
    fontWeight: "700",
  },
});
