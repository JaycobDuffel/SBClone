import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import * as Yup from "yup";

import { AppForm, AppFormField, SubmitButton } from "../components/form";
import Screen from "../components/Screen";
import colors from "../configuration/colors";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = () => {
    console.log("you did it");
  };

  const users = [
    {
      email: "test@123.com",
      username: "testing123",
      password: "12345",
    },
    {
      email: "test@1234.com",
      username: "testing1234",
      password: "12345",
    },
    {
      email: "test@12345.com",
      username: "testing12345",
      password: "12345",
    },
  ];

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

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
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
          style={styles.submit}
          height={50}
          title="Sign in"
        />
      </AppForm>
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
    borderRadius: 25,
    color: colors.white,
    elevation: 5,
    height: 50,
    width: 100,
  },
});
