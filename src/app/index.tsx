import React from "react";
import Screen from "@/components/Screen";
import SearchBar from "@/components/SearchBar";
import WeatherHourly from "@/components/WeatherHourly";
import WeatherDaily from "@/components/WeatherDaily";
import WeatherData from "@/components/WeatherData";
import { ScrollView, View } from "react-native";

export default function Page() {
  const [weatherData,setWeatherData]= React.useState(() => {fetch(
    `http://api.weatherapi.com/v1/current.json?key=53d4751b1e4646c297a03153250503&q=Buenos-Aires`
  )
    .then((response) => response.json())
    .then((data) => {
      setWeatherData(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    }
 )});

  return (
    <Screen>
      <SearchBar />
      <WeatherData />
      <WeatherHourly />
      <View className='flex flex-row justify-between pl-1 pr-1 pt-2 pb-5'>
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

