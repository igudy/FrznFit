import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const optionRanges = ["Men", "Women", "Boys", "Girls"];

const Navbar = () => {
  const [selectedOptions, setSelectedOptions] = useState<string | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <View className="relative z-10">
      {/* Main Navbar */}
      <View className="flex justify-between items-center flex-row bg-white">
        {/* Logo */}
        <Image
          source={require("../../assets/images/new/image8.png")}
          style={{ width: 50, height: 50, marginVertical: 20 }}
          className="rounded-full image-contain"
        />

        {/* Dropdown Trigger */}
        <TouchableOpacity
          onPress={() => setShowDropdown(!showDropdown)}
          className={`flex-row justify-between items-center rounded-full px-5 py-3 ${
            showDropdown ? "bg-gray-200" : "bg-gray-100"
          }`}
        >
          <Text
            className={`text-lg font-clashMedium ${
              selectedOptions ? "text-gray-900" : "text-gray-500"
            }`}
          >
            {selectedOptions || "Men"}
          </Text>
          <Ionicons
            name={showDropdown ? "chevron-up" : "chevron-down"}
            size={20}
            color="#6B7280"
          />
        </TouchableOpacity>

        {/* Cart Button */}
        <TouchableOpacity className="bg-purple-600 p-2 rounded-full relative">
          <Ionicons name="cart-outline" size={15} color="#F3F4F6" />
          {/* <View className="absolute -top-1 -right-1 bg-gray-200 rounded-full w-5 h-5 flex items-center justify-center">
            <Text className="text-xs text-gray-800">0</Text>
          </View> 
          */}
        </TouchableOpacity>
      </View>

      {/* Dropdown (positioned absolutely so it doesn't push content) */}
      {showDropdown && (
        <View className="absolute top-0 bottom-0 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden z-20">
          {optionRanges.map((range) => (
            <TouchableOpacity
              key={range}
              onPress={() => {
                setSelectedOptions(range);
                setShowDropdown(false);
              }}
              className={`px-5 py-3 ${
                selectedOptions === range ? "bg-purple-50" : ""
              }`}
            >
              <Text
                className={`text-base ${
                  selectedOptions === range
                    ? "text-purple-600 font-medium"
                    : "text-gray-800"
                }`}
              >
                {range}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default Navbar;
