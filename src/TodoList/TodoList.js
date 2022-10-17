import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './TodoList.style';
import {Swipeable, GestureHandlerRootView} from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons';

const TodoList = ({todos, changeIsDone, deleteTodo}) => {
  
  const RightSwipeActions = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: 55,
          height: 24,
          paddingHorizontal: 5,
          top:15
        }}>
        <TouchableOpacity
            onPress={() => {deleteTodo(todos.id)}}
          >
          <Icon size={22} color={'white'} name="trash" />
        </TouchableOpacity>
      </View>
    )
  }
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Swipeable overshootRight={false} renderRightActions={RightSwipeActions}>
            <TouchableOpacity
            style={!todos.isDone ? styles.todolist_container : styles.todolist_containerisdone}
            onPress={() => changeIsDone(todos.id)}
            >
            <Text style={!todos.isDone ? styles.todolist_text : styles.todolist_textisdone}>
            {todos.name}
            </Text>
            </TouchableOpacity>
      </Swipeable>
      </GestureHandlerRootView>
  );
};

export default TodoList;
