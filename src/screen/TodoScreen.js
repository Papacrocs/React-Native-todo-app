import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'


const dummyData = [{
    id: "01",
    title: "Wash car"
},
{
    id: "02",
    title: "Read your new book"
},
{
    id: "03",
    title: "Watch a movie"
}
]
const TodoScreen = () => {
    const renderTodos = ({item, index}) =>{
        return (
            <View style={{borderBottomWidth:2, marginBottom:6, borderBottomRightRadius:9, borderColor:"#1e90ff", paddingHorizontal:6, paddingVertical:12}}>
                <Text>{item.title}</Text>
            </View>
        );
    };
    return (
        <View style={{ marginTop: 60, marginHorizontal: 16, }}>
            
            <TextInput style={{ borderWidth: 2, borderColor: "#1e90ff", borderRadius: 6, paddingVertical: 15, paddingHorizontal: 16, }}
                placeholder='Add a Task'
            />
            <TouchableOpacity style={{backgroundColor:"#000", borderRadius:6, paddingVertical:8, marginVertical:35, alignItems:"center"}}>
                <Text style={{color:"#fff", fontWeight:"bold", fontSize: 20}}>
                    Add
                </Text>
            </TouchableOpacity>

            {/* Render todo list */}
            <FlatList data={dummyData} renderItem={renderTodos} />
        </View>

    )
}

export default TodoScreen

const styles = StyleSheet.create({})