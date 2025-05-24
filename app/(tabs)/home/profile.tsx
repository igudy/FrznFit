import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

type ProfileRoute =
  | "/(tabs)/profile/address"
  | "/(tabs)/profile/favourites"
  | "/(tabs)/profile/wishlist"
  | "/(tabs)/profile/payment"
  | "/(tabs)/profile/help"
  | "/(tabs)/profile/support";

interface IOptions {
  label: string;
  path: ProfileRoute;
}

const Profile = () => {
  const router = useRouter();

  const options: IOptions[] = [
    { label: "Address", path: "/(tabs)/profile/address" },
    { label: "Favourites", path: "/(tabs)/profile/favourites" },
    { label: "Wishlist", path: "/(tabs)/profile/wishlist" },
    { label: "Payment", path: "/(tabs)/profile/payment" },
    { label: "Help", path: "/(tabs)/profile/help" },
    { label: "Support", path: "/(tabs)/profile/support" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ paddingVertical: 20 }}>
        {/* Profile Image */}
        <View className="items-center mb-5">
          <Image
            source={{ uri: "https://i.imgur.com/7k12EPD.png" }}
            className="w-24 h-24 rounded-full"
          />
        </View>

        {/* User Info */}
        <View className="bg-gray-100 mx-4 p-4 rounded-xl mt-10 mb-6">
          <View className="flex-row justify-between items-start mb-1">
            <Text className="text-lg font-clashBold text-gray-800">
              Gilbert Jones
            </Text>
            <TouchableOpacity>
              <Text className="text-sm text-purple-600 font-medium">Edit</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-gray-500 text-sm">
            Gilbertjones001@gmail.com
          </Text>
          <Text className="text-gray-400 text-sm mt-1">121-224-7890</Text>
        </View>

        {/* Settings Options */}
        <View className="space-y-3 mx-4">
          {options.map(({ label, path }) => (
            <TouchableOpacity
              key={label}
              onPress={() => router.push(path)}
              className="bg-gray-100 p-4 rounded-xl my-2 flex-row justify-between items-center"
            >
              <Text className="text-base text-gray-800 font-clashMedium">
                {label}
              </Text>
              <Ionicons name="chevron-forward" size={18} color="#6b7280" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Sign Out */}
        <TouchableOpacity
          className="mt-20 items-center"
          onPress={() => {
            // Add sign out logic here
            console.log("Sign out pressed");
          }}
        >
          <Text className="text-red-500 font-clashBold text-sm">Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
