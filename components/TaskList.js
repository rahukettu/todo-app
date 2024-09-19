import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import TaskItem from './TaskItem';


const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
    // Sorting tasks by priority and then by order
    const sortedTasks = tasks.sort((a, b) => {
      const priorityOrder = { 'High': 1, 'Medium': 2, 'Low': 3 };
      if (priorityOrder[a.priority] === priorityOrder[b.priority]) {
        return a.order - b.order; // Sort by order if priorities are the same
      }
      return priorityOrder[a.priority] - priorityOrder[b.priority]; // Sort by priority
    });
  return (
    <FlatList
      data={sortedTasks}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <TaskItem
          task={item}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
       
      )}
    />
  );
};

export default TaskList;

const styles = StyleSheet.create({})