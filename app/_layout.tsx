import { Stack } from 'expo-router';
import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router/react-navigation';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/use-color-scheme';

export const unstable_settings = {
  anchor: 'index',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="deportista/login" options={{ headerShown: false }} />
        <Stack.Screen name="entrenador/login" options={{ headerShown: false }} />
        <Stack.Screen name="administracion/login" options={{ headerShown: false }} />
        <Stack.Screen name="administracion/panel" options={{ headerShown: false }} />
        <Stack.Screen name="deportista/panel" options={{ headerShown: false }} />
        <Stack.Screen name="entrenador/panel" options={{ headerShown: false }} />
        <Stack.Screen name="deportista/perfil" options={{ headerShown: false }} />
        <Stack.Screen name="deportista/horario" options={{ headerShown: false }} />
        <Stack.Screen name="deportista/asistencia" options={{ headerShown: false }} />
        <Stack.Screen name="deportista/pagos" options={{ headerShown: false }} />
        <Stack.Screen name="entrenador/deportistas" options={{ headerShown: false }} />
        <Stack.Screen name="entrenador/horarios" options={{ headerShown: false }} />
        <Stack.Screen name="entrenador/asistencia" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
