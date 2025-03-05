import { View, Text } from "react-native";
import Config from 'react-native-config';

export default function Weather() {

    fetch(`http://api.weatherapi.com/v1/current.json?key=${Config.API_KEY}&q=Buenos-Aires`)
        .then(response => response.json())
        .then(data => {});
        
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${Config.API_KEY}&q=Buenos%20Aires&days=7`)
        .then(response => response.json())
        .then(data => {});

    return (
        <View>
            
        </View>
    );
}