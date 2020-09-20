import React from "react";
import { useFormikContext } from "formik";
import { StyleSheet, View } from "react-native";

import AppButton from "../AppButton";
import colors from "../../configuration/colors";

function SubmitButton({ fontSize, style, title }) {
  const functions = useFormikContext();
  return (
    <View style={styles.button}>
      <AppButton
        fontSize={fontSize}
        backgroundColor={colors.secondary}
        borderColor={colors.secondary}
        textColor={colors.white}
        height={45}
        title={title}
        onPress={functions.handleSubmit}
        style={style}
        width={110}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: -775,
    right: 5,
  },
});

export default SubmitButton;
