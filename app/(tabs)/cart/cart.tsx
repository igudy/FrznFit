import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function CartScreen() {
  const router = useRouter();
  return (
    <ScrollView className="flex-1 bg-white px-4 pt-12">
      <TouchableOpacity onPress={() => router.back()} className="">
        <Ionicons name="arrow-back" size={24} color="#6B7280" />
      </TouchableOpacity>
      {/* Header */}
      <View className="flex-row items-center justify-between my-6">
        <Text className="font-clashMedium text-lg">Cart</Text>
        <Text className="font-clashSemi text-sm text-gray-600">Remove All</Text>
      </View>

      {/* Cart Items */}
      <View className="flex gap-5">
        {/* Item 1 */}
        <View className="flex-row justify-between items-center bg-gray-100 p-3 rounded-xl">
          <Image
            // source={require("../../assets/images/new/image8.png")}
            source={require("../../../assets/images/new/image8.png")}
            style={{ width: 50, height: 50, marginVertical: 20 }}
            className="rounded-full image-contain"
          />
          <View className="flex-1 px-3">
            <Text className="font-clashMedium text-sm">
              Men's Harrington Jacket
            </Text>
            <Text className="font-clash text-xs text-gray-600">
              Size - <Text className="font-clashMedium">M</Text> Color -{" "}
              <Text className="font-clashMedium">Lemon</Text>
            </Text>
          </View>
          <View className="items-end">
            <Text className="font-clashMedium text-sm">$148</Text>
            <View className="flex-row items-center space-x-2 mt-2">
              <TouchableOpacity className="bg-purple-500 rounded-full w-6 h-6 items-center justify-center">
                <Text className="text-white font-clashBold text-sm">+</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-purple-100 rounded-full w-6 h-6 items-center justify-center">
                <Text className="text-purple-500 font-clashBold text-sm">
                  -
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Item 2 */}
        <View className="flex-row justify-between items-center bg-gray-100 p-3 rounded-xl">
          <Image
            // source={require("../../assets/images/new/image8.png")}
            source={require("../../../assets/images/new/image9.png")}
            style={{ width: 50, height: 50, marginVertical: 20 }}
            className="rounded-full image-contain"
          />
          <View className="flex-1 px-3">
            <Text className="font-clashMedium text-sm">
              Men's Coaches Jacket
            </Text>
            <Text className="font-clash text-xs text-gray-600">
              Size - <Text className="font-clashMedium">M</Text> Color -{" "}
              <Text className="font-clashMedium">Black</Text>
            </Text>
          </View>
          <View className="items-end">
            <Text className="font-clashMedium text-sm">$52.00</Text>
            <View className="flex-row items-center space-x-2 mt-2">
              <TouchableOpacity className="bg-purple-500 rounded-full w-6 h-6 items-center justify-center">
                <Text className="text-white font-clashBold text-sm">+</Text>
              </TouchableOpacity>
              <TouchableOpacity className="bg-purple-100 rounded-full w-6 h-6 items-center justify-center">
                <Text className="text-purple-500 font-clashBold text-sm">
                  -
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>

      {/* Summary */}
      <View className="mt-8 space-y-2">
        <View className="flex-row justify-between">
          <Text className="font-clash text-sm text-gray-700 my-2">
            Subtotal
          </Text>
          <Text className="font-clashMedium text-sm text-gray-800 my-2">
            $200
          </Text>
        </View>
        <View className="flex-row justify-between my-2">
          <Text className="font-clash text-sm text-gray-700">
            Shipping Cost
          </Text>
          <Text className="font-clashMedium text-sm text-gray-800">$8.00</Text>
        </View>
        <View className="flex-row justify-between my-2">
          <Text className="font-clash text-sm text-gray-700">Tax</Text>
          <Text className="font-clashMedium text-sm text-gray-800">$0.00</Text>
        </View>
        <View className="flex-row justify-between">
          <Text className="font-clashBold">Total</Text>
          <Text className="font-clashBold text-xl">$208</Text>
        </View>
      </View>

      {/* Coupon Code */}
      <View className="flex-row items-center bg-gray-100 mt-6 p-3 rounded-xl">
        <Text className="font-clash text-sm text-gray-400 flex-1">
          Enter Coupon Code
        </Text>
        <TouchableOpacity className="bg-purple-500 rounded-full p-2">
          <Text className="text-white font-clashBold text-sm">→</Text>
        </TouchableOpacity>
      </View>

      {/* Checkout Button */}
      <TouchableOpacity className="mt-6 bg-purple-500 py-3 rounded-full items-center">
        <Text className="font-clashBold text-white text-lg">Checkout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
