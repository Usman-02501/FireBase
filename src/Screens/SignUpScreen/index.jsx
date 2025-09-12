import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { createSignUpStyles, styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { useTheme } from '../../theme/ThemeContext';

const SignUpScreen = ({ navigation }) => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { theme, toggleTheme, isDark } = useTheme();
    const styles = createSignUpStyles(theme);

  const insets = useSafeAreaInsets();

  const createUser = () => {
    if (!fullname.trim()) {
      Alert.alert('Error', 'Full name is required');
      return;
    }
    if (!email.trim()) {
      Alert.alert('Error', 'Email is required');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        userCredential.user.updateProfile({
          displayName: fullname,
        });
        Alert.alert('Success', 'Account created successfully!');
        navigation.navigate('Login');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <TouchableOpacity
        style={styles.nextView}
        onPress={() => {
          navigation.navigate('Home');
        }}
      >
        <Text style={styles.nextText}>Next</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        onChangeText={setFullName}
        value={fullname}
        placeholder="Enter Your FullName"
      />
      <View style={styles.passwordView}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Enter Your Email"
        />
      </View>
      <View style={styles.passwordView}>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Enter Your Password"
        />
      </View>
      <View style={styles.passwordView}>
        <TextInput
          style={styles.input}
          onChangeText={setConfirmPassword}
          value={confirmPassword}
          placeholder="Enter Your ConfirmPassword"
        />
      </View>
      <TouchableOpacity
        style={styles.accountView}
        onPress={() => {
          createUser();
        }}
      >
        <Text style={styles.accountText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
