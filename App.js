import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import styles from './AppEstilo';
import Titulo from './components/Titulo Sobrenatural';
import Card  from './components/CardSobrenatural';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>     
      <Card/>     
      <StatusBar style="auto" />
    </View>
  );
}
