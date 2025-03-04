import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Link } from 'expo-router';


export default function Header() {
    const { top } = useSafeAreaInsets();
    return (
        <View className="px-4 lg:px-6 h-14 flex items-center flex-row justify-between ">
           
        
        </View>
    );
}