import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import albumData from "../json/albums";

const Albumlist = () => {
  return (
    <ScrollView>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[0].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.textStyle}>{albumData[0].title}</Text>
            <Text style={styles.textStyle}>{albumData[0].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[0].image
            }}
          />
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[1].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.textStyle}>{albumData[1].title}</Text>
            <Text style={styles.textStyle}>{albumData[1].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[1].image
            }}
          />
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[2].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.textStyle}>{albumData[2].title}</Text>
            <Text style={styles.textStyle}>{albumData[2].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[2].image
            }}
          />
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[3].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.textStyle}>{albumData[3].title}</Text>
            <Text style={styles.textStyle}>{albumData[3].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[3].image
            }}
          />
        </View>
      </View>
      <View style={styles.cardContainerStyle}>
        <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
          <Image
            style={styles.thumbnailStyle}
            source={{
              uri: albumData[4].thumbnail_image
            }}
          />
          <View style={styles.headerContentStyle}>
            <Text style={styles.textStyle}>{albumData[4].title}</Text>
            <Text style={styles.textStyle}>{albumData[4].artist}</Text>
          </View>
        </View>
        <View style={styles.cardSectionStyle}>
          <Image
            style={styles.imageStyle}
            source={{
              uri: albumData[4].image
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 65,
    width: 65,
    margin: 5
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
  },
  cardContainerStyle: {
    borderWidth: 2,
    borderRadius: 2,
    borderColor: "lightblue",
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#000",
    borderColor: "lightblue",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 380,
    width: null
  },
  textStyle: {
    color: '#fff',
    fontSize: 18
  }
});

export default Albumlist;
