import React, { useState } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CheckBox from "@react-native-community/checkbox";

import { AppForm, SubmitButton } from "../components/form";
import Screen from "../components/Screen";
import colors from "../configuration/colors";
import AppText from "../components/AppText";
import { ScrollView } from "react-native";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

export default function RegisterScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [emails, setEmails] = useState(false);
  const [biometrics, setBiometrics] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
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
          Starbucks® Rewards
        </AppText>
      </View>

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ScrollView>
          <AppText style={[styles.text, { marginTop: 0 }]}>
            Personal Info
          </AppText>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            autoFocus
            keyboardType="default"
            onChangeText={(text) => setFirstName(text)}
            placeholderTextColor={colors.medium}
            placeholder="First name"
            style={styles.input}
          />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => setLastName(text)}
            placeholderTextColor={colors.medium}
            placeholder="Last name"
            style={styles.input}
          />

          <AppText style={styles.text}>Security</AppText>
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
          <TouchableOpacity
            style={{
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 10,
            }}
          >
            <AppText style={{ color: colors.dollarGreen, marginTop: 10 }}>
              Already have a Starbucks gift card?
            </AppText>
            <MaterialCommunityIcons
              color={colors.medium}
              name="chevron-down"
              size={25}
            />
          </TouchableOpacity>

          <AppText style={styles.text}>Preferences & Terms</AppText>
          <View style={{ flexDirection: "row", marginTop: 15, marginLeft: 20 }}>
            <CheckBox
              disabled={false}
              value={emails}
              onValueChange={(newValue) => setEmails(newValue)}
            />
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: 10,
              }}
            >
              <AppText
                style={[styles.text, { fontWeight: "600", marginTop: 0 }]}
              >
                Yes, I'd like emails from Starbucks
              </AppText>
              <AppText style={styles.description}>
                Know about product offers, announcements and initiatives.
              </AppText>
            </View>
          </View>

          <View style={{ flexDirection: "row", marginTop: 15, marginLeft: 20 }}>
            <CheckBox
              disabled={false}
              value={biometrics}
              onValueChange={(newValue) => setBiometrics(newValue)}
            />
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                marginLeft: 10,
              }}
            >
              <AppText
                style={[styles.text, { fontWeight: "600", marginTop: 0 }]}
              >
                I'd like to use Biometric Unlock
              </AppText>
              <AppText style={styles.description}>
                Use Biometric Unlock to sign in, authorize purchases, reloads,
                transfers, and more.
              </AppText>
            </View>
          </View>
          <View style={{ flexDirection: "row", marginTop: 15, marginLeft: 20 }}>
            <CheckBox
              disabled={false}
              value={acceptTerms}
              onValueChange={(newValue) => setAcceptTerms(newValue)}
            />
            <View
              style={{
                flexDirection: "column",
                justifyContent: "flex-start",
                marginLeft: 10,
              }}
            >
              <AppText
                style={[styles.text, { fontWeight: "600", marginTop: 0 }]}
              >
                I accept the Terms of Use
              </AppText>
              <AppText style={styles.description}>
                By joining, I agree to Starbucks® Rewards Terms, Starbucks Card
                Terms, and the Application Terms.
              </AppText>
            </View>
          </View>
          <View style={{ height: 275, marginLeft: 75 }}>
            <TouchableOpacity style={{ marginVertical: 15 }}>
              <AppText style={styles.terms}>Card Terms</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginVertical: 15 }}>
              <AppText style={styles.terms}>Rewards Terms</AppText>
            </TouchableOpacity>
            <TouchableOpacity style={{ marginVertical: 15 }}>
              <AppText style={styles.terms}>Application Terms</AppText>
            </TouchableOpacity>
          </View>

          <SubmitButton
            fontSize={14}
            position={{
              marginVertical: 10,
              position: "absolute",
              bottom: 20,
              right: 5,
            }}
            style={styles.submit}
            title="Join now"
          />
        </ScrollView>
      </AppForm>
    </Screen>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "flex-start",
    borderWidth: 0,
  },
  description: {
    color: colors.medium,
    marginLeft: 15,
    marginTop: 10,
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
    borderBottomColor: colors.inactiveInput,
    height: 50,
    padding: 15,
    marginVertical: 10,
    marginLeft: 10,
  },
  submit: {
    backgroundColor: colors.dollarGreen,
    borderColor: colors.secondary,
    borderRadius: 35,
    color: colors.white,
    elevation: 5,
    height: 50,
    width: 125,
  },
  terms: {
    color: colors.dollarGreen,
  },
  text: {
    fontWeight: "700",
    marginLeft: 15,
    marginTop: 20,
  },
});
