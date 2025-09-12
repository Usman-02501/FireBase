import { StyleSheet } from 'react-native';

export const createSignUpStyles = theme =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 10,
      backgroundColor:theme.backgroundColor
    },
    input: {
      height: 40,
      borderWidth: 1,
      padding: 10,
      borderRadius: 6,
    },
    passwordView: {
      paddingTop: 20,
    },
    nextView: {
      height: 40,
      width: 80,
      marginTop: 10,
      paddingRight: 5,
      borderRadius: 5,
      backgroundColor: theme.button,
      justifyContent: 'center',
      alignSelf: 'flex-end',
      marginBottom: 10,
    },
    nextText: {
      textAlign: 'center',
      color: theme.text,
      fontWeight: 'bold',
    },
    accountView: {
      marginTop: 10,
      paddingRight: 5,
      borderRadius: 10,
      backgroundColor: theme.button,
    },
    accountText: {
      textAlign: 'center',
      color: theme.text,
      fontWeight: 'bold',
      paddingVertical: 15,
    },
  });
