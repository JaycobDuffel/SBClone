import React from "react";
import { StyleSheet, View } from "react-native";

import BottomButton from "../components/BottomButton";
import Screen from "../components/Screen";
import WelcomeBottom from "../components/WelcomeBottom";
import WelcomeHeading from "../components/WelcomeHeading";
import WelcomeRewards from "../components/WelcomeRewards";
import colors from "../configuration/colors";

export default function WelcomeScreen({ cards }) {
  return (
    <View style={styles.container}>
      <WelcomeHeading />
      <WelcomeRewards cards={cards} />
      <WelcomeBottom />
      <BottomButton
        backgroundColor={colors.secondary}
        borderRadius={15}
        height={45}
        onPress={() => console.log("poop")}
        textColor={colors.white}
        title="Join now"
        width={110}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
  },
});
