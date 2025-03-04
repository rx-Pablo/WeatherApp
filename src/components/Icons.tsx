import React from 'react';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';

export const SunIcon = (props) => (
    <Ionicons name="sunny" size={24} color="white"  {...props} />
);

export const CloudRainIcon = (props) => (
    <FontAwesome5 name="cloud-showers-heavy" size={24} color="white" {...props} />
);

export const CloudSunRainIcon = (props) => (
    <FontAwesome5 name="cloud-sun-rain" size={24} color="white" {...props} />
);

export const CloudIcon = (props) => (
    <FontAwesome5 name="cloud" size={24} color="white" {...props} />
);

export const SearchIcon = (props) => (
    <FontAwesome5 name="search" size={18} color="gray" {...props} />
);