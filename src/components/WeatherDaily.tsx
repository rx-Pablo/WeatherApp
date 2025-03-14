import { Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SunIcon } from './Icons';

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

type WeatherDailyProps = {
  day: number;
};

export default function WeatherDaily({ day }: WeatherDailyProps) {
  const [weatherData, setWeatherData] = useState<WeatherDataType | null>(null);

  async function getWeatherData() {
    try {
      const data = await fetch(
        'https://api.weatherapi.com/v1/forecast.json?key=53d4751b1e4646c297a03153250503&q=Buenos-Aires&days=7'
      ).then(response => response.json());
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  function obtenerNombreDelDia(fechaStr: string): string {
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    const fecha = new Date(fechaStr);
    const indiceDia = fecha.getDay();
    return dias[indiceDia];
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  if (!weatherData) {
    return <Text>Cargando datos...</Text>;
  }

  const dayForecast = weatherData.forecast.forecastday[day];
  const dayName = obtenerNombreDelDia(dayForecast.date);

  return (
    <View className='pl-3 pr-3 pt-3 pb-6'>
      <View className='bg-[#7FB6EC80] bg-opacity-75 h-56 w-48 rounded-3xl flex flex-col items-center'>
        <Text className='text-lg font-bold text-white pt-2 pb-4'>{dayName}</Text>
        <SunIcon size={85} className="pb-1" />
        <View className='flex flex-row justify-between w-40 pt-5'>
          <Text className='text-lg font-normal text-white pt-2'>Min: {dayForecast.day.mintemp_c}°</Text>               
          <Text className='text-lg font-normal text-white pt-2'>Max: {dayForecast.day.maxtemp_c}°</Text>               
        </View>
      </View>
    </View>
  );
}
