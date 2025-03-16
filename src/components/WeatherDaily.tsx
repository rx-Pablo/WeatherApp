import { Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
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
    return <></>;
  }

  const dayForecast = weatherData.forecast.forecastday[day];
  const dayName = obtenerNombreDelDia(dayForecast.date);

  // Función para determinar y renderizar el ícono de acuerdo a la condición
  const renderWeatherIcon = () => {
    const conditionText = dayForecast.day.condition.text.toLowerCase();
    
    if (conditionText.includes("rain")) {
      if (conditionText.includes("sun")) {
        return <CloudSunRainIcon size={25} className="pb-1" />;
      }
      return <CloudRainIcon size={25} className="pb-1" />;
    } else if (conditionText.includes("cloud")) {
      return <CloudIcon size={25} className="pb-1" />;
    } else {
      return <SunIcon size={25} className="pb-1" />;
    }
  };

  const roundTemperature = (temp: number): number => {
    return Math.round(temp);
  };

  return (
    <View className='pl-2 pr-2 pt-1 pb-3'>
      <View className='bg-[#7FB6EC80] bg-opacity-75 h-72 w-52 rounded-3xl flex flex-col items-center'>
        <Text className='text-2xl font-bold text-white pt-2 pb-2'>{dayName}</Text>
        <View className='flex flex-row pt-8'>
          <Text className='text-lg text-white font-semibold'>{dayForecast.day.condition.text}</Text>
          {renderWeatherIcon()}
        </View>
        <View className='flex flex-row justify-between w-40 pt-5'>
            <Text className='text-lg text-white pt-2 font-semibold'>Min: {roundTemperature(dayForecast.day.mintemp_c)}°</Text>               
            <Text className='text-lg font-normal text-white pt-2 pl-2 pr-2 font-semibold'>Max: {roundTemperature(dayForecast.day.maxtemp_c)}°</Text>               
          </View>
      </View>
    </View>
  );
}
