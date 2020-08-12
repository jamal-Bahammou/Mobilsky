import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [name, setName] = useState('Lamine');

  const clickHandler = () => {
    setName('rass l botta');
  }

  return (
    <View style={styles.container}>
      <Text>{ name }</Text>
      <View style={styles.buttonWrapper}>
        <Button title='UPDATE STATE' onPress={clickHandler} />
      </View>
      <View style={styles.buttonWrapper}>
        <Button title='default' onPress={() => setName('Lamine')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    marginTop: 20
  }
});
