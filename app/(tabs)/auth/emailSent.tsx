import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const EmailSent = () => {
  const router = useRouter();
  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <TouchableOpacity
        onPress={() => router.back()}
        className="absolute top-14 left-6 z-10"
      >
        <Ionicons name="arrow-back" size={24} color="#6B7280" />
      </TouchableOpacity>

      <Image
        source={require("../../../assets/images/auth/mailSent.png")}
        className="w-20 h-20 my-5"
      />

      <Text className="font-clashMedium text-black text-lg font-semiboldtext-gray-800 mb-10">
        We Sent you an Email to reset your password.
      </Text>
      {/* Button */}
      <TouchableOpacity
        className="bg-purple-600 rounded-full p-4 items-center mb-4"
        onPress={() => router.push("/auth/tellMe")}
      >
        <Text className="text-white font-medium text-lg text-lg font-clashBold text-xl">
          Return to Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailSent;
