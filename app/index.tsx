import { sen } from "@/assets/fonts/custom-font";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function index() {
  return (
    <View>
      <Stack.Screen options={{ title: "Initial screen" }} />
      <Text style={styles.regular}>Fonte customizada</Text>
      <Text style={styles.bold}>Em negrito!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: sen.regular,
  },

  bold: {
    fontFamily: sen.bold,
  },
});
