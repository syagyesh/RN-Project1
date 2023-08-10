import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Signup from './screen/Signup';

export default function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
    }}>
      <StatusBar style="auto" />
      <Signup />
    </View>
  );
}
