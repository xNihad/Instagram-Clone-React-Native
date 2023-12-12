import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import React from "react";
import Posti from "./PostItem";
import PostDatas from "./PostDatas";


const Post = () => {
  return (
    <View>
      <FlatList
        data={PostDatas}
        renderItem={({ item }) => (
          <Posti
            names={item.name}
            profilImages={item.profilImage}
            relatedUrls={item.relatedUrl}
            postImages={item.postImage}
            likes={item.like}
            comments={item.comment}
            isSeens={item.isSeen}
          />
        )}
      />
    </View>
  );
};
export default Post;
