import { colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type ScreenWrapperProps = {
  children: React.ReactNode;
  center?: boolean;
  padding?: number;
  gap?: number;
};

export default function FullScreen({
  children,
  center,
  padding = 20,
  gap,
}: ScreenWrapperProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          {
            flex: 1,
            padding,
            justifyContent: center ? "center" : "flex-start",
            alignItems: center ? "center" : "flex-start",
            gap: gap,
          },

          styles.container,
        ]}
      >
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light.background,
  },
});
