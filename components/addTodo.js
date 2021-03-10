import React, {useState} from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';

export default function AddTodo({submitHandler}) {

    const [text, setText] = useState('')

    const changeHandler = (text) => {
        setText(text)
    }

    const submitHandlerPass = (text) => {
        if(text){
            submitHandler(text)
            if(text.length > 3){
                setText('')
            }
        }
        
    }

    return (
        <View>
            <TextInput 
                style={styles.input}
                placeholder='New todo...'
                onChangeText={changeHandler}
                value={text}
            />
            <Button onPress={() => submitHandlerPass(text)} title="Add todo" color='#F8761E' styles={styles.btn} />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderColor: '#ddd'
    }
})