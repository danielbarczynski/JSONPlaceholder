import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const min = 1;
  const max = 10;
  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${random}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      {user && (
        <>
          <Image style={styles.avatar} source={{ uri: `https://picsum.photos/id/${random}/600/400` }} />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.info}>@{user.username}</Text>
          <Text style={styles.info}>{user.email}</Text>
          <Text style={styles.info}>{user.address.street} {user.address.suite} {user.address.city}</Text>
          <Text style={styles.info}>{user.phone}</Text>
        </>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});


export default Profile;
