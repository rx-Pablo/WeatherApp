import React from "react";
import { View, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Footer() {
    const { bottom } = useSafeAreaInsets();
    return (
      <View
        className="flex shrink-0 bg-gray-100 native:hidden"
        style={{ paddingBottom: bottom }}
      >
    </View>
    );
}