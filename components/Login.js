import { View, Text,TextInput, StyleSheet,TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const Login = () => {

 

  
  return (
    <View style={styles.container}>
        <TextInput placeholder='Email' />
        <TextInput placeholder='Password' secureTextEntry />

        <TouchableOpacity  >
        <Text>Login</Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default Login
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    alignItems: 'center',
    marginTop:7,
  },
});