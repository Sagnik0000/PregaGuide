import React from 'react'
import { StyleSheet, Text, View, ScrollView, Touchable, TouchableOpacity } from "react-native";
import { categories, colors } from "../constant";
const CategoriesFilter = () => {




    return (
        <View style={{ flexDirection: "row" }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.map((category, index) => {
                    return (
                       
                        <TouchableOpacity onPress={() => handlepress(item)} style={{
                            backgroundColor: colors.color_primary,
                            marginRight: 36,
                            borderRadius: 8,
                            paddingHorizontal: 16,
                            paddingVertical: 18,
                            shadowColor: "#000",
                            shadowOffset: {},
                            shadowOpacity: 0,
                            shadowRadius: 7,
                            marginVertical: 16,

                        }}>
                            <Text>{category.category}</Text>
                        </TouchableOpacity>

                    );

                })}
            </ScrollView>
        </View>
    );
};

export default CategoriesFilter;

const styles = StyleSheet.create({});