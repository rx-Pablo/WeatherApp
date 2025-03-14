import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

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

export default function WeatherData({day}) {
    
    const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);
    async function getWeatherData() {
    const weatherData = await fetch('https://api.weatherapi.com/v1/forecast.json?key=53d4751b1e4646c297a03153250503&q=Buenos-Aires&days=7')
        .then(response => response.json());

        setWeatherData(weatherData);

    return weatherData;
    }

    useEffect(() => {
        getWeatherData();
    }, []);

    if (!weatherData) {
    return <Text>Cargando datos...</Text>;
    }
    
    const dayForecast = weatherData.forecast.forecastday[day];

    if (weatherData)
    {
        return (
            <View className='pl-4 pr-2 pt-6'>
                <View className='h-72 rounded-3xl flex flex-col'>
                    <View className='flex flex-row items-center pt-24'>
                        <Text className='text-white font-bold text-3xl pl-4 pt-3 pb-8'>{weatherData.location.name}:</Text>
                        <Text className='text-white font-bold text-7xl pt-4 pl-12'>{weatherData.current.temp_c}°</Text>
                    </View>
                    <View className='flex flex-row justify-between w-86 pt-5'>
                        <Text className='text-white font-bold text-2xl pl-5 pt-8'>Min: {dayForecast.day.mintemp_c}</Text>
                        <Text className='text-white font-bold text-2xl pt-8 pr-8'>Max: {dayForecast.day.maxtemp_c}</Text>
                    </View>
                </View>
            </View>
        );
    }
    return (
        <></>
    )
}