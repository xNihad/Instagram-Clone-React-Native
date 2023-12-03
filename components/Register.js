import { View, Text } from 'react-native'
import React from 'react'

const Register = () => {
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