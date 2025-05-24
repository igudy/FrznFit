import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const notifications = [
  {
    id: "1",
    message:
      "Gilbert, you placed an order check your order history for full details",
    isNew: true,
  },
  {
    id: "2",
    message:
      "Gilbert, Thank you for shopping with us we have canceled order #24568.",
    isNew: false,
  },
  {
    id: "3",
    message:
      "Gilbert, your Order #24568 has been confirmed check your order history for full details",
    isNew: false,
  },
  {
    id: "4",
    message:
      "Gilbert, your Order #24568 has been confirmed check your order history for full details",
    isNew: false,
  },
  {
    id: "5",
    message:
      "Gilbert, your Order #24568 has been confirmed check your order history for full details",
    isNew: false,
  },
  {
    id: "6",
    message:
      "Gilbert, your Order #24568 has been confirmed check your order history for full details",
    isNew: false,
  },
];

const NotificationItem = ({ item }: { item: (typeof notifications)[0] }) => (
  <View className="bg-gray-100 p-4 rounded-xl mb-3 flex-row items-start gap-3 mx-4">
    <View className="relative">
      <Ionicons name="notifications-outline" size={24} color="#000" />
      {item.isNew && (
        <View className="w-2.5 h-2.5 bg-red-500 rounded-full absolute top-0 right-0" />
      )}
    </View>
    <Text className="text-sm text-gray-800 font-clashMedium flex-1">
      {item.message}
    </Text>
  </View>
);

const Notifications = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Text className="text-center text-2xl font-clashBold my-4">
        Notifications
      </Text>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <NotificationItem item={item} />}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </SafeAreaView>
  );
};

export default Notifications;
