import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigation from './navigation';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: Async Storage has been extracted from react-native core']);
export default function App() {
  return (
    <RootNavigation />
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
