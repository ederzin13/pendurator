import { sen } from "@/assets/fonts/custom-font";
import AddClient from "@/components/buttons/add-client";
import BackButton from "@/components/buttons/back-button";
import Scrollable from "@/components/screen-wrappers/scrollable";
import { spacing } from "@/constants/Spacing";
import { typo } from "@/constants/Typography";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ClientScreen() {
  return (
    <Scrollable center>
      <View style={styles.header}>
        <Stack.Screen options={{ headerShown: false }} />
        <View style={styles.options}>
          <BackButton />
          <Text style={styles.title}>Clientes</Text>
        </View>

        <View style={styles.options}>
          <AddClient />
        </View>
      </View>

      <View>
        <Text style={styles.textBody}>Não tem nenhum cliente :(</Text>
      </View>
    </Scrollable>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#c3c3c3",
    marginBottom: spacing.margin,
    padding: spacing.innerPadding,
  },

  options: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.innerPadding,
  },

  textBody: {
    fontFamily: sen.regular,
    fontSize: typo.h3,
  },

  title: {
    fontFamily: sen.bold,
    fontSize: typo.h2,
  },
});
