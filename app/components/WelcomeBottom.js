import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../configuration/colors";
import AppHeading from "./AppHeading";

import AppText from "./AppText";
import ImageText from "./ImageText";

export default function WelcomeBottom() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image style={styles.image} source={require("../../assets/sb5.jpg")} />
        <ImageText
          numberOfLine={2}
          fontSize={20}
          heading="Say hello to a new way to pay"
          text="Starbucks® Rewards members can now use cash, credit, or debit to earn
  Stars towards free drinks, food, and more"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
  },
  image: {
    borderRadius: 10,
    height: 250,
    width: 390,
  },
  text: {
    fontSize: 15,
    fontWeight: "700",
    marginLeft: 5,
    marginRight: 20,
  },
});
