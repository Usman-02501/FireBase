import React from 'react';
import LoginPage from '../Screens/LoginPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
  );
};

const StackNavigation = () => {
  return <MainStack />;
};

export default StackNavigation;
