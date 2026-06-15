import { sen } from "@/assets/fonts/custom-font";
import React from "react";
import { StyleSheet } from "react-native";
import LoginScreen from "./screens/login";

export default function index() {
  return <LoginScreen />;
}

const styles = StyleSheet.create({
  regular: {
    fontFamily: sen.regular,
  },

  bold: {
    fontFamily: sen.bold,
  },
});
