import { Stack } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function Layout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: Colors[colorScheme ?? "light"].background,
        },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
    </Stack>
  );
}
