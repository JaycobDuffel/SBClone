import React, { useEffect, useState } from "react";
import {
  NativeModules,
  Platform,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import CheckBox from "@react-native-community/checkbox";
import { useNavigation } from "@react-navigation/native";

import Api from "../api/users";
import Auth from "../auth/auth";
import AppText from "../components/AppText";
import colors from "../configuration/colors";
import Screen from "../components/Screen";
import { AppForm, SubmitButton } from "../components/form";

export default function RegisterScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [emails, setEmails] = useState(false);
  const [biometrics, setBiometrics] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [user, setUser] = useState({});

  const handleSubmit = async (user) => {
    const result = await Api.postUser(user);
    if (!result.ok) return alert(result.problem);
    navigation.navigate("Welcome");
    return alert("Success");
  };

  return (
    <Screen style={styles.container}>
      <AppForm>
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

        <ScrollView>
          <AppText style={[styles.text, { marginTop: 0 }]}>
            Personal Info
          </AppText>
          <TextInput
            autoCapitalize
            autoCorrect={false}
            autoFocus
            keyboardType="default"
            onChangeText={(text) => {
              setFirstName(text), setUser({ ...user, firstname: text });
            }}
            placeholderTextColor={colors.medium}
            placeholder="First name"
            style={styles.input}
            value={firstName}
          />
          <TextInput
            autoCapitalize
            autoCorrect={false}
            onChangeText={(text) => {
              setLastName(text), setUser({ ...user, lastname: text });
            }}
            placeholderTextColor={colors.medium}
            placeholder="Last name"
            style={styles.input}
            value={lastName}
          />

          <AppText style={styles.text}>Security</AppText>
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(text) => {
              setEmail(text),
                setUser({
                  ...user,
                  email: text.toLowerCase(),
                  id: text.toLowerCase(),
                });
            }}
            placeholderTextColor={colors.medium}
            placeholder="Email or username"
            style={styles.input}
            value={email}
          />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={(text) => {
              setPassword(text),
                setUser({ ...user, password: Auth.encode(text) });
            }}
            placeholderTextColor={colors.medium}
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            value={password}
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
                Know about product offers, announcements{"\n"}and initiatives.
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
                Use Biometric Unlock to sign in, authorize purchases,{"\n"}
                reloads, transfers, and more.
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
                By joining, I agree to Starbucks® Rewards Terms, {"\n"}
                Starbucks Card Terms, and the Application Terms.
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
            onPress={() => {
              handleSubmit(user);
            }}
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
    fontSize: 12,
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
