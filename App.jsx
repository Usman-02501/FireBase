import React from 'react';
import { StatusBar } from 'react-native';
import StackNavigation from './src/Navigation';
import { NavigationContainer} from '@react-navigation/native';
import { ThemeProvider, useTheme } from './src/theme/ThemeContext';

const ThemedStatusBar = () => {
  const { theme } = useTheme();
  return (
    <StatusBar
      translucent={true}
      barStyle={theme.statusBarStyle}
      backgroundColor={theme.statusBarBackground}
    />
  );
};

export default function App() {
  return (
    <ThemeProvider>
    <NavigationContainer>
      {/* <StatusBar translucent={true} /> */}
      <ThemedStatusBar/>
      <StackNavigation />
    </NavigationContainer>
    </ThemeProvider>
  );
}
