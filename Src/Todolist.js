import { View, Alert, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Task from './componentsTodolist/Task'
import styles from './TodolistStyle'
import Form from './componentsTodolist/Form'
const Todolist = () => {
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = (task) => {
    setTaskList([...taskList,task]);
  }

  const handleDeleteTask = (index) => {
    Alert.alert(
      "Thông Báo",
      "Bạn có chắc chắn muốn xóa ?",
      [
        {
          text:"Có",
          onPress: () => {
            let taskListTmp = [...taskList];
            taskListTmp.splice(index,1);
            setTaskList(taskListTmp);
          }
        },
        {text:"Không"},
      ]
    );
  }
  return (
    <View style={styles.container}>
        <ScrollView style={styles.items}>
            {
              taskList.map((item,index) => {
                return <Task key={index} title={item} number={index + 1} onDeletaTask={() => handleDeleteTask(index)}/>
              })
            }
        </ScrollView>
        <Form onAddTask={handleAddTask}/>
    </View>
  );
}

export default Todolist