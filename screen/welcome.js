import React from 'react';
import { StyleSheet , ScrollView, Text, TouchableOpacity} from 'react-native';
import LottieView from 'lottie-react-native';

const welcome = ({ navigation }) => {
    return (
        <ScrollView style={{backgroundColor:"lightblue"}}>
            <LottieView
                source={require('../assets/pre.json')}
                autoPlay
                loop
                style={styles.lottie}
            />
            <Text style={{color:"#f96163", fontSize:20, fontWeight:"bold", textAlign:"center", marginTop:44, marginBottom:20}}>
            Worried ?! about your pragnency??</Text>
            <Text style={{fontSize:32,margin:10, fontWeight:"bold"}}>Don't Worry ... PregaGuide is here with you and your sunshine</Text>
            <TouchableOpacity onPress={()=> navigation.navigate("RecipeList")}  style={{backgroundColor:"#f96163", borderRadius:18,paddingVertical:18,width:"80%",alignItems:"center",marginLeft:35,marginBottom:44}}>
                <Text style={{textAlign:"center", color:"white"}}>Let's Go</Text>
            </TouchableOpacity>

        </ScrollView>
    );
};

export default welcome;

const styles = StyleSheet.create({
    lottie: {
        marginLeft:8,
        width: 400,
        height: 500,
    }
    

});

