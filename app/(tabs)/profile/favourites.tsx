import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const favoriteItems = [
  {
    id: "1",
    title: "Nike Fuel Pack",
    price: "$32.00",
    image: require("../../../assets/images/new/fav1.png"),
  },
  {
    id: "2",
    title: "Nike Show X Rush",
    price: "$204",
    image: require("../../../assets/images/new/fav2.png"),
  },
  {
    id: "3",
    title: "Men's T-Shirt",
    price: "$45.00",
    image: require("../../../assets/images/new/fav3.png"),
  },
  {
    id: "4",
    title: "Men’s Skate T-Shirt",
    price: "$45.00",
    image: require("../../../assets/images/new/fav4.png"),
  },
];

const numColumns = 2;
const screenWidth = Dimensions.get("window").width;
const itemWidth = screenWidth / numColumns - 24;

const FavoriteItem = ({ item }: { item: (typeof favoriteItems)[0] }) => (
  <View
    className="bg-white rounded-xl border border-[1px] border-purple-600 rounded-full mb-4 mx-2"
    style={{ width: itemWidth }}
  >
    <View className="relative">
      <Image
        source={item.image}
        style={{ width: "100%", height: 140, borderRadius: 12 }}
        resizeMode="cover"
      />

      <Ionicons
        name="heart"
        size={18}
        color="red"
        className="absolute top-2 right-2"
      />
    </View>
    <View className="mt-2 px-1">
      <Text className="text-xs text-black">{item.title}</Text>
      <Text className="text-sm font-bold my-1 mb-1">{item.price}</Text>
    </View>
  </View>
);

const FavoritesScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center justify-center relative py-4">
        <TouchableOpacity
          className="absolute left-4 top-4 bg-gray-100 p-2 rounded-full"
          onPress={() => router.back()}
        >
          <Ionicons name="chevron-back" size={20} color="black" />
        </TouchableOpacity>
        <Text className="text-lg my-2 font-clashBold text-black">
          My Favourites ({favoriteItems.length})
        </Text>
      </View>

      <FlatList
        data={favoriteItems}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        renderItem={({ item }) => <FavoriteItem item={item} />}
        contentContainerStyle={{ paddingBottom: 20, paddingHorizontal: 8 }}
      />
    </SafeAreaView>
  );
};

export default FavoritesScreen;
