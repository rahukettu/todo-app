# todo-app

## Overview

This is a simple Todo List application built with React Native and Expo. The app allows users to add tasks with different priority levels (Low, Medium, High), mark tasks as done or undone, delete tasks, and view tasks sorted by priority. The data is stored locally using AsyncStorage.

## Features

- **Add Tasks**: Users can add new tasks with a description and priority level.
- **Task Priority**: Tasks can be assigned different priority levels and are displayed accordingly.
- **Mark Tasks**: Users can mark tasks as done or undone by pressing on the task.
- **Delete Tasks**: Users can delete tasks from the list.
- **Persistent Storage**: Task data is stored locally using AsyncStorage.

## Requirements

- **Node.js**: Ensure Node.js is installed on your machine.
- **Expo CLI**: Install Expo CLI globally if not already installed.

## Installation

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-folder>

Install Dependencies

Use npm or yarn to install the required dependencies.

bash

npm install

or

bash

yarn install

Install Expo CLI

If you haven't installed Expo CLI yet, do so globally.

bash

npm install -g expo-cli

Start the Development Server

Run the development server using Expo CLI.

bash

    expo start

    This will start the Expo development server and open the Expo DevTools in your default web browser. You can use the Expo Go app on your mobile device to scan the QR code and run the app.

Usage

    Adding Tasks: Enter a task description and select a priority level from the dropdown. Press "Add Task" to add it to the list.
    Marking Tasks: Tap on a task to toggle its done/undone status.
    Deleting Tasks: Press the "Delete" button next to a task to remove it from the list.

Code Structure

    App.js: Main entry point of the application. Manages the state of tasks and handles CRUD operations.
    components/AddTask.js: Component for adding new tasks with priority selection.
    components/TaskList.js: Component for displaying the list of tasks with options to toggle and delete.

License

This project is licensed under the GNU General Public License (GPL) v3.0. 

Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please submit a pull request or open an issue.
Contact

For any questions or feedback, please reach out to rahukettu@gmx.com
