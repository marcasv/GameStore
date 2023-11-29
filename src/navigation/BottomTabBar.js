import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Main } from "../views/Main/Main";
import { MyOrders } from "../views/Orders/MyOrders";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export const BottomTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: () => (
            <Icon name="shopping" size={25}/>
          ),
        }}
      />
      <Tab.Screen
        name="MyOrders"
        component={MyOrders}
        options={{
          headerShown: false,
          tabBarLabel: "My Games",
          tabBarIcon: () => (
            <Icon name="gamepad" size={25}/>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
