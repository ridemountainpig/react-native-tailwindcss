import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export default function App() {
    return (
        <View className="flex-1 items-center justify-center bg-black">
            <Text className="text-xl font-semibold text-white">
                React Native With TailwindCss Template
            </Text>
            <StatusBar style="auto" />
        </View>
    );
}
