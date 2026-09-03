import { sen } from "@/assets/fonts/custom-font";
import useAuth from "@/states/useAuth";
import { StyleSheet } from "react-native";
import DashboardScreen from "./screens/dashboard";
import LoginScreen from "./screens/login";

export default function index() {
  const { token } = useAuth();

  return token === "" ? <LoginScreen /> : <DashboardScreen />;
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: sen.regular,
  },

  bold: {
    fontFamily: sen.bold,
  },
});
