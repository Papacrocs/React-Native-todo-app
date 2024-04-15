import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const FallBackScreen = () => {
  return (
    <View style={{alignItems:"center"}}>
      <Image
        source={require("../../assets/to-do-list.png")}
        style={{ height: 400, width: 300 }}
      />
      <Text>Start adding to your list.</Text>
    </View>
  );
};

export default FallBackScreen;

const styles = StyleSheet.create({});
