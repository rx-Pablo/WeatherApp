import { Text, View, ScrollView } from 'react-native';
import React,{ useState, useEffect } from 'react';
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
    hour: {
      time: string;
      temp_c: number;
      condition: {
        text: string;
        icon: string;
        code: number;
      };
    }[];
  };
  
  type WeatherDataType = {
    location: {
      name: string;
      localtime: string;
    };
    current: {
      temp_c: number;
      feelslike_c: number;
      humidity: number;
      hour: number;
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
  
  
export default function WeatherHourly() {

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
    return <Text>Cargando datos...</Text>;
    };

    const currentLocalTime = new Date(weatherData.location.localtime.replace(" ", "T"));
    const forecastHours = weatherData.forecast.forecastday[0].hour;
    
    const filteredHours = forecastHours.filter(hourData => {
        const hourDate = new Date(hourData.time.replace(" ", "T"));
        return hourDate.getHours() === currentLocalTime.getHours() || hourDate > currentLocalTime;
    });

    const renderWeatherIcon = (hourData: { condition: { text: string } }) => {
        const conditionText = hourData.condition.text.toLowerCase();
        
        if (conditionText.includes("rain")) {
          if (conditionText.includes("sun")) {
            return <CloudSunRainIcon size={28} className="pb-1" />;
          }
          return <CloudRainIcon size={28} className="pb-1" />;
        } else if (conditionText.includes("cloud")) {
          return <CloudIcon size={28} className="pb-1" />;
        } else {
          return <SunIcon size={28} className="pb-1" />;
        }
    };

    return (
        <View className='pl-4 pr-4 pt-1'>
            <View className='bg-[#7FB6EC80] bg-opacity-75 h-40 w-full rounded-3xl flex flex-col items-center'>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {filteredHours.map((hourData, index) => {
                    const hourLabel = hourData.time.split(' ')[1].slice(0,5);
                    return (
                        <View key={index} className='flex flex-1 items-center w-32 h-14'>
                            <Text className='text-white font-extrabold text-l pt-3 pb-3'>{hourData.condition.text}</Text>
                            <View className='pt-3'>
                                {renderWeatherIcon(hourData)}
                            </View>
                            <Text className='text-white font-extrabold text-l pt-3 pb-3'>{hourData.temp_c}°C</Text>
                            <Text className='text-white font-extrabold text-l'>{hourLabel}</Text>                            
                        </View>
                    );
                    })}
                </ScrollView>
            </View>
        </View>
    );
}