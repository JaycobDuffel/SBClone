import React from "react";
import { Image, StyleSheet, View } from "react-native";

import ImageText from "./ImageText";

export default function InfoCard({ heading, imageUri, text }) {
  console.log(imageUri)
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={{uri: imageUri}} />
      <ImageText
        numberOfLine={2}
        fontSize={20}
        heading={heading}
        style={{marginBottom: 30}}
        textStyle={{fontSize: 16}}
        text={text}
        title="Learn more"
      />
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
    marginLeft: 15,
    marginRight: 20,
  },
});
