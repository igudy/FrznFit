import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <Navbar />
      <Hero />
    </SafeAreaView>
  );
};

export default Home;
