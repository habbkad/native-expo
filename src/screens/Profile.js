import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from "react-native";

const Profile = () => {
  return (
    <SafeAreaView>
      <Text>Profile</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "grey",
          height: 40,
          marginTop: 50,
          width: 160,
        }}
      >
        <Text>To home screen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Profile;
