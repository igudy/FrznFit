import { View, Text } from "react-native";
import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/auth/authEmail");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-purple-500">
      <Text className="text-white font-clashBold text-5xl font-bold">
        FrznFit
      </Text>
    </View>
  );
}

// npx expo start -c (to clear expo cache data)
