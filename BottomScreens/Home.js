import { StyleSheet, Text, View, SafeAreaView,ActivityIndicator,TouchableOpacity ,StatusBar } from 'react-native';
import { useState } from 'react';
import TopHeaderz from '../components/TopHeader';
import Story from '../components/Stories';
import Post from '../components/Posts'


function Home({navigation}){

    return(
    <SafeAreaView style={styles.container}>
     
    <TopHeaderz navigation={navigation}/>
    <Story />
    <Post />

    <StatusBar />
    </SafeAreaView>
    )
}
export default Home
const styles = StyleSheet.create({
    container: { 
      flex: 1,
      alignItems: 'center',
      marginTop:7,
      
    },
    
  });