import { View, Text, StyleSheet } from "react-native";

function Search(){
    return(
        <View style={styles.container}>
            <Text style={{fontWeight:'bold', fontSize:25}}>Search component</Text>
        </View>
    )
}
export default Search
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})