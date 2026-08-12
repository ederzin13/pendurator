import { sen } from "@/assets/fonts/custom-font";
import { spacing } from "@/constants/Spacing";
import { typo } from "@/constants/Typography";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type DashboardTabProps = {
  title: string;
  icon?: string;
};

export default function DashboardTab({ title, icon }: DashboardTabProps) {
  const handlePressClient = () => {
    router.push("/screens/clients");
  };

  const handlePressDebt = () => {
    router.push("/screens/debts");
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={icon ? handlePressClient : handlePressDebt}
    >
      <Text style={styles.text}>{title}</Text>
      {icon ? (
        <FontAwesome6 name={icon} size={typo.h3} color="white" />
      ) : (
        <MaterialIcons name="money-off" size={typo.h3} color="white" />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "80%",
    backgroundColor: "#ff7575",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: spacing.innerPadding,
    alignItems: "center",
    borderRadius: spacing.radius,
    margin: spacing.margin,
  },

  text: {
    color: "#fff",
    fontFamily: sen.bold,
    fontSize: typo.h3,
  },
});
