import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const orderTabs = [
  "Processing",
  "Shipped",
  "Delivered",
  "Returned",
  "Cancelled",
];

const orderData = [
  { id: "#456765", items: 4, status: "Processing" },
  { id: "#454569", items: 2, status: "Shipped" },
  { id: "#454809", items: 1, status: "Processing" },
  { id: "#454570", items: 3, status: "Shipped" },
  { id: "#454811", items: 1, status: "Processing" },
  { id: "#454572", items: 5, status: "Delivered" },
  { id: "#454573", items: 1, status: "Returned" },
  { id: "#454574", items: 2, status: "Cancelled" },
];

const Orders = () => {
  const [activeTab, setActiveTab] = useState("Processing");

  // Filter orders based on active tab
  const filteredOrders = orderData.filter((order) =>
    activeTab === "All" ? true : order.status === activeTab
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <Text className="text-center text-xl font-clashBold my-4">Orders</Text>

        {/* Tabs */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          className="mb-4"
        >
          {orderTabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`min-w-[80px] h-8 justify-center items-center mr-2 rounded-full ${
                activeTab === tab ? "bg-purple-500" : "bg-gray-100"
              }`}
            >
              <Text
                className={`text-xs ${
                  activeTab === tab ? "text-white" : "text-gray-800"
                } font-medium`}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Order List */}
        <View className="px-4 space-y-3" style={{ marginHorizontal: 6 }}>
          {filteredOrders.map((order) => (
            <TouchableOpacity
              key={order.id}
              style={{ marginTop: 10 }}
              className="bg-gray-50 p-4 rounded-xl flex-row items-center justify-between border border-gray-200"
            >
              <View className="flex-row items-center space-x-3">
                <View
                  className={`p-2 rounded-full ${
                    order.status === "Processing"
                      ? "bg-amber-100"
                      : order.status === "Shipped"
                      ? "bg-blue-100"
                      : "bg-gray-100"
                  }`}
                >
                  <Ionicons
                    name="cube-outline"
                    size={20}
                    color={
                      order.status === "Processing"
                        ? "#f59e0b"
                        : order.status === "Shipped"
                        ? "#3b82f6"
                        : "#6b7280"
                    }
                  />
                </View>
                <View>
                  <Text className="text-base font-medium">
                    Order {order.id}
                  </Text>
                  <View className="flex-row items-center space-x-2 mt-1">
                    <Text className="text-gray-500 text-sm">
                      {order.items} item{order.items !== 1 ? "s" : ""}
                    </Text>
                    <View
                      className={`px-2 py-0.5 rounded-full ${
                        order.status === "Processing"
                          ? "bg-amber-50"
                          : order.status === "Shipped"
                          ? "bg-blue-50"
                          : "bg-gray-50"
                      }`}
                    >
                      <Text
                        className={`text-xs ${
                          order.status === "Processing"
                            ? "text-amber-700"
                            : order.status === "Shipped"
                            ? "text-blue-700"
                            : "text-gray-700"
                        }`}
                      >
                        {order.status}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={18} color="#d1d5db" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Orders;
