import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createLoginStyles, styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import { useTheme } from '../../theme/ThemeContext';
// import {  useTheme } from './src/theme/ThemeContext'

const LoginScreen = ({ navigation }) => {
  const { theme, toggleTheme, isDark } = useTheme();
  const styles = createLoginStyles(theme);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const insets = useSafeAreaInsets();

  const userSignin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // console.log(JSON.stringify(res));
        Alert.alert('user logged in');
        navigation.navigate('Home');
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TextInput
        style={styles.input}
        onChangeText={txt => setEmail(txt)}
        value={email}
        placeholder="Enter Your Email"
        placeholderTextColor={theme.placeholder}
      />
      <View style={styles.passwordView}>
        <TextInput
          style={styles.input}
          onChangeText={txt => setPassword(txt)}
          value={password}
          placeholder="Enter Your Password"
          placeholderTextColor={theme.placeholder}
        />
      </View>

      <TouchableOpacity
        style={styles.signInView}
        onPress={() => {
          userSignin();
        }}
      >
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.nextView}
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.toggleView} onPress={toggleTheme}>
        <Text style={styles.toggleText}>
          {isDark ? 'Switch to Light' : 'Switch to Dark'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
