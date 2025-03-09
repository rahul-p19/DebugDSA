import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    'SpaceGrotesk-Medium': require('./../assets/fonts/SpaceGrotesk-Medium.ttf')
  })

  useEffect(() => {
    if (loaded || error) SplashScreen.hideAsync();
  }, [loaded, error])

  if (!loaded && !error) {
    return null;
  }

  return <Stack>
    <Stack.Screen name="index" options={{ headerShown: false, title: 'DebugDSA' }} />
    <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    <Stack.Screen name="(auth)" options={{ headerShown: false }} />
  </Stack>;
}
