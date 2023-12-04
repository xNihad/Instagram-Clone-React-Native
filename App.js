import { SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import HomeScreen from './BottomScreens/Home'
import SearchScreen from './BottomScreens/Search'
import NewPostScreen from './BottomScreens/NewPost'
import ProfileScreen from './BottomScreens/Profile'
import ReelScreen from './BottomScreens/Reel'


import DirectMessage from './OtherScreens/Dm'
import Notifications from './OtherScreens/Notifications'
import LoadPage from './OtherScreens/LoadingPage'
import LoginPage from './components/Login'
import RegisterPage from './components/Register'


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BotScreen(){
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel:true, headerShown:false}}>

      <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:({focused,color})=>{
        return <Image style={{height:30, width:30}} source={require('./assets/home.png')}/>
      }}} />
      <Tab.Screen name="Search" component={SearchScreen}  options={{tabBarIcon:({focused,color})=>{
        return <Image style={{height:24, width:24}} source={require('./assets/search.png')}/>
      }}}/>
      <Tab.Screen name="New Post" component={NewPostScreen}  options={{tabBarIcon:({focused,color})=>{
        return <Image style={{height:24, width:24}} source={require('./assets/new-post.png')}/>
      }}}/>
      <Tab.Screen name="Reel" component={ReelScreen}  options={{tabBarIcon:({focused,color})=>{
        return <Image style={{height:24, width:24}} source={require('./assets/reel.png')}/>
      }}}/>
      <Tab.Screen name="Profile" component={ProfileScreen}  options={{tabBarIcon:({focused,color})=>{
        return <Image style={{height:30, width:30, borderWidth: 1.5, borderColor:'gray', borderRadius:16}} source={{uri:'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg'}}/>
      }}}/>

    </Tab.Navigator>
  );
}

export default function App() {
  return (
      <SafeAreaView style={{flex:1}}>
    
      <NavigationContainer>
       <Stack.Navigator initialRouteName='FirstLoadingPage' screenOptions={{ headerShown: false}}>
       <Stack.Screen name='Login' component={LoginPage} />
       <Stack.Screen name='Register' component={RegisterPage} />
       <Stack.Screen name='FirstLoadingPage' component={LoadPage} />
       <Stack.Screen name='BotTabScreen' component={BotScreen}/>
       <Stack.Screen name='DM' component={DirectMessage}/>
       <Stack.Screen name='Notification' component={Notifications}/>
       </Stack.Navigator>
      </NavigationContainer>

      </SafeAreaView>
  );
}


