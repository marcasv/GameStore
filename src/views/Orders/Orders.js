import React from "react";
import {
  View, Text,
  SafeAreaView,
  StatusBar,
} from "react-native";

export const Orders = ({ navigation }) => {
  

  return (
    <SafeAreaView>
      <StatusBar
        animated={true}
        barStyle="dark-content"
      />
      <View>
        <Text>My Games View</Text>
      </View>
    </SafeAreaView>
  );
};
