import { View, Text, StyleSheet } from 'react-native'
import React , {useState} from 'react'

const Register = () => {
  cosnt [email,setEmail]=useState('')
  const [password,setPassword]= useState('')

  return (
    <View style={styles.container}>
      <TextInput placeholder='Email' />
        <TextInput placeholder='Password' secureTextEntry />
        <TextInput placeholder='Email' />
        <TextInput placeholder='Password' secureTextEntry />
      <TouchableOpacity>
        <Text>Sign Up</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Register
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    alignItems: 'center',
    marginTop:7,
  },
});