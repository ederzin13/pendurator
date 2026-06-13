import { Sen_400Regular, Sen_700Bold, useFonts } from "@expo-google-fonts/sen";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function _layout() {
  const [loaded, error] = useFonts({
    Sen_400Regular,
    Sen_700Bold,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return <Stack />;
}
