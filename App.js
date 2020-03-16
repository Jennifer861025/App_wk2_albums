import React from "react";
import { StyleSheet, View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

const App = () => {
  return (
    <View style={styles.bgc}>
      <Header />
      <AlbumList />
    </View>
  );
};

const styles = StyleSheet.create({
  bgc: {
    backgroundColor: '#000'
  }
});

export default App;
