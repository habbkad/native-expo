import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";

const Search = ({ navigation, route }) => {
  const { name } = route.params;
  return (
    <SafeAreaView>
      <Text>search</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "grey",
          height: 40,
          marginTop: 50,
          width: 160,
        }}
        onPress={() => navigation.navigate("profile")}
      >
        <Text>To profile screen</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: 80 }}>{name}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Search;
