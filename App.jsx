import React from 'react';
import { StatusBar } from 'react-native';
import StackNavigation from './src/Navigation';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} />
      <StackNavigation />
    </NavigationContainer>
  )
}