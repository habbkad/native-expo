import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 40 }}>Home</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "grey",
          height: 40,
          marginTop: 50,
          width: 160,
        }}
        onPress={() => {
          navigation.navigate("search", { name: "abu" });
        }}
      >
        <Text>To search screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Home;
