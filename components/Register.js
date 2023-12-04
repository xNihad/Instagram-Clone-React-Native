import { View, Text, StyleSheet } from 'react-native'
import React , {useState} from 'react'

const Register = () => {
  cosnt [email,setEmail]=useState('')
  const [password,setPassword]= useState('')

  return (
    <View style={styles.container}>
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