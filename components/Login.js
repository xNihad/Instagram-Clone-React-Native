import { View, Text,TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

const Login = () => {

  cosnt [email,setEmail]=useState('')
  const [password,setPassword]= useState('')

  const signIn = async ()=>{
    
  }
  return (
    <View style={styles.container}>
        <TextInput placeholder='Email' />
        <TextInput placeholder='Password' secureTextEntry />

        <TouchableOpacity onPress={signIn}>
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