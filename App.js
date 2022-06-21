import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

import styles from './AppEstilo';
import Titulo from './components/Titulo Sobrenatural';
import Card  from './components/Sobrenatural';
import StrangerThings  from './components/StrangerThings';

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>     
      <Card/>     
      <StrangerThings/>
      <StatusBar style="auto" />
    </View>
  );
}
