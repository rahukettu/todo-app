import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskList from '../components/TaskList';

const STORAGE_KEY = '@tasks';

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const tasksJson = await AsyncStorage.getItem(STORAGE_KEY);
        if (tasksJson) setTasks(JSON.parse(tasksJson));
      } catch (error) {
        Alert.alert('Error', 'Failed to load tasks.');
      }
    };

    loadTasks();
  }, []);

  const addTask = async (taskText, priority) => {
    const newTask = {
      id: Date.now().toString(),
      text: taskText,
      done: false,
      priority,
      order: tasks.length + 1,
    };

    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newTasks));
  };

  const toggleTask = async (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
  };

  const deleteTask = async (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updatedTasks));
  };

  const handleAddTask = (taskText, priority) => {
    addTask(taskText, priority);
    navigation.goBack(); // Navigate back to Home
  };

  return (
    <View style={styles.container}>
      <Button
        title="Add Task"
        onPress={() => navigation.navigate('AddTask', { onAddTask: handleAddTask })}
      />
      <TaskList tasks={tasks} onToggleTask={toggleTask} onDeleteTask={deleteTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default HomeScreen;