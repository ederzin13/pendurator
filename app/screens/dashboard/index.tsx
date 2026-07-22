import { sen } from "@/assets/fonts/custom-font";
import DashboardTab from "@/components/dashboard-screen/dashboard-tab";
import FullScreen from "@/components/screen-wrappers/full-screen";
import { typo } from "@/constants/Typography";
import { router, Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";

export default function index() {
  const handleBack = () => {
    router.back();
  };

  return (
    <FullScreen center>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={styles.title}>Bem vindo ao Pendurator!</Text>
      <DashboardTab title="Clientes" icon="person-running" />
      <DashboardTab title="Dívidas" />
      {/* <Button label="Voltar" onClick={handleBack} /> */}
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: typo.h2,
    fontFamily: sen.bold,
  },
});
