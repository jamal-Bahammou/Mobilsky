import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState('Jhon Doe');
  const [age, setAge] = useState('30');

  const clickHandler = () => {
    setName('rass l botta');
  }

  return (
    <View style={styles.container}>

      <View style={styles.inputWrapper}>
        <Text>Enter name:</Text>
        <TextInput
          style={styles.input}
          placeholder='e.g Jhon Doe'
          onChangeText={ val => setName(val) }
        />
      </View>

      <View style={styles.inputWrapper}>
        <Text>Enter age:</Text>
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          placeholder='e.g 99'
          onChangeText={ val => setAge(val) }
        />
      </View>

      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
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
  inputWrapper: {
    marginBottom: 10
  },
  input: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    padding: 8,
    width: 300
  }
});
