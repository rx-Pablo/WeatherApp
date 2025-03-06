import { Text, View } from 'react-native';
import React from 'react';

export default function WeatherData() {
    return (
        <View className='pl-4 pr-2 pt-6'>
            <View className='h-72 rounded-3xl flex flex-col'>
                <View className='flex flex-row items-center pt-24'>
                    <Text className='text-white font-bold text-3xl pl-6 pt-3 pb-8'>CITY:</Text>
                    <Text className='text-white font-bold text-7xl pt-4 pl-16'>29°</Text>
                </View>
                <View className='flex flex-row justify-between w-86 pt-5'>
                    <Text className='text-white font-bold text-2xl pl-5 pt-8'>Min: 24°</Text>
                    <Text className='text-white font-bold text-2xl pt-8 pr-8'>Max: 32°</Text>
                </View>
            </View>
        </View>
    );
}