import { View, Text, Image, Linking, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import plusIcon from '../assets/plus-icon.png'
const Stori = ({namez, imagez,isSeenz,isYouz,relatedUrlz}) => {
  const openWebsite =()=>{

    const url = String(relatedUrlz);
    Linking.openURL(url)
  }
  return (
    <View>
       <TouchableOpacity onPress={openWebsite}>
       <View>
        <Image source={{uri:imagez}} style={{width:80,height:80, borderRadius:31, marginHorizontal:7, borderWidth:3, borderColor: isSeenz ? "gray" : "#C837AB"}} />
      { 
      isYouz && <Image source={plusIcon} style={styles.PlusIcon}/>
      }
      </View>
      <Text style={{textAlign:'center'}}>{namez}</Text>
      </TouchableOpacity> 
    </View>
  )
}

export default Stori
const styles =StyleSheet.create({
  PlusIcon:{
    height:22,
    width:22,
    position:'absolute',
    bottom:0,
    right:10
  }
})