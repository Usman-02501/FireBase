import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const lightTheme = {
  background: '#FFFFFF',
  text: '#000000',
  button: '#007AFF',
  placeholder: '#666666',
  statusBarStyle: 'dark-content',
  statusBarBackground: '#ffffff',
};

const darkTheme = {
  background: '#121212',
  text: '#FFFFFF',
  button: '#BB86FC',
  placeholder: '#AAAAAA',
  statusBarStyle: 'light-content',
  statusBarBackground: '#121212',
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  // OPTIONAL: persist theme across app restarts (uncomment + install AsyncStorage)
  // import AsyncStorage from '@react-native-async-storage/async-storage';
  // useEffect(() => { (async () => { const value = await AsyncStorage.getItem('IS_DARK'); if (value != null) setIsDark(value === '1'); })(); }, []);
  // useEffect(() => { (async () => { await AsyncStorage.setItem('IS_DARK', isDark ? '1' : '0'); })(); }, [isDark]);

  const toggleTheme = () => setIsDark(v => !v);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
