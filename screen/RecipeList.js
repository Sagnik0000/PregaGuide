import React, { useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, ScrollView } from "react-native";
import CategoriesFilter from '../components/CategoriesFilter';
import Healthcal from '../components/Healthcal';
import Header from '../components/Header';
const RecipeList = () => {
  const [activeCategory, setactivecategory] = useState('Breakfast')
  return (
    <ScrollView style={{backgroundColor:"lightpink"}}>

    <View>
        <Header />
      </View>
     

      <View style={{marginTop:22, flex: 1}}>
        <Text style={{ fontSize: 22, fontWeight: "bold", margin:15, color:"#21618c" }}>“I am proud of many things in life, but nothing beats being a mother.”

</Text>
        <Healthcal />
      </View>
    </ScrollView>
  );
};

export default RecipeList;

const styles = StyleSheet.create({

});
