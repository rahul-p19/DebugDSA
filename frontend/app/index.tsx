import { Text, View, StatusBar } from "react-native";
import "./global.css"
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex flex-col gap-8 p-8 justify-around items-center h-full w-full bg-background">
      <StatusBar backgroundColor={"#000000"} />
      <Text className="text-primary text-5xl font-bold flex-1">DebugDSA</Text>
      <View className="flex-1 w-2/3 flex flex-col items-center gap-6">
        <Text className="text-center text-4xl font-bold text-textColor">Debug your DSA Journey.</Text>
        <Link href={"/login"} className="bg-primary text-textColor px-6 py-2 text-lg rounded-full">Login</Link>
      </View>
    </View>
  );
}
