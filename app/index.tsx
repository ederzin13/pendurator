import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function index() {
  return (
    <View>
      <Stack.Screen options={{ title: "Initial screen" }} />
      <Text>Hello World!</Text>
    </View>
  );
}
