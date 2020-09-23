import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../configuration/colors";

export default function BottomButton({
  fontSize = 18,
  onPress,
  textColor,
  title,
  style,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        style
      ]}
      onPress={onPress}
    >
      <Text style={[styles.title, { color: textColor, fontSize }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 20,
    bottom: 30,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 10,
    marginVertical: 5,
    padding: 2,
    position: "absolute",
    right: 10,
  },
  title: {
    fontWeight: "bold",
  },
});
