import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
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
    backgroundColor: 'green',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    marginBottom:10
  },
  nextText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
})