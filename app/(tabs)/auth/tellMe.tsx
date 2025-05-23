import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const ageRanges = ["18-24", "25-34", "35-44", "45+"];

const TellMe = () => {
  const router = useRouter();
  const [shopFor, setShopFor] = useState<"Men" | "Women" | null>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedAge, setSelectedAge] = useState<string | null>(null);

  const handleFinish = () => {
    if (shopFor && selectedAge) {
      console.log("Shop for:", shopFor);
      console.log("Age range:", selectedAge);
      // Add your navigation or submission logic here
    }
    router.push("/home/home");
  };

  return (
    <View className="flex-1 bg-white px-6 pb-10 ">
      {/* Header with back button */}
      <View className="pt-16 mb-8">
        <TouchableOpacity
          onPress={() => router.back()}
          className="absolute top-16 left-0 z-10 p-2"
        >
          <Ionicons name="arrow-back" size={24} color="#6B7280" />
        </TouchableOpacity>
        <Text className="text-3xl font-clashMedium mt-10 text-gray-900 text-center">
          Tell Us About Yourself
        </Text>
      </View>

      {/* Content container */}
      <View className="flex-1">
        <View className="mb-8">
          <Text className="font-clashMedium text-gray-900 mb-3">
            Who do you shop for?
          </Text>
          <View className="flex-row space-x-3">
            {["Men", "Women"].map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => setShopFor(option as "Men" | "Women")}
                className={`flex-1 py-3  rounded-full ${
                  shopFor === option
                    ? "bg-purple-600 border-2 border-purple-600"
                    : "bg-gray-100 border-2 border-gray-200"
                }`}
              >
                <Text
                  className={`text-center font-clashBold text-3xl font-medium ${
                    shopFor === option ? "text-white" : "text-gray-800"
                  }`}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Age selection section */}
        <View className="mb-8">
          <Text className="text-lg font-clashMedium text-xl text-gray-900 mb-3">
            How old are you?
          </Text>
          <TouchableOpacity
            onPress={() => setShowDropdown(!showDropdown)}
            className={`flex-row justify-between items-center rounded-full px-5 py-3 ${
              showDropdown ? "bg-gray-200" : "bg-gray-100"
            }`}
          >
            <Text
              className={`text-base text-lg font-clashMedium text-xl text-gray-900 mb-3 ${
                selectedAge ? "text-gray-900" : "text-gray-500"
              }`}
            >
              {selectedAge || "Select your age range"}
            </Text>
            <Ionicons
              name={showDropdown ? "chevron-up" : "chevron-down"}
              size={20}
              color="#6B7280"
            />
          </TouchableOpacity>

          {/* Age dropdown */}
          {showDropdown && (
            <View className="mt-2 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              {ageRanges.map((range) => (
                <TouchableOpacity
                  key={range}
                  onPress={() => {
                    setSelectedAge(range);
                    setShowDropdown(false);
                  }}
                  className={`px-5 py-3 ${
                    selectedAge === range ? "bg-purple-50" : ""
                  }`}
                >
                  <Text
                    className={`text-base ${
                      selectedAge === range
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
      </View>

      {/* Finish button */}
      <TouchableOpacity
        className={`py-4 rounded-full items-center  ${
          shopFor && selectedAge ? "bg-purple-600" : "bg-purple-300"
        }`}
        onPress={handleFinish}
        disabled={!shopFor || !selectedAge}
      >
        <Text className="text-white font-medium text-lg text-lg font-clashBold text-xl">
          Finish
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TellMe;
