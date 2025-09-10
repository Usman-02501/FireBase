import React from 'react';
import { StatusBar } from 'react-native';
import StackNavigation from './src/Navigation';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} />
      <StackNavigation />
      <Toast /> 
    </NavigationContainer>
  )
}