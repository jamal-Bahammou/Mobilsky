import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function App() {

  const [people, setPeople] = useState([
    { id: 0, name: 'React' },
    { id: 1, name: 'Node' },
    { id: 2, name: 'React Native' },
    { id: 3, name: 'Python' },
    { id: 4, name: 'C++' },
    { id: 5, name: 'Sass' },
    { id: 6, name: 'mongoDb' },
    { id: 7, name: 'Restfull API' }
  ])

  const clickHandler = () => {
    setName('rass l botta');
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        { people.map( item => (
          <View key={item.id}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 24
  }
});
