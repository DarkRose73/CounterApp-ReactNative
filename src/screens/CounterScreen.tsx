import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FAB} from '../components/FAB';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {counter}</Text>
      <FAB title="+1" onPress={() => setCounter(counter + 1)} position="br" />
      <FAB title="-1" onPress={() => setCounter(counter - 1)} position="bl" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  title: {
    textAlign: 'center',
    fontSize: 40,
    top: -15,
  },
});
