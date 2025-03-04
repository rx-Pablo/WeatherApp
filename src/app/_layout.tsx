import "../global.css";
import React from "react";
import { View, Text } from "react-native";
import { Stack } from "expo-router";
import { SunIcon } from "@/components/Icons";

export default function Layout() {
  return <Stack 
    screenOptions={{
      headerLeft: () => <Text className="pl-2 text-2xl font-extrabold flex-1 text-white">Weather App <View style={{ marginTop: 12}}><SunIcon /></View></Text>,
      headerStyle: {
        backgroundColor: "#5A9ADA",
      },
      headerBackground: () => <View className="bg-blue-500 h-14"></View>,
    }} 
  />;
}
