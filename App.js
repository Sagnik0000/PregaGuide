import { StyleSheet, Text, View } from "react-native";
import React from "react";
import welcome from "./screen/welcome";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import RecipeList from "./screen/RecipeList";
import Healthcal from "./components/Healthcal";
import Due from "./screen/Due";
import Weight from "./screen/Weight";
import Food from "./screen/Food";
import Droutine from "./screen/Droutine";


const Stack = createNativeStackNavigator();
const AppNavigator = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator screenOption = {{ headerShown: false}}>
        <Stack.Screen name = "welcome" component={welcome} options={{ headerShown: false }}/>
        <Stack.Screen name = "RecipeList" component={RecipeList} options={{ headerShown: false }}/>
        <Stack.Screen name = "Due" component={Due} options={{ headerShown: false }}/>
        <Stack.Screen name = "Weight" component={Weight} options={{ headerShown: false }}/>
        <Stack.Screen name = "Droutine" component={Droutine}options={{ headerShown: false }}/>
        <Stack.Screen name = "Food" component={Food} options={{ headerShown: false }}/>



      </Stack.Navigator>
    </NavigationContainer>

  );
};
export default AppNavigator;

const styles = StyleSheet.create({});