// app/home/[id].tsx
import { View, Text, Image, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { useGetProductByIdQuery } from "@/components/apis/productApi";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  const { data: product, isLoading, error } = useGetProductByIdQuery(id);
  console.log("🚀 ~ ProductDetails ~ product:", product);

  if (isLoading) return <ActivityIndicator size="large" color="#000" />;
  if (error) return <Text>Error loading product</Text>;

  return (
    <SafeAreaView className="p-4">
      <Image
        source={{ uri: product.productImg }}
        style={{ width: "100%", height: 200 }}
        resizeMode="contain"
      />
      <Text className="text-2xl font-bold mt-4">{product.name}</Text>
      <Text className="text-lg text-gray-700">${product.price}</Text>
      {product.falsePrice && (
        <Text className="text-base line-through text-gray-400">
          ${product.falsePrice}
        </Text>
      )}
      <Text className="mt-4 text-gray-600">{product.description}</Text>
    </SafeAreaView>
  );
};

export default ProductDetails;
