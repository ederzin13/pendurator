import { sen } from "@/assets/fonts/custom-font";
import Button from "@/components/buttons/button";
import FormInput from "@/components/login-screen/login/form-input";
import FullScreen from "@/components/screen-wrappers/full-screen";
import { spacing } from "@/constants/Spacing";
import { typo } from "@/constants/Typography";
import useAuth from "@/states/useAuth";
import { router, Stack } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  const { save } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // TODO: substituir por uma chamada real de API e usar o token retornado
    const fakeToken = `token-${email}`;
    save(fakeToken);
    router.push("/screens/dashboard");
  };

  return (
    <FullScreen center>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.title}>Title</Text>
        <FormInput label="E-mail" onChangeText={setEmail} value={email} />
        <FormInput label="Senha" onChangeText={setPassword} value={password} isPassword />
        <Button onClick={handleLogin} />
      </View>
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.formPadding,
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
