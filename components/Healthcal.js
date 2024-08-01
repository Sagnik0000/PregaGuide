import React from 'react'
import { StyleSheet, Text, View, Image, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { colors, healthList } from '../constant';
import { useNavigation } from '@react-navigation/native';

const Healthcal = () => {
    const navigation = useNavigation();

    const handlepress = (item) => {
        switch (item.id) {
            case '01':
                navigation.navigate('Due');
                break;
            case '02':
                navigation.navigate('Weight');
                break;
            case '03':
                navigation.navigate('Droutine');
                break;
            case '04':
                navigation.navigate('Food');
                break;
            default:
                break;    
        }
    };
    return (
        <ScrollView >
            <FlatList
                data={healthList}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handlepress(item) }
                        style={{
                            backgroundColor: colors.color_light,
                            shadowColor: "#000",
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.1,
                            shadowRadius: 7,
                            borderRadius: 16,
                            marginVertical: 16,
                            alignItems: "center",
                            paddingHorizontal: 8,
                            paddingVertical: 26,

                        }}>
                        <Image
                            source={item.image}
                            style={{ width: 180, height: 200, resizeMode: "center" }} />
                        <Text>{item.namee}</Text>
                    </TouchableOpacity>
                )}
                numColumns={2}
                columnWrapperStyle={{
                    justifyContent: "space-between",

                }}
                showsVerticalScrollIndicator={false}
            />
        </ScrollView>
    );
};

export default Healthcal;

const styles = StyleSheet.create({});