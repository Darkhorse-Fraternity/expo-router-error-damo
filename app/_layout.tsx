/*
 * @Author: tonyYo
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: tonyYo
 * @LastEditTime: 2025-04-22 17:59:27
 * @FilePath: /my-app/app/_layout.tsx
 */
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={ DefaultTheme}>
      <Stack>
        <Stack.Screen name="test0"  />
        <Stack.Screen name="start"  />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
