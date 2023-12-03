import { View , Text,StyleSheet} from "react-native";

function NewPost(){
    return(
        <View style={styles.container}>
            <Text style={{fontWeight:'bold', fontSize:25}}>NewPost component</Text>
        </View>
    )
}
export default NewPost
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})