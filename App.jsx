import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import StackNavigation from './src/Navigation';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider, useTheme } from './src/theme/ThemeContext';
import messaging from '@react-native-firebase/messaging';

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
  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  const getToken = async () => {
    const token = await messaging().getToken();
    console.log('Token = ', token);
  };

  useEffect(() => {
    requestUserPermission();
    getToken();

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // console.log('A new FCM message arrived!', remoteMessage);

      Alert.alert(
        remoteMessage.notification?.title || 'New Notification',
        remoteMessage.notification?.body || 'You have received a message',
      );
    });

    return unsubscribe;
  }, []);

  return (
    <ThemeProvider>
      <NavigationContainer>
        <ThemedStatusBar />
        <StackNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}
