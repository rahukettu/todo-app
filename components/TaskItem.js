import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const TaskItem = ({ task, onToggle, onDelete }) => {
    const getBackgroundColor = () => {
        switch (task.priority) {
          case 'High':
            return '#ffcccc'; // Reddish
          case 'Medium':
            return '#ffffcc'; // Yellowish
          case 'Low':
            return '#ccffcc'; // Greenish
          default:
            return '#fff';
        }
    };
  
    return (
        <View style={[styles.itemContainer, { backgroundColor: getBackgroundColor() }]}>
            <TouchableOpacity onPress={() => onToggle(task.id)} style={styles.item}>
                <Text style={[styles.text, task.done && styles.doneText]}>{task.text}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onDelete(task.id)} style={styles.deleteButton}>
                <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      borderRadius: 5,
      padding: 10,
    },
    item: {
      flex: 1,
    },
    text: {
      fontSize: 16,
    },
    doneText: {
      textDecorationLine: 'line-through',
      color: 'gray',
    },
    deleteButton: {
      padding: 10,
    },
    deleteText: {
      color: 'red',
    },
  });

export default TaskItem;