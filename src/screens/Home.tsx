import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

// import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {RootStackParamList} from '../App';
// import MyDrawer from './MyDrawer';

// type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Home Screen</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Details', {productId: '87'})}
        // onPress={() => navigation.push('Details', {productId: '87'})}
        // onPress={() => navigation.replace('Details', {productId: '87'})}
      />
      {/* <MyDrawer /> */}
    </View>
  );
};

export default Home;

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
