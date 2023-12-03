import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import {useState,useEffect} from 'react'

const LoadingPage = ({navigation}) => {
  const [loading, setLoading]= useState(false)
  const displayLoad = () =>{
  setLoading(true)

  setTimeout(()=>{
    setLoading(false);
    navigation.navigate('BotTabScreen')
  }, 2500)
}
useEffect(() => {
    displayLoad(); // You may call fetchData when the component mounts
  }, []);
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      {
        loading && <ActivityIndicator size='1000' color='#962fbf'  />
      }
    </View>
  )
}

export default LoadingPage