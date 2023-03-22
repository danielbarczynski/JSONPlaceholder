import { StyleSheet, Text, View, TextInput, Button, StatusBar } from 'react-native';
import React from 'react';

const Login = ({ navigation }) => {
  const loginHandler = () => {
    navigation.navigate('Home');
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder='Email address' style={styles.input}></TextInput>
        <TextInput placeholder='Password' style={styles.input}></TextInput>
        <Button title='LOGIN' onPress={loginHandler}></Button>
        <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white'
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});

export default Login;
