import React from 'react'
import { StyleSheet, Text, View } from "react-native";
import LottieView from 'lottie-react-native';

const Header=()=> {
  return (
    <View style={{flexDirection:"row"}}>
        <Text style={{flex:1, color:"blue" ,fontSize:18,fontWeight:"900",marginLeft:12}}>Hi, QUEEN👑❤️</Text>
        <LottieView
                source={require('../assets/babyy.json')}
                autoPlay
                loop
                style={styles.lottie}
            />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  lottie: {
      marginTop:6,
      marginLeft:5,
      width: 300,
      height: 310,
  }
});