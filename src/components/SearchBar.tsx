import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { SearchIcon } from '@/components/Icons';

export default function SearchBar() {
    return (
        <View className='flex justify-center items-center'>
            <View className='bg-white w-96 h-12 flex flex-row items-center pl-8 rounded-full opacity-80'>
                <SearchIcon className="mr-2" /><TextInput className='flex-1 pl-2 pb-1 text-gray-500 text-xl font-semibold' placeholder='Search' placeholderTextColor="gray"/>
            </View>
        </View>
    );
}