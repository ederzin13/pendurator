import React from "react";
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
        ]}
      >
        {children}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
