import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'
import Header from './components/header'
import TodoItem from './components/todoItem'
import AddTodo from './components/addTodo'

// Callign Fonts
const getFonts = () =>  Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
})

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false)

  const [todos, setTodos] = useState([
    // { text: 'buy coffee', key: '1' },
    // { text: 'create an app', key: '2' },
    // { text: 'play on the switch', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todos => todos.key != key)
    })
  }

  const submitHandler = (text) => {

    if(text.length > 3){
      setTodos(prevTodos => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevTodos
        ]
      })    
    }else{
      Alert.alert('OOPS!', 'Todo must be over 3 chars long.', [
        { text: 'Understood'}
      ])
    }
    
  }

  if(fontsLoaded){
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss()
        }}
      >
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler}/>
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({item}) => (
                  <TodoItem item={item} pressHandler={pressHandler}></TodoItem>
                )}
              ></FlatList>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
  
    );
  }else{
    return (
      <AppLoading 
        startAsync={() => getFonts()}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    )
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 30,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
