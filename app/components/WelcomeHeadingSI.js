import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppHeading from "./AppHeading";
import colors from "../configuration/colors";
import HorizontalButton from "./HorizontalButton";
import UserContext from "../Context/UserContext";

export default function WelcomeHeadingSI({ navigation }) {

  const userContext = useContext(UserContext);

  return (
    <View style={styles.topContainer}>
      <AppHeading
        color={colors.black}
        style={styles.heading}
      >
        Hello {userContext.currentUser.firstname}, welcome back!
      </AppHeading>
      <View style={styles.toolbar}>
        <View style={styles.horizontalButton}>
          <TouchableOpacity onPress={() => userContext.setCurrentUser({})}>
            <HorizontalButton
              color={colors.medium}
              name="logout"
              text="Sign out"
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <HorizontalButton
              color={colors.medium}
              name="map-marker"
              text="Stores"
            />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity >
            <MaterialCommunityIcons
              name="account"
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
