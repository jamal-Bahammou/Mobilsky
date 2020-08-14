import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'


const TodoItem = ({ item, pressHandler }) => {
    return (
        <View style={styles.item}>
            <TouchableOpacity onPress={() => pressHandler(item.key)}>
                <MaterialIcons name='delete' size={18} color='#333' />
            </TouchableOpacity>
            <Text style={styles.itemText}>{item.text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        paddingVertical: 14,
        paddingHorizontal: 25,
        marginBottom: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10
    },
    itemText: {
        marginLeft: 10
    }
})

export default TodoItem;