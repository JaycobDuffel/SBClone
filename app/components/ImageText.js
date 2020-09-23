import React from "react";
import { StyleSheet, View } from "react-native";

import AppButton from "./AppButton";
import AppHeading from "./AppHeading";
import AppText from "./AppText";
import colors from "../configuration/colors";

export default function ImageText({
  heading,
  fontSize,
  numberOfLines,
  onPress,
  style,
  textStyle,
  text,
  title,
}) {
  return (
    <View style={[styles.container, style]}>
      <AppHeading style={styles.heading} fontSize={fontSize}>
        {heading}
      </AppHeading>
      <AppText style={[styles.text, textStyle]} numberOfLines={numberOfLines}>
        {text}
      </AppText>
      <AppButton
        fontSize={14}
        marginHorizontal={20}
        marginBottom={15}
        onPress={onPress}
        style={[styles.button, style]}
        textColor={colors.white}
        title={title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    height: 35,
    marginHorizontal: 5,
    width: 95,
  },
  container: {
    backgroundColor: colors.white,
    paddingLeft: 5,
    marginTop: -7,
    height: 240,
    width: 390,
    borderRightColor: colors.medium,
    borderLeftColor: colors.medium,
    borderBottomColor: colors.medium,
    borderRightWidth: 0.1,
    borderLeftWidth: 0.1,
    borderBottomWidth: 0.1,
    elevation: 5,
    marginBottom: 120,
  },
  heading: {
    marginTop: -15,
    marginLeft: 5,
  },
  text: {
    marginTop: 20,
    marginLeft: 5,
  },
});

{
  /* <AppHeading fontSize={20}>Say hello to a new way to pay</AppHeading>
<AppText numberOfLines={2} style={styles.text}>
  Starbucks® Rewards members can now use cash. credit, or debit to earn
  Stars towards free drinks, food, and more
</AppText> */
}
