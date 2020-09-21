import React from "react";
import { useFormikContext } from "formik";
import { StyleSheet, View } from "react-native";

import AppButton from "../AppButton";
import colors from "../../configuration/colors";

function SubmitButton({ fontSize, style, position, title }) {
  const functions = useFormikContext();
  return (
    <View style={position}>
      <AppButton
        fontSize={fontSize}
        textColor={colors.white}
        title={title}
        onPress={functions.handleSubmit}
        style={style}
      />
    </View>
  );
}

export default SubmitButton;
