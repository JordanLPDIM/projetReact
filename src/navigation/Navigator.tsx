import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import { TermsScreen } from "../screens/TermsScreen";
import { QuoteScreen } from "../screens/QuoteScreen";
import { DetailsScreen } from "../screens/DetailsScreen";
import { Routes } from "./Routes";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={LoginScreen} />
        <Stack.Screen name="Terms" component={TermsScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen
          name={Routes.QUOTES_SCREEN}
          component={QuoteScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
﻿