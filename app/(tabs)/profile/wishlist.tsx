import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const wishlistCategories = [
  { name: "My Favorite", count: 12 },
  { name: "T-Shirts", count: 4 },
];

const WishlistScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center justify-center relative py-4">
        <TouchableOpacity
          className="absolute left-4 top-4 bg-gray-100 p-2 rounded-full"
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={20} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-clashBold text-black">Wishlist</Text>
      </View>

      <FlatList
        data={wishlistCategories}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="bg-gray-100 rounded-xl px-4 py-5 mb-3 mx-4 flex-row justify-between items-center"
            // onPress={() => router.push("/favorites")} // adjust this route to match your file name
          >
            <View className="flex-row items-center space-x-3">
              <Ionicons name="heart-outline" size={20} color="black" />
              <View>
                <Text className="text-sm font-clashMedium text-black">
                  {item.name}
                </Text>
                <Text className="text-xs text-gray-500">
                  {item.count} Products
                </Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={20} color="gray" />
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default WishlistScreen;
