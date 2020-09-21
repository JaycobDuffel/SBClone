import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../configuration/colors";

export default function BottomButton({
  backgroundColor = "primary",
  borderColor = "secondary",
  borderRadius,
  fontSize = 18,
  height,
  onPress,
  textColor,
  title,
  width = "100%",
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor,
          height,
          width,
          borderColor: colors[borderColor],
          borderRadius,
        },
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
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 2,
    position: "absolute",
    right: 10,
    bottom: 30,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  title: {
    fontWeight: "bold",
  },
});
