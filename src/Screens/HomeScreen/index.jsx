import { Text, TouchableOpacity, View, Alert, TextInput } from 'react-native';
import { createHomeStyles, styles } from './styles';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import { useTheme } from '../../theme/ThemeContext';

const HomeScreen = ({ navigation }) => {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const insets = useSafeAreaInsets();
  const { theme, toggleTheme, isDark } = useTheme();
    const styles = createHomeStyles(theme);

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        Alert.alert('Success', 'You have been logged out');
        // navigation.replace('SignIn');
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      });
  };

  const addData = () => {
    setData([text, ...data]);
    setText('');
  };

  const deleteData = i => {
    const a = data.filter((item, index) => index != i);
    setData(a);
  };

   const editData = i => {
    setText(data[i]);
    const a = data.filter((_, index) => index !== i);
    setData(a);
  };
  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.welcomeText}>Welcome Screen</Text>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Enter Your Email"
        onSubmitEditing={addData}
      />
      {data.map((item, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}
        >
          <Text style={{ flex: 1 }}>{item}</Text>
          <TouchableOpacity
            style={{ marginHorizontal: 5 }}
            onPress={() => editData(index)}
          >
            <Text style={{ color: 'blue' }}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => deleteData(index)}>
            <Text style={{ color: 'red' }}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}

      <TouchableOpacity style={styles.logoutView} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
