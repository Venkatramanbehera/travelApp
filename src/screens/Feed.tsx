import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Feed = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Feed</Text>
    </View>
  );
};

export default Feed;

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
