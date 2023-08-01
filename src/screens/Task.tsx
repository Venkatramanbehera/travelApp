import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Task = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Task</Text>
    </View>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});
