import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const AddTaskScreen = ({ route, navigation }) => {
  const [taskText, setTaskText] = useState('');
  const [priority, setPriority] = useState('Low');

  const { onAddTask } = route.params;

  const handleAddTask = () => {
    if (taskText.trim()) {
      onAddTask(taskText, priority); // Call the function
      setTaskText(''); // Clear input after adding
      setPriority('Low'); // Reset
      // Check if there is a screen to go back to
      if (navigation.canGoBack()) {
        navigation.goBack(); // Navigate back to Home
      } else {
        navigation.navigate('Home'); // Navigate to Home if no back screen
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        value={taskText}
        onChangeText={setTaskText}
      />
      <Picker
        selectedValue={priority}
        onValueChange={(itemValue) => setPriority(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Priority: Low" value="Low" />
        <Picker.Item label="Priority: Medium" value="Medium" />
        <Picker.Item label="Priority: High" value="High" />
      </Picker>
      <TouchableOpacity 
        style={styles.button}
        onPress={handleAddTask}
      >
        <Text style={styles.buttonText}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#1e90ff',
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  picker: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 6,
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default AddTaskScreen;