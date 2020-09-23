import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppHeading from "./AppHeading";
import colors from "../configuration/colors";
import HorizontalButton from "./HorizontalButton";

export default function WelcomeHeadingSO({ navigation }) {
  return (
    <View style={styles.topContainer}>
      <AppHeading
        color={colors.black}
        style={styles.heading}
      >
        It's a great day for {"     "}coffee ☕️
      </AppHeading>
      <View style={styles.toolbar}>
        <View style={styles.horizontalButton}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <HorizontalButton
              color={colors.medium}
              name="login"
              text="Sign in"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <HorizontalButton
              color={colors.medium}
              name="email-outline"
              text="Inbox"
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity >
            <MaterialCommunityIcons
              name="settings-outline"
              color={colors.medium}
              size={30}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: colors.white,
    elevation: 15,
    height: 290,
    marginBottom: 10,
    marginTop: -75,
    width: "100%",
  },
  heading: {
    marginLeft: 15,
    marginTop: 100,
  },
  horizontalButton: {
    flexDirection: "row",
  },
  icon: {
    marginRight: 15,
  },
  toolbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 10,
  },
});
