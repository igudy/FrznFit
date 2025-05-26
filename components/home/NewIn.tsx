import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useGetProductsQuery } from "../apis/productApi";
import { ActivityIndicator } from "react-native";
import { IProduct } from "../apis/interfaces/productApi.interface";

interface ProductListProps {
  products?: IProduct[];
}

const NewIn = ({ products }: ProductListProps) => {
  return (
    <View className="mt-6">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4 px-4">
        <Text className="text-2xl font-clashBold text-purple-600">New In</Text>
        <Text className="text-sm font-semibold text-gray-500">See All</Text>
      </View>

      {/* Product Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="px-4"
      >
        {products
          ?.slice()
          .reverse()
          .map((item) => (
            <View
              key={item._id}
              className="bg-white rounded-xl mr-4 shadow-sm overflow-hidden"
              style={{ width: 140, marginRight: 10 }} 
            >
              <View className="relative">
                <Image
                  source={{ uri: item.productImg }}
                  style={{ width: "100%", height: 120 }}
                  resizeMode="cover"
                />
                <TouchableOpacity className="absolute top-2 right-2 bg-white p-2 rounded-full">
                  <Ionicons name="heart-outline" size={24} color="#6B7280" />
                </TouchableOpacity>
              </View>
              <View className="p-3" style={{ height: 100 }}>
                <Text
                  className="text-sm font-medium font-clashMedium text-gray-800"
                  numberOfLines={2}
                >
                  {item.name}
                </Text>
                <View className="flex-row items-center mt-1">
                  <Text className="text-base font-clashMedium font-bold">
                    ${item.price.toFixed(2)}
                  </Text>
                  {item.falsePrice && (
                    <Text className="font-clashMedium" style={styles.oldPrice}>
                      ${item.falsePrice.toFixed(2)}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  productImage: {
    width: "100%",
    height: 160,
    backgroundColor: "#f5f5f5",
  },
  oldPrice: {
    fontSize: 12,
    color: "#9ca3af",
    textDecorationLine: "line-through",
    marginLeft: 4,
  },
});

export default NewIn;
