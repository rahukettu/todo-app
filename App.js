import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './navigation/Navigation';

const App = () => {
  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;