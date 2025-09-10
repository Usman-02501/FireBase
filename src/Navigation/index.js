import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import HomeScreen from '../Screens/HomeScreen';

export const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name='SignUp'component={SignUpScreen}/>
      <Stack.Screen name='Home'component={HomeScreen}/>
    </Stack.Navigator>
  );
};

const StackNavigation = () => {
  return <MainStack />;
};

export default StackNavigation;
