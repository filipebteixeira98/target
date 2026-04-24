import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

import { Loading } from "@/components/Loading";

import { colors } from "@/theme/colors";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [areFontsLoaded, error] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  useEffect(() => {
    if (areFontsLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [areFontsLoaded, error]);

  if (!areFontsLoaded || !error) {
    return <Loading />;
  }

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: colors.white,
        },
      }}
    />
  );
}
