import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "./AppText";
import colors from "../configuration/colors";

export default function HorizontalButton({ color, name, onPress, text }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={name}
        color={color}
        size={25}
        onPress={onPress}
      />
      <AppText style={styles.text}>{text}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 10,
  },
  text: {
    color: colors.medium,
  },
});
