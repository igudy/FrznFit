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

const products = [
  {
    id: 1,
    title: "Men's Harrington Jacket",
    price: 74.0,
    oldPrice: 100.97,
    image: require("../../assets/images/new/image10.png"),
  },
  {
    id: 2,
    title: "Max Cirro Men's Slides",
    price: 55.0,
    oldPrice: 89.99,
    image: require("../../assets/images/new/image9.png"),
  },
  {
    id: 3,
    title: "Cotton Crewneck Sweater",
    price: 45.5,
    oldPrice: 65.0,
    image: require("../../assets/images/new/image8.png"),
  },
  {
    id: 4,
    title: "Slim Fit Chino Pants",
    price: 39.99,
    oldPrice: 59.95,
    image: require("../../assets/images/new/image7.png"),
  },
  {
    id: 5,
    title: "Leather Crossbody Bag",
    price: 68.75,
    oldPrice: 85.0,
    image: require("../../assets/images/new/image6.png"),
  },
  {
    id: 6,
    title: "Running Sneakers",
    price: 79.99,
    oldPrice: 120.0,
    image: require("../../assets/images/new/image5.png"),
  },
  {
    id: 7,
    title: "Wool Blend Scarf",
    price: 29.5,
    oldPrice: 45.0,
    image: require("../../assets/images/new/image4.png"),
  },
  {
    id: 8,
    title: "Denim Jacket",
    price: 64.25,
    oldPrice: 89.99,
    image: require("../../assets/images/new/image3.png"),
  },
  {
    id: 9,
    title: "Canvas Backpack",
    price: 49.99,
    oldPrice: 75.5,
    image: require("../../assets/images/new/image2.png"),
  },
  {
    id: 10,
    title: "Aviator Sunglasses",
    price: 35.0,
    oldPrice: 59.99,
    image: require("../../assets/images/new/image.png"),
  },
];

const NewIn = () => {
  return (
    <View className="mt-6">
      {/* Header */}
      <View className="flex-row justify-between items-center mb-4 px-4">
        <Text className="text-lg font-clashBold text-purple-600">New In</Text>
        <Text className="text-sm font-semibold text-gray-500">See All</Text>
      </View>

      {/* Product Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="px-4"
      >
        {products.map((item) => (
          <View
            key={item.id}
            className="w-44 bg-white rounded-xl mr-4 shadow-sm overflow-hidden"
          >
            <View className="relative">
              <Image
                source={item.image}
                style={styles.productImage}
                resizeMode="contain"
              />
              <TouchableOpacity className="absolute top-2 left-2 bg-white p-2 rounded-full">
                <Ionicons name="heart-outline" size={24} color="#6B7280" />
              </TouchableOpacity>
            </View>
            <View className="p-3">
              <Text
                className="text-sm font-clashMedium font-medium text-gray-800"
                numberOfLines={2}
              >
                {item.title}
              </Text>
              <View className="flex-row items-center mt-1">
                <Text className="text-base font-clashMedium font-bold">
                  ${item.price.toFixed(2)}
                </Text>
                {item.oldPrice && (
                  <Text className="font-clashMedium" style={styles.oldPrice}>
                    ${item.oldPrice.toFixed(2)}
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
