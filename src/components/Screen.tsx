import { View, ImageBackground } from "react-native";

export default function Screen({ children }) {
    return (
        <ImageBackground className="flex-1 w-full h-full relative" source={require('../assets/land.jpg')} resizeMode="cover" blurRadius={3}><View className="flex-1 pt-4">{children}</View></ImageBackground>
    );
}