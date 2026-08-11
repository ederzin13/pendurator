import { sen } from "@/assets/fonts/custom-font";
import { spacing } from "@/constants/Spacing";
import { typo } from "@/constants/Typography";
import Octicons from "@expo/vector-icons/Octicons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function AddClient() {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>
        Novo <Octicons name="person-add" size={20} color="white" />
      </Text>
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
  },

  text: {
    fontFamily: sen.bold,
    fontSize: typo.h3,
    color: "white",
  },
});
