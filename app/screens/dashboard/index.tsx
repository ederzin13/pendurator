import { sen } from "@/assets/fonts/custom-font";
import Button from "@/components/buttons/button";
import DashboardTab from "@/components/dashboard-screen/dashboard-tab";
import FullScreen from "@/components/screen-wrappers/full-screen";
import { typo } from "@/constants/Typography";
import useAuth from "@/states/useAuth";
import { router, Stack } from "expo-router";
import { StyleSheet, Text } from "react-native";

export default function DashboardScreen() {
  const { clear } = useAuth();

  const handleBack = () => {
    clear();
    router.back();
  };

  return (
    <FullScreen center>
      <Stack.Screen options={{ headerShown: false }} />
      <Text style={styles.title}>Bem vindo ao Pendurator!</Text>
      <DashboardTab title="Clientes" icon="person-running" />
      <DashboardTab title="Dívidas" />

      {/* {implementar mensagem de "deseja mesmo sair?"} */}
      <Button label="Sair" onClick={handleBack} />
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: typo.h2,
    fontFamily: sen.bold,
  },
});
