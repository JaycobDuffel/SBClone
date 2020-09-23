import React, { useContext, useState } from "react";
import { StyleSheet, View, TextInput, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Api from "../api/users";
import Auth from "../auth/auth";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../configuration/colors";
import Screen from "../components/Screen";
import { SubmitButton } from "../components/form";
import UserContext from "../Context/UserContext";

export default function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const userContext = useContext(UserContext);

  const getCurrentUser = async (id) => {
    const result = await Api.getUser(id);
    return result;
  };

  const authorize = async () => {
    const data = await getCurrentUser(email)
    if (data.password === Auth.encode(password)) {
      alert("You logged in");
      userContext.setCurrentUser(data)
      console.log(userContext.currentUser)
      navigation.navigate("Welcome");
    } else {
      alert("Incorrect email/password combination")
    }
  }
  
  return (
    <Screen style={styles.container}>
      <View style={styles.heading}>
        <AppText
          style={{
            fontSize: 28,
            fontWeight: "bold",
          }}
          color={colors.black}
        >
          Sign in to Rewards
        </AppText>
      </View>

      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="email-address"
        onChangeText={(text) => setEmail(text)}
        placeholderTextColor={colors.medium}
        placeholder="Email or username"
        style={styles.input}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setPassword(text)}
        placeholderTextColor={colors.medium}
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />
      <AppButton
        fontSize={14}
        style={styles.button}
        textColor={colors.dollarGreen}
        title="Forgot username?"
      />
      <AppButton
        fontSize={14}
        style={styles.button}
        textColor={colors.dollarGreen}
        title="Forgot password?"
      />
      <SubmitButton
        fontSize={14}
        onPress={authorize}
        position={{
          position: "absolute",
          bottom: -400,
          right: 5,
        }}
        style={styles.submit}
        title="Sign in"
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "flex-start",
    borderWidth: 0,
  },
  heading: {
    backgroundColor: colors.light,
    elevation: 10,
    height: 135,
    justifyContent: "flex-end",
    marginBottom: 20,
    marginTop: -130,
    paddingLeft: 10,
    paddingBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.primary,
    height: 50,
    padding: 15,
    marginVertical: 10,
    marginLeft: 10,
  },
  submit: {
    backgroundColor: colors.dollarGreen,
    borderColor: colors.secondary,
    borderRadius: 30,
    color: colors.white,
    elevation: 5,
    height: 50,
    width: 105,
  },
});
