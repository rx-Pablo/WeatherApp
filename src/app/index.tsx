import React from "react";
import Screen from "@/components/Screen";
import SearchBar from "@/components/SearchBar";
import WeatherHourly from "@/components/WeatherHourly";
import WeatherDaily from "@/components/WeatherDaily";
import WeatherData from "@/components/WeatherData";
import { ScrollView, View } from "react-native";

export default function Page() {
  return (
    <Screen>
      <SearchBar />
      <WeatherData />
      <WeatherHourly />
      <View className='flex flex-row justify-between pl-1 pr-1 pt-5 pb-5'>
        <ScrollView horizontal={true}>
          <WeatherDaily />
          <WeatherDaily />
          <WeatherDaily />
          <WeatherDaily />
          <WeatherDaily />
          <WeatherDaily />
          <WeatherDaily />  
        </ScrollView>      
      </View>
    </Screen>
  );
}

