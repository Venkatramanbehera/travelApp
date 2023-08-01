import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ForgotPassword = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}> ForgotPassword</Text>
    </View>
  );
};

export default ForgotPassword;

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
