import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';

const SignUpScreen = ({ navigation }) => {
  const [fullname, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const insets = useSafeAreaInsets();
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
    </View>
  );
};

export default SignUpScreen;
