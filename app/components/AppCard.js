import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import AppText from "./AppText";

export default function AppCard({ cards }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={cards}
        horizontal
        keyExtractor={(card) => card.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image style={styles.image} source={item.image} />
            <AppText numberOfLines={3} style={styles.text}>
              {item.text}
            </AppText>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 7,
  },
  container: {
    alignItems: "center",
    flexDirection: "row",
    height: 275,
    marginLeft: 10,
  },
  image: {
    borderRadius: 10,
    height: 200,
    marginBottom: 10,
    width: 325,
  },
  text: {
    fontSize: 15,
    fontWeight: "700",
    marginRight: 20,
  },
});
