import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'


const TopHeaderz = ({navigation}) => {
  return (
    <View style={styles.toper}>
        <View style={styles.igLogos}>
            <TouchableOpacity>
              <Image source={require('../assets/IG-logo.png')}/>
            </TouchableOpacity>
            <TouchableOpacity >
              <Image source={require('../assets/IG-logo-helper-icon.png')}/>               
            </TouchableOpacity>
        </View>
        <View style={styles.igLogosZ}>
        <TouchableOpacity style={styles.hc} onPress={()=> navigation.navigate('Notification')}>
            <Image source={require('../assets/Heart-Icon.png')}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('DM')}>
            <Image source={require('../assets/Chat-Icon.png')}/>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default TopHeaderz

const styles = StyleSheet.create({
    toper:{
     width:390,
     flexDirection:'row',
     justifyContent:'space-between',
     paddingHorizontal:12,
    },
    igLogos:{
     flexDirection:'row',
    },
    igLogosZ:{
        flexDirection:'row', 
    },
    hc:{
        marginHorizontal:12
    },
    
})