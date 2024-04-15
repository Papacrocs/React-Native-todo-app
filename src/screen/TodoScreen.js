// Import necessary components and libraries from React Native
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { IconButton } from "react-native-paper";
import FallBackScreen from "../components/FallBackScreen";

// Define TodoScreen component
const TodoScreen = () => {
    // Initialize local states for todo, todoList, and editedTodo
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [editedTodo, setEditedTodo] = useState(null);

    // Function to handle adding a todo
    const handleAddTodo = () =>{
        setTodoList([...todoList, {id: Date.now().toString(), title:todo}]);
        setTodo("");
    }

    // Function to handle deleting a todo
    const handleDeleteTodo = (id) =>{
        const updatedTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(updatedTodoList);
    }

    // Function to handle editing a todo
    const handleEditTodo =(todo) =>{
        setEditedTodo(todo);
        setTodo(todo.title);
    }

    // Function to handle updating a todo
    const handleUpdateTodo = () =>{
        const updatedTodoList = todoList.map((item)=>{
            if(item.id === editedTodo.id){
                return{...item, title:todo}
            }
            return item;
        }); 
        setTodoList(updatedTodoList);
        setEditedTodo(null);
        setTodo("");
    }

    // Function to render each todo item
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
                    shadowColor:"#000",
                    shadowOffset:{width:0, height:2},
                    shadowOpacity:0.8,
                    shadowRadius:3,
                }}
            >
                <Text style={{flex:1}}>{item.title}</Text>
                <IconButton icon={"pencil"} iconColor="#2BEA25" onPress={()=>handleEditTodo(item)}/>
                <IconButton icon={"trash-can"} iconColor="#E70707"  onPress={()=>handleDeleteTodo(item.id)}/>
            </View>
        );
    };

    // Render TodoScreen component
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
            {
                editedTodo ? 
                <TouchableOpacity
                    style={{
                        backgroundColor: "#063B74",
                        borderRadius: 6,
                        paddingVertical: 8,
                        marginVertical: 35,
                        alignItems: "center",
                    }}
                    onPress={ ()=> handleUpdateTodo()}
                >
                    <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20 }}>
                        save
                    </Text>
                </TouchableOpacity> : 
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
            }
            {/* Render todo list */}
            <FlatList data={todoList} renderItem={renderTodos} />
            {/* Render fallback screen if todoList is empty */}
            {todoList.length <= 0 && <FallBackScreen/>}
        </View>
    );
};

// Export TodoScreen component as default
export default TodoScreen;

// Define styles (currently empty)
const styles = StyleSheet.create({});