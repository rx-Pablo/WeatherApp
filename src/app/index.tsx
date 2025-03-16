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
      <WeatherData  day={0}/>
      <WeatherHourly />
      <View className='flex flex-row justify-between pl-1 pr-1 pt-2 pb-5'>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <WeatherDaily day={0}/>
          <WeatherDaily day={1}/>
          <WeatherDaily day={2}/>
          <WeatherDaily day={3}/>
          <WeatherDaily day={4}/>
          <WeatherDaily day={5}/>
          <WeatherDaily day={6}/>  
        </ScrollView>      
      </View>
    </Screen>
  );
}

