import { sen } from "@/assets/fonts/custom-font";
import { colors } from "@/constants/Colors";
import { auth } from "@/firebaseConfig";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import DashboardScreen from "./screens/dashboard";
import LoginScreen from "./screens/login";

export default function index() {
  const [currentUser, setCurrentUser] = useState<User | null | undefined>(
    undefined,
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) =>
      setCurrentUser(user),
    );

    return unsubscribe;
  }, []);

  if (currentUser === undefined) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={colors.accentColors.main} />
      </View>
    );
  }

  return currentUser ? <DashboardScreen /> : <LoginScreen />;
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: sen.regular,
  },

  bold: {
    fontFamily: sen.bold,
  },
});
