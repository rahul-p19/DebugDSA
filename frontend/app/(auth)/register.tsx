import { View, Text, StatusBar } from 'react-native'
import React from 'react'

const Register = () => {
  return (
    <View className="flex flex-col gap-8 p-8 justify-around items-center h-full w-full bg-background">
      <StatusBar backgroundColor={"#000000"} />
      <Text className="text-primary text-5xl font-bold flex-1" style={{ fontFamily: 'SpaceGrotesk-Medium' }}>Register</Text>
      <View className="flex-1 w-2/3 flex flex-col items-center gap-6">
      </View>
    </View>
  )
}

export default Register
