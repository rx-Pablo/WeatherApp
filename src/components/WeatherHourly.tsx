import { Text, View, ScrollView } from 'react-native';
import React from 'react';

export default function WeatherHourly() {
    return (
        <View className='pl-4 pr-4 pt-1'>
            <View className='bg-[#7FB6EC80] bg-opacity-75 h-40 w-full rounded-3xl flex flex-col items-center'>
                <ScrollView horizontal={true}>
                    <View className='bg-white h-2 w-50'></View>
                </ScrollView>
            </View>
        </View>
    );
}