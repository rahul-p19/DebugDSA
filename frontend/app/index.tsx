import { Text, View, StatusBar, Image } from "react-native";
import "./global.css"
import { Link } from "expo-router";
import Head from "expo-router/head"

export default function Index() {
  return (
    <>
      <Head>
        <title>DebugDSA</title>
      </Head>
      <View className="flex flex-col gap-8 p-8 justify-around items-center h-full w-full bg-background">
        <StatusBar backgroundColor={"#000000"} />
        <Text className="text-primary text-5xl font-bold" style={{ fontFamily: 'SpaceGrotesk-Medium' }}>DebugDSA</Text>
        <Image style={{ height: 300, width: 300, objectFit: 'fill', borderRadius: '4px' }} source={require("./../assets/images/astronaut-coding.jpg")} className="aspect-square h-1/4" />
        <Text className="text-center text-4xl font-bold text-textColor" style={{ fontFamily: 'SpaceGrotesk-Medium' }}>Debug your DSA Journey.</Text>
        <Link href={"/register"} className="bg-primary text-textColor px-6 py-2 text-lg rounded-full" style={{ fontFamily: 'SpaceGrotesk-Medium' }}>Get Started!</Link>
      </View>
    </>
  );
}
