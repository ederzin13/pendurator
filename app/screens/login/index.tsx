import { sen } from "@/assets/fonts/custom-font";
import Button from "@/components/buttons/button";
import FormInput from "@/components/login-screen/login/form-input";
import FullScreen from "@/components/screen-wrappers/full-screen";
import { spacing } from "@/constants/Spacing";
import { typo } from "@/constants/Typography";
import { loginWithEmail } from "@/services/auth";
import useAuth from "@/states/useAuth";
import { Stack } from "expo-router";
import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  //utilizando o useAuth
  const { token, save } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    // save(token);
    // router.push("/screens/dashboard");

    if (!email.trim() || !password.trim()) {
      Alert.alert("Atenção", "Preencha o e-mail e a senha!");
      return;
    }

    try {
      setLoading(true);

      const token = await loginWithEmail(email, password);

      save(token);
    } catch (error: any) {
      console.error("Erro no login :( :", error);

      if (
        error.code === "auth/invalid-credential" ||
        error.code === "auth/user-not-found" ||
        error.code === "auth/wrong-password"
      ) {
        Alert.alert("Erro", "E-mail ou senha inválidos.");
      } else if (error.code === "auth/invalid-email") {
        Alert.alert("Erro", "Formato de e-mail inválido.");
      } else {
        Alert.alert("Erro", "Não foi possível entrar. Tente novamente.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <FullScreen center>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.container}>
        <Text style={styles.title}>Title</Text>
        <FormInput
          label="E-mail"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
        />
        <FormInput
          label="Senha"
          onChangeText={setPassword}
          value={password}
          isPassword
        />
        <Button label={"Fazer login"} onClick={handleLogin} />
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
