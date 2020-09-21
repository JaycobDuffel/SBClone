import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import BottomButton from "../components/BottomButton";
import Screen from "../components/Screen";
import WelcomeBottom from "../components/WelcomeBottom";
import WelcomeHeading from "../components/WelcomeHeading";
import WelcomeRewards from "../components/WelcomeRewards";
import colors from "../configuration/colors";

const cards = [
  {
    id: 1,
    image: require("../../assets/sb1.jpg"),
    text:
      "Welcome! You are on your way to earning Stars\nhowever you choose to pay",
  },
  {
    id: 2,
    image: require("../../assets/sb2.jpg"),
    text: "Scan in store to earn Stars, then redeem for food,\ndrinks and more",
  },
  {
    id: 3,
    image: require("../../assets/sb3.jpg"),
    text:
      "Pay directly (even cash) or preoload a Starbucks\nCard to get Rewards faster",
  },
  {
    id: 4,
    image: require("../../assets/sb4.jpg"),
    text:
      "Keep an eye out for games, offers, a treat on your\nbirthday, and more!",
  },
];

export default function WelcomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <WelcomeHeading navigation={navigation} />
        <WelcomeRewards cards={cards} navigation={navigation} />
        <WelcomeBottom navigation={navigation} />
        <BottomButton
          backgroundColor={colors.dollarGreen}
          borderRadius={25}
          height={45}
          onPress={() => console.log("poop")}
          textColor={colors.white}
          title="Join now"
          width={110}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
  },
});
