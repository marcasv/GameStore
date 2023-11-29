import React from "react";
import { Home } from "./Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../../components/Header";
import { ProductDetails } from "../Product/ProductDetails";

const Stack = createNativeStackNavigator();

export const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
