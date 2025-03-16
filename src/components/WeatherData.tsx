import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SunIcon, CloudRainIcon, CloudSunRainIcon, CloudIcon } from './Icons';

type ForecastDay = {
  date: string;
  day: {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
  };
};

type WeatherDataType = {
  location: {
    name: string;
  };
  current: {
    temp_c: number;
    feelslike_c: number;
    humidity: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
  };
  forecast: {
    forecastday: ForecastDay[];
  };
};

type WeatherDataProps = {
  day: number;
};

export default function WeatherData({ day }: WeatherDataProps) {
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);

  async function getWeatherData() {
    const data = await fetch(
      'https://api.weatherapi.com/v1/forecast.json?key=53d4751b1e4646c297a03153250503&q=Buenos-Aires&days=7'
    ).then((response) => response.json());
    setWeatherData(data);
    return data;
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  if (!weatherData) {
    return <></>;
  }

  const dayForecast = weatherData.forecast.forecastday[day];
  const conditionText = dayForecast.day.condition.text;

  const renderWeatherIcon = () => {
    const lowerCaseCondition = conditionText.toLowerCase();

    if (lowerCaseCondition.includes('rain')) {
      if (lowerCaseCondition.includes('sun')) {
        return <CloudSunRainIcon size={52} />;
      }
      return <CloudRainIcon size={52} />;
    } else if (lowerCaseCondition.includes('cloud')) {
      return <CloudIcon size={52} />;
    } else {
      return <SunIcon size={52} />;
    }
  };

  const roundTemperature = (temp: number): number => {
    return Math.round(temp);
  };
  
  return (
    <View className="pl-4 pr-2 pb-2">
      <View className="h-64 rounded-3xl flex flex-col">
        <View className="flex items-center pt-8">
          <Text className="text-white font-bold text-3xl pt-1 pb-2">{weatherData.location.name}</Text>
          <Text className="text-white font-bold text-7xl pt-2 pl-10">{roundTemperature(weatherData.current.temp_c)}° </Text>
          <Text className="text-white font-bold text-4xl pt-2 ">{weatherData.current.condition.text}</Text>
          <View className="flex flex-row pt-4">
            <Text className="text-white font-bold text-2xl">{roundTemperature(dayForecast.day.mintemp_c)}° - </Text>
            <Text className="text-white font-bold text-2xl">{roundTemperature(dayForecast.day.maxtemp_c)}°</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
