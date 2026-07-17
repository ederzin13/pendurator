import { sen } from "@/assets/fonts/custom-font";
import Button from "@/components/button";
import FormInput from "@/components/login/form-input";
import FullScreen from "@/components/screen-wrappers/full-screen";
import { spacing } from "@/constants/Spacing";
import { typo } from "@/constants/Typography";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  return (
    <FullScreen center>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.title}>Title</Text>
        <FormInput label="E-mail" onChangeText={() => {}} value="" />
        <FormInput label="Senha" onChangeText={() => {}} value="" isPassword />
        <Button />
      </View>
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.innerPadding,
    backgroundColor: "#dddddd",
    borderRadius: spacing.radius,
    width: "80%",
    gap: 20,
    alignItems: "center",
  },

  title: {
    fontFamily: sen.bold,
    fontSize: typo.h1,
  },
});
