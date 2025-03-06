import { Text, View } from 'react-native';
import React from 'react';
import { SunIcon } from './Icons';

export default function WeatherDaily() {
    return (
        <View className='pl-3 pr-3 pt-3 pb-6'>
            <View className='bg-[#7FB6EC80] bg-opacity-75 h-56 w-48 rounded-3xl flex flex-col items-center'>
                <Text className='text-lg font-bold text-white pt-2'>Day</Text>
                <Text className='text-lg font-normal text-white pt-2'>Temp: 30°</Text>
                <SunIcon size={52} className="pt-6"/>
                <View className='flex flex-row justify-between w-40 pt-5'>
                    <Text className='text-lg font-normal text-white pt-2'>Min: 23°</Text>               
                    <Text className='text-lg font-normal text-white pt-2'>Max: 32°</Text>               
                </View>
            </View>
        </View>
    );
}