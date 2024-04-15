import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { IconButton } from "react-native-paper";

const dummyData = [
  {
    id: "01",
    title: "Wash car",
  },
  {
    id: "02",
    title: "Read your new book",
  },
  {
    id: "03",
    title: "Watch a movie",
  },
];
const TodoScreen = () => {
    // Init local states
    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])
    // Handle add todo
    const handleAddTodo = () =>{
        setTodoList([...todoList, {id: Date.now().toString(), title:todo}]);
        setTodo("");
    }
    // Handle Delete Todo
    const handleDeleteTodo = (id) =>{
        const updatedTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(updatedTodoList);
    
    }
    // Render todo
  const renderTodos = ({ item, index }) => {
    return (
      <View
        style={{
          borderBottomWidth: 2,
          marginBottom: 6,
          borderBottomRightRadius: 9,
          borderColor: "#BDBABA",
          paddingHorizontal: 6,
          paddingVertical: 12,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{flex:1}}>{item.title}</Text>
        <IconButton icon={"pencil"} iconColor="#2BEA25" />
        <IconButton icon={"trash-can"} iconColor="#E70707"  onPress={()=>handleDeleteTodo(item.id)}/>
      </View>
    );
  };
  return (
    <View style={{ marginTop: 60, marginHorizontal: 16 }}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: "#1e90ff",
          borderRadius: 6,
          paddingVertical: 15,
          paddingHorizontal: 16,
        }}
        placeholder="Add a Task"
        value={todo}
        onChangeText={(userText) => setTodo(userText)}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#063B74",
          borderRadius: 6,
          paddingVertical: 8,
          marginVertical: 35,
          alignItems: "center",
        }}
        onPress={ ()=> handleAddTodo()}
      >
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
          Add Task
        </Text>
      </TouchableOpacity>

      {/* Render todo list */}
      <FlatList data={todoList} renderItem={renderTodos} />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({});
