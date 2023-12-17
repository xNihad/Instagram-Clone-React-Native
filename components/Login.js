import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";

import firebase from '../FirebaseConfig'
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const LoginPress = async (email,password) => {
     try{
        await firebase.auth().signInWithEmailAndPassword(email,password)
        console.log('successly sign in');
     }catch(error){
      Alert.alert(error.message)
     }

  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: "powderblue",
          padding: 100,
          borderRadius: 40,
        }}
      >
        <TextInput  style={styles.input}
          placeholder="Email"
          onChangeText={(email) => setEmail(email)}
          value={email}
        />

        <TextInput style={styles.input}
          placeholder="Password"
          onChangeText={(password) => setPassword(password)}
          value={password}
          secureTextEntry
        />

        <TouchableOpacity
          style={{
            marginTop: 30,
            alignItems: "center",
            backgroundColor: "green",
            paddingHorizontal:20,
            paddingVertical:10,
            borderRadius:40
          }}
          onPress={LoginPress}
        >
          <Text style={{fontSize:20}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input:{
    fontSize:20,
    borderRadius:15,
    paddingHorizontal:20,
    paddingVertical:15,
    backgroundColor:'grey',
    marginBottom:10
  }
});
