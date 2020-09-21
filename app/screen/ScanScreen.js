import React from "react";
import { StyleSheet, View } from "react-native";

import AppHeading from "../components/AppHeading";
import AppText from "../components/AppText";
import Screen from "../components/Screen";

export default function ScanScreen(props) {
  return (
    <Screen>
      <View style={styles.container}>
        <AppHeading>Starbucks Cards</AppHeading>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
