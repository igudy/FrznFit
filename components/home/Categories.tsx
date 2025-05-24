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
        <Text className="font-clashBold mb-3">Categories</Text>
        <Text className="text-sm font-clashMedium text-gray-500 mr-2">
          See All
        </Text>
      </View>

      <View style={{ marginLeft: 2 }}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 1 }}
        >
          {categories.map((item, index) => (
            <View
              key={index}
              className="items-center"
              style={{ marginRight: 20 }}
            >
              <View className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                <Image
                  source={item.image}
                  className="w-full h-full object-cover"
                />
              </View>
              <Text className="text-md mt-1 font-clashMedium">
                {item.title}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Categories;
