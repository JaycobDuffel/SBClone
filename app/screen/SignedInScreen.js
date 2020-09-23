import React from 'react';
import { StyleSheet, View } from 'react-native';

import AppHeading from "../components/AppHeading"
import Screen from '../components/Screen';

export default function SignedInScreen(props) {
  return (
    <Screen>
      <AppHeading>Hello</AppHeading>
    </Screen>
    );
}

const styles = StyleSheet.create({
  container: {},
});