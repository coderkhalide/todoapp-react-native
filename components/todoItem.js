import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({item, pressHandler}) {
    return (
        <TouchableOpacity
            onPress={() => pressHandler(item.key)}
        >   
            <View style={styles.item}>
                <Text style={styles.text}>{item.text}</Text>
                <MaterialIcons style={styles.icon} name="delete" size={24} color="#F8761C" />
            </View>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    text: {
        marginRight: 10,
        flex: 0.9,
        fontFamily: 'nunito-regular',
    },
    icon: {
        flex: 0.1,
    }
})