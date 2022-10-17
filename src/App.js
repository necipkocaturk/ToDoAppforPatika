import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Alert, FlatList } from 'react-native';
import Input from './Input';
import Header from './Header';
import TodoList from './TodoList/TodoList';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  const storeData = async (value) => {
    const stringifiedState = JSON.stringify(value)
    try {
      await AsyncStorage.setItem('localTasks', stringifiedState)
    } catch (e) {
      console.log(e)
    }
  }

  const getData = async () => {
    try {
      const jsonvalue = await AsyncStorage.getItem('localTasks')
      if(jsonvalue !== null) {
        return JSON.parse(jsonvalue)
      }
    } catch(e) {
      console.log(e)
      }
  };

  useEffect(() => {
    getData()
      .then(res => {
        if(!res){
        return (console.log('here is the local storage', res))}
        else{
        setTodos(res)}
      }).catch(err => {console.log(err)})
  }, []);

  useEffect(()=> {
    if(todos.length !== 0){
      storeData(todos)
    }
  },[todos]);
  


  const handleAddToDo = () => {
    if(text === '') return Alert.alert('Boş bir ekleme yapamazsınız...')
      setTodos([...todos, {name: text, isDone: false, id: Date.now()}])
      setText('');
  };

  const changeIsDone = (id) => {
    const newTodoList = todos.map(todo => {
      if(todo.id === id){
        todo.isDone = !todo.isDone;
      }
      return todo;
    });
    setTodos(newTodoList);
  };
  
  const deleteTodo = (id) => {
    const newTodoList = todos.filter(todo => todo.id !== id);
    setTodos(newTodoList);
  }

  const renderTools = ({item}) => (
    <TodoList
    todos={item}
    changeIsDone={changeIsDone}
    deleteTodo={deleteTodo}
   />
  )

  return(
    <SafeAreaView style={styles.container}>

      <Header todos={todos}/>

      <FlatList
      data={todos}
      renderItem={renderTools}
      />

      <Input
      text={text}
      setText={setText}
      handleAddToDo={handleAddToDo}/>

    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#0f2027',
    flex:1,}}
);