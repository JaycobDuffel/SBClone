import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppHeading from "../components/AppHeading";
import colors from "../configuration/colors";
import HorizontalButton from "../components/HorizontalButton";

export default function WelcomeHeading(props) {
  return (
    <View style={styles.topContainer}>
      <AppHeading
        color={colors.black}
        style={styles.heading}
        text="It's a great day for"
      >
        It's a great day for {"     "}coffee ☕️
      </AppHeading>
      <View style={styles.toolbar}>
        <View style={styles.horizontalButton}>
          <TouchableOpacity onPress={() => console.log("logged in")}>
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
              onPress={() => console.log("log in")}
              text="Inbox"
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
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
    marginTop: -35,
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
