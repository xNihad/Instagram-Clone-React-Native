import {
  View,
  Text,
  Image,
  StyleSheet,
  Linking,
  TouchableOpacity,
  PixelRatio,
} from "react-native";
import React, { useState } from "react";

const Posti = ({
  names,
  profilImages,
  relatedUrls,
  postImages,
  likes,
  comments,

  isSeens,
}) => {
  const openPage = () => {
    const url = String(relatedUrls);
    Linking.openURL(url);
  };

  const [likeFill, setLikeFill] = useState(false);
  const [saveFill, setSaveFill] = useState(false);

  const [moreComment, setMoreComment] = useState(moreComment);

  return (
    <View style={{ width: 390 }}>
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginHorizontal: 12,
            marginVertical: 5,
          }}
        >
          <View>
            <TouchableOpacity
              onPress={openPage}
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Image
                source={{ uri: profilImages }}
                style={{
                  borderColor: isSeens ? "gray" : "#C837AB",
                  width: 40,
                  height: 40,
                  borderRadius: 15,
                  borderWidth: 2,
                }}
              />
              <Text style={{ fontSize: 14, fontWeight: 500 }}>
                {"   "}
                {names}
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={require("../assets/3dots.png")}
                style={{ width: 12, height: 12 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ backgroundColor: "white" }}>
          <Image
            source={{ uri: postImages }}
            style={{ aspectRatio: 1, borderRadius: 100 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 12,
            marginTop: 10,
          }}
        >
          <View style={{ flexDirection: "row", width: 100 }}>
            <TouchableOpacity
              style={styles.postIcons}
              onPress={() => setLikeFill(!likeFill)}
            >
              <Image
                style={{ width: 24, height: 24 }}
                source={
                  likeFill == false
                    ? require("../assets/Heart-Icon.png")
                    : require("../assets/filledHeart.png")
                }
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postIcons}>
              <Image source={require("../assets/comment.png")} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.postIcons}>
              <Image source={require("../assets/send.png")} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => setSaveFill(!saveFill)}>
              <Image
                style={{ width: 24, height: 24 }}
                source={
                  saveFill == false
                    ? require("../assets/save.png")
                    : require("../assets/filledSave.png")
                }
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ marginTop: 5 }}>
          <View>
            <TouchableOpacity>
              <Text style={{ marginLeft: 12, fontSize: 13, fontWeight: 600 }}>
                {likes} likes
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{marginLeft: 12 }}>
            <View >
              <TouchableOpacity >
                <Text style={{ fontSize: 14, fontWeight: 600 }}>
                  {names}
                  <Text style={{ fontSize: 13, fontWeight: 400 }}>
                    {" "}
                    {moreComment ? comments : comments.slice(0, 80)}
                    {comments.length > 40 && (
                      <TouchableOpacity
                        onPress={() => setMoreComment(!moreComment)}
                      >
                        <Text style={{ fontWeight: 200,  fontSize:12, textAlignVertical: 'center', }}>
                          {moreComment ? "less" : "more"}
                        </Text>
                      </TouchableOpacity>
                    )}
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Posti;
const styles = StyleSheet.create({
  postIcons: {
    marginRight: 15,
  },
});
