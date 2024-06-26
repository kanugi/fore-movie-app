import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Favorite from "../screens/Favorite";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = (): JSX.Element => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="home" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={Search}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="search" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Favorite"
      component={Favorite}
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="heart" size={24} color={color} />
        ),
      }}
    />
  </Tab.Navigator>


)

export default BottomTabNavigation