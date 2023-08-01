import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Article = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Article</Text>
    </View>
  );
};

export default Article;

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
