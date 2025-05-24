import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const addresses = [
  "2715 Ash Dr. San Jose, South Dakota 83475",
  "2715 Ash Dr. San Jose, South Dakota 83475",
];

const AddressItem = ({ address }: { address: string }) => (
  <View className="bg-gray-100 rounded-xl px-4 py-5 mb-3 mx-4 flex-row justify-between items-center">
    <Text className="text-sm text-gray-800 flex-1" numberOfLines={1}>
      {address}
    </Text>
    <TouchableOpacity>
      <Text className="text-purple-500 font-medium text-sm">Edit</Text>
    </TouchableOpacity>
  </View>
);

const AddressScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="flex-row items-center justify-center relative py-4">
        <TouchableOpacity
          className="absolute left-4 top-4 bg-gray-100 p-2 rounded-full"
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={20} color="black" />
        </TouchableOpacity>
        <Text className="text-lg font-clashBold text-black my-2">Address</Text>
      </View>

      {/* Address List */}
      <FlatList
        data={addresses}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <AddressItem address={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default AddressScreen;
