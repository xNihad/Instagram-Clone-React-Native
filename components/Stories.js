import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React from 'react'
import Stori from './StoryItem'

const datas = [
    {
        name:'Your Story',
        image:"https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
        relatedUrl: 'https://www.instagram.com/nihadx.io/',
        isSeen:true,
        isYou:true
    },
    {
        name:'aykhan_hajiyev',
        image:'https://media.licdn.com/dms/image/D4D03AQHJYvBWsWFo5Q/profile-displayphoto-shrink_100_100/0/1697097903781?e=1706140800&v=beta&t=yXiKRLVR6zpHOoLX2XEcN8MAJ1eqsXcR5KLKhuIDqlY',
        relatedUrl: 'https://www.instagram.com/aykhan_hajiyev/',
        isSeen:false
    },
    {
        name:'steven',
        image:'https://media.licdn.com/dms/image/D4E03AQF_x8takWDCMA/profile-displayphoto-shrink_400_400/0/1680654583160?e=1706140800&v=beta&t=FhNpTN7MnhuJYCh9lS1Yko0p3tXkVfPkDHEdQL16CMM',
        relatedUrl: 'https://www.instagram.com/steven/',
        isSeen:false
    },
    {
        name:'hubermanlab',
        image:'https://media.licdn.com/dms/image/C5603AQH5MzxKYhfquw/profile-displayphoto-shrink_100_100/0/1611446851771?e=1706140800&v=beta&t=yeMC7GXGwn3ZzpisP2zX_AGC2-rpuArWHDUvtMADoOY',
        relatedUrl: 'https://www.instagram.com/hubermanlab/',
        isSeen:false
    },
    {
        name:'chriswillx',
        image:'https://media.licdn.com/dms/image/C4D03AQHBIpVeyVY8QQ/profile-displayphoto-shrink_100_100/0/1616082745016?e=1706745600&v=beta&t=wXGG0j9KpoNyz730VEqjsPOpdtb1w4nDQQIwL8oOAng',
        relatedUrl: 'https://www.instagram.com/chriswillx/',
        isSeen:false
    },
    {
        name:'zuck',
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_BeIuS3jcGCT4v5Kf0OgO1V0awDBjSpMtQ&usqp=CAU',
        relatedUrl: "https://www.instagram.com/zuck/",
        isSeen:false
    },
    {
        name:'hormozi',
        image:'https://media.licdn.com/dms/image/D4E03AQG6v2VnJqOBtg/profile-displayphoto-shrink_100_100/0/1690468908365?e=1706140800&v=beta&t=okE0Bt6z-IkNvLiFz03EPaHXU1Chr5xaHIkG1DN7-SE',
        relatedUrl: 'https://www.instagram.com/hormozi/',
        isSeen:false
    },
      
]
const Story = () => {
    
  return (
    <View style={{height:100}}>
     <FlatList
      horizontal 
      data={datas} 
      renderItem={({item})=><Stori namez={item.name} imagez={item.image} isSeenz={item.isSeen} isYouz={item.isYou} relatedUrlz={item.relatedUrl} /> }
       />
    </View>
  )
}

export default Story

