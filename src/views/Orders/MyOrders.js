import React from "react";
import { Orders } from "./Orders";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export const MyOrders = () => {
  return (
    <Stack.Navigator initialRouteName="Orders">
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
