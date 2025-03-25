import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import {HomeScreen} from "../screens/HomeScreen";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

// Dummy screens for now
const MyTripsScreen = () => <View><Text>My Trips</Text></View>;
const CouponsScreen = () => <View><Text>Coupons</Text></View>;
const CartScreen = () => <View><Text>Cart</Text></View>;
const MoreScreen = () => <View><Text>More</Text></View>;

// Define Tab Navigator
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") iconName = "home";
            else if (route.name === "My Trips") iconName = "flight";
            else if (route.name === "Coupons") iconName = "local-offer";
            else if (route.name === "Cart") iconName = "shopping-cart";
            else if (route.name === "More") iconName = "menu";

            return <Icon name={iconName as string} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="My Trips" component={MyTripsScreen} />
        <Tab.Screen name="Coupons" component={CouponsScreen} />
        <Tab.Screen name="Cart" component={CartScreen} />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export type TabParamList = {
    Home: undefined;
    MyTrips: undefined;
    Coupons: undefined;
    Cart: undefined;
    More: undefined;
  };
  

export default TabNavigator;
