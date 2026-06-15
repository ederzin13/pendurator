import { spacing } from "@/constants/Spacing";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
  label?: string;
};

export default function Button({ label = "Label" }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    padding: spacing.innerPadding,
    backgroundColor: "#957e7e",
    borderRadius: 5,
  },
});
