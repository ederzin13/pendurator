import { sen } from "@/assets/fonts/custom-font";
import { spacing } from "@/constants/Spacing";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  label?: string;
  onClick?: () => void;
};

export default function Button({ label = "Label", onClick }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={onClick}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    padding: spacing.innerPadding,
    backgroundColor: "#c05d5d",
    borderRadius: 5,
  },

  text: {
    color: "#fff",
    fontFamily: sen.regular,
  },
});
