import { Tabs } from "expo-router";

const _Layout = () => {
  return (
    <Tabs screenOptions={{ tabBarStyle: { display: 'none' } }}>
      <Tabs.Screen name='register' options={{ title: 'Register', headerShown: false }} />
      <Tabs.Screen name='login' options={{ title: 'Login', headerShown: false }} />
    </Tabs>
  )
}

export default _Layout
