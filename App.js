import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PlayGame from './src/screens/PlayGame';
import AppNavigator from './Navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator></AppNavigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efeff3',
   
  },
});
