import { sen } from "@/assets/fonts/custom-font";
import { spacing } from "@/constants/Spacing";
import { typo } from "@/constants/Typography";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function AddClient() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>Novo</Text>
      <FontAwesome6 name="plus" size={20} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 120,
    borderRadius: spacing.radius,
    backgroundColor: "#ff7575",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: spacing.innerPadding,
  },

  text: {
    fontFamily: sen.bold,
    fontSize: typo.h3,
    color: "white",
  },
});
