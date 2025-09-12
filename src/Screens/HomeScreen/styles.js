import { StyleSheet } from 'react-native';

export const createHomeStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      justifyContent: 'center',
      backgroundColor:theme.backgroundColor
    },
    welcomeText: {
      fontSize: 25,
      textAlign: 'center',
    },
    logoutView: {
      marginTop: 20,
      paddingRight: 5,
      borderRadius: 10,
      backgroundColor: theme.button,
    },
    logoutText: {
      textAlign: 'center',
      color: theme.text,
      fontWeight: 'bold',
      paddingVertical: 15,
    },
    input: {
      height: 40,
      borderWidth: 1,
      padding: 10,
      borderRadius: 6,
    },
  });
