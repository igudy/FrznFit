import { View, Text, ScrollView, Image } from "react-native";
import React from "react";

const categories = [
  { title: "Hoodies", image: require("../../assets/images/new/cat1.png") },
  { title: "Shorts", image: require("../../assets/images/new/cat2.png") },
  { title: "Shoes", image: require("../../assets/images/new/cat3.png") },
  { title: "Bag", image: require("../../assets/images/new/cat4.png") },
  {
    title: "Hoodies",
    image: require("../../assets/images/new/image5.png"),
  },
  {
    title: "Slippers",
    image: require("../../assets/images/new/image2.png"),
  },
  {
    title: "Female Hoodies",
    image: require("../../assets/images/new/image3.png"),
  },
];

const Categories = () => {
  return (
    <>
      {/* Categories */}
      <View className="flex-row justify-between items-center mt-6 mb-4 px-4">
        <Text className="font-clashBold text-2xl mb-3">Categories</Text>
        <Text className="text-sm font-clashMedium text-gray-500 mr-2">
          See All
        </Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginRight: 6 }}
      >
        {categories.map((item, index) => (
          <View
            key={index}
            className="items-center mr-5"
            style={{ marginHorizontal: 3 }}
          >
            <View className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden items-center justify-center">
              <Image
                source={item.image}
                style={{ width: 64, height: 64 }}
                resizeMode="cover"
              />
            </View>
            <Text
              className="text-md mt-1 font-clashMedium text-center"
              numberOfLines={1}
              style={{ maxWidth: 70 }}
            >
              {item.title}
            </Text>
          </View>
        ))}
      </ScrollView>
    </>
  );
};

export default Categories;
