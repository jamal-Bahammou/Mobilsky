import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'

const AddTodo = ({ addTodoHandler }) => {
    const [text, setText] = useState('');

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={val => setText(val)}
                clearButtonMode='always'
            />
            <Button onPress={() => addTodoHandler(text)} title='add todo' color='coral' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})

export default AddTodo;