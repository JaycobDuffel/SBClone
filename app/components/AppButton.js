import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function AppButton({
  fontSize = 18,
  onPress,
  textColor,
  style,
  title,
}) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
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
    marginHorizontal: 10,
    marginVertical: 20,
  },
  title: {
    fontWeight: "bold",
  },
});
