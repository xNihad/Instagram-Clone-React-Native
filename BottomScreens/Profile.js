import { View ,Text, StyleSheet} from "react-native";

function Profile(){
    return(
        <View style={styles.container}>
            <Text style={{fontWeight:'bold', fontSize:25}}>Profile component</Text>
        </View>
    )
}
export default Profile
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})