import { StyleSheet } from 'react-native';

export const createLoginStyles = (theme) => StyleSheet.create({
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
  signInView: {
    marginTop: 10,
    paddingRight: 5,
    borderRadius: 10,
    backgroundColor: theme.button,
  },
  signInText: {
    textAlign: 'center',
    color: theme.text,
    fontWeight: 'bold',
    paddingVertical: 15,
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
  },
  nextText: {
    textAlign: 'center',
    color: theme.text,
    fontWeight: 'bold',
  },
});
