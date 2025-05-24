import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import Navbar from "@/components/home/Navbar";
import Categories from "@/components/home/Categories";
import TopSelling from "@/components/home/TopSelling";
import NewIn from "@/components/home/NewIn";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Main ScrollView wrapping all content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }} // Add bottom padding
      >
        <View className="px-4">
          {/* Navbar */}
          <Navbar />

          {/* Search Bar */}
          <View className="flex-row items-center bg-gray-100 rounded-full px-4 py-3 mt-4">
            <Text className="text-gray-400 mr-2">🔍</Text>
            <TextInput
              placeholder="Search"
              placeholderTextColor="#999"
              className="flex-1 text-base text-black"
            />
          </View>
        </View>

        {/* Categories */}
        <Categories />

        {/* TopSelling */}
        <TopSelling />

        {/* NewIn */}
        <NewIn />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
