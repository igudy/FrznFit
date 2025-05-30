import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useGetProductByIdQuery } from "@/components/apis/productApi";
import { useState } from "react";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const { data: product, isLoading, error } = useGetProductByIdQuery({ id });
  const [quantity, setQuantity] = useState(1);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()} className="p-4">
        <Ionicons name="arrow-back" size={24} color="#6B7280" />
      </TouchableOpacity>

      {isLoading ? (
        <>
          <ActivityIndicator size="large" color="#000" />
        </>
      ) : error ? (
        <Text className="bg-red-500">Error loading details</Text>
      ) : (
        <>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* Product Images */}
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
            >
              {[product?.productImg].map((img, index) => (
                <Image
                  key={index}
                  source={{ uri: img }}
                  // className="rounded-lg"
                  style={{
                    width: Dimensions.get("window").width,
                    height: 300,
                  }}
                  resizeMode="cover"
                />
              ))}
              {/* {[product?.productImg, product?.productImg].map((img, index) => (
                <Image
                  key={index}
                  source={{ uri: img }}
                  style={{ width: 375, height: 360, marginTop: 10 }}
                  className="rounded-lg"
                  resizeMode="cover"
                />
              ))} */}
            </ScrollView>

            {/* Title & Price */}
            <Text className="font-clashBold text-4xl px-3 text-gray-500 my-1">
              {product?.name}
            </Text>
            <View className="px-3 flex flex-row items-center">
              <Text className="text-purple-600 font-clashBold text-2xl items-center font-bold mt-1">
                ${product?.price.toFixed(2)}
              </Text>
              {product?.falsePrice && (
                <Text className="text-gray-400  text-lg ml-1 font-clashLight line-through">
                  ${product?.falsePrice.toFixed(2)}
                </Text>
              )}
            </View>

            {/* Size Picker */}
            <View className="px-4 mt-4">
              <Text className="text-sm text-gray-500 mb-1 font-clashBold mb-1 ">
                Size
              </Text>
              <TouchableOpacity className="p-3 bg-gray-100 rounded-lg flex-row justify-between items-center">
                <Text className="text-gray-700 ">S</Text>
                <Ionicons name="chevron-down" size={20} color="#6B7280" />
              </TouchableOpacity>
            </View>

            {/* Color Picker */}
            <View className="px-4 mt-4">
              <Text className="text-sm text-gray-500 mb-1 font-clashBold mb-1">
                Color
              </Text>
              <TouchableOpacity className="p-3 bg-gray-100 rounded-lg flex-row justify-between items-center">
                <View className="w-4 h-4 rounded-full bg-green-500" />
                <Ionicons name="chevron-down" size={20} color="#6B7280" />
              </TouchableOpacity>
            </View>

            {/* Quantity Selector */}
            <View className="px-4 mt-4 flex flex-row gap-4 items-center">
              <Text className="text-sm text-gray-500 mb-1 font-clashBold ">
                Quantity
              </Text>
              <View className="flex-row items-center bg-purple-500 text-white rounded-lg p-2 justify-between w-[170px]">
                <TouchableOpacity
                  onPress={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Text className="font-clashBold text-4xl text-white">-</Text>
                </TouchableOpacity>
                <Text className="font-clashBold text-white text-4xl">
                  {quantity}
                </Text>
                <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                  <Text className="text-xl font-clashBold text-4xl text-white">
                    +
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Description */}
            <View className="px-4 mt-6">
              <Text className="text-sm text-gray-500">
                {product?.description || "No description available."}
              </Text>
            </View>

            {/* Shipping & Returns */}
            <View className="px-4 mt-6">
              <Text className="text-sm font-semibold text-gray-800 mb-1">
                Shipping & Returns
              </Text>
              <Text className="text-sm text-gray-500">
                Free standard shipping and free 60-day returns
              </Text>
            </View>

            {/* Reviews */}
            <View className="px-4 mt-6">
              <Text className="text-base font-semibold text-gray-800">
                4.5 Ratings
              </Text>
              <Text className="text-xs text-gray-500 mb-2">213 Reviews</Text>

              {[1, 2].map((_, index) => (
                <View key={index} className="flex-row items-start mt-3">
                  <Image
                    source={{
                      uri: "https://randomuser.me/api/portraits/men/75.jpg",
                    }}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <View>
                    <Text className="font-semibold text-sm text-gray-700">
                      Alex Morgan
                    </Text>
                    <Text className="text-xs text-gray-500">
                      Gucci transcribes its heritage, creativity, and
                      innovation...
                    </Text>
                    <View className="flex-row mt-1">
                      {[...Array(4)].map((_, i) => (
                        <Ionicons
                          key={i}
                          name="star"
                          size={14}
                          color="#fbbf24"
                          className="mr-1"
                        />
                      ))}
                      <Ionicons name="star-outline" size={14} color="#fbbf24" />
                    </View>
                  </View>
                </View>
              ))}
            </View>
            <View className="flex-row items-center justify-between p-4 bg-white shadow-lg">
              <Text className="text-lg font-clashBold">
                ${product?.price.toFixed(2)}
              </Text>
              <TouchableOpacity className="bg-purple-600 px-8 py-3 rounded-full">
                <Text className="text-4xl text-gray-500 mb-1 font-clashBold text-white">
                  Add to Bag
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </>
      )}
    </SafeAreaView>
  );
};

export default ProductDetails;
