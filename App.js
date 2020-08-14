import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'Buy coffe', key: '0' },
    { text: 'Create an app', key: '1' },
    { text: 'Play on the switch', key: '2' }
  ]);

  const pressHandler = key => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.key != key))
  }

  const addTodoHandler = text => {

    if(text.length > 3) {
      setTodos(prevTodos => [
        { text, key: Math.random().toString() },
        ...prevTodos
      ])
    } else {
      Alert.alert('Oops!', 'Todos must be over 3 characters long', [
        { text: 'Understood', onPress: () => console.log('Alert closed') }
      ]);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* HEADER */}
        <Header />
        {/* */}
        <View style={styles.content}>
          {/* TODO FORM */}
          <AddTodo addTodoHandler={addTodoHandler} />
          {/* */}
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  content: {
    padding: 40
  },

  list: {
    marginTop: 20
  }

});
