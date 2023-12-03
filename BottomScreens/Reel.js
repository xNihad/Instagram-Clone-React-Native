import { View, Text, StyleSheet } from "react-native";

function Reel(){
    return(
        <View style={styles.container}>
            <Text style={{fontWeight:'bold', fontSize:25}}>Reel component</Text>
        </View>
    )
}
export default Reel
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})