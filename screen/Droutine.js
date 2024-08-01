import React from 'react'
import { StyleSheet, Text, View, ScrollView , SafeAreaView} from "react-native";
import LottieView from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const Droutine = () => {
    return (
        <SafeAreaView>
        <ScrollView style={{ backgroundColor: "#d5dbdb" }}>
            <LottieView
                source={require('../assets/droutine.json')}
                autoPlay
                loop
                style={styles.lottie}
            />
            <View style={{backgroundColor:"#af7ac5", borderRadius:15, marginBottom:12}}>
                <Text style={{fontSize:35}}>Morning Routine</Text>
                <Text style={{fontSize:19}} >🌻 Wake Up Early:     Start your day early to have enough time for self-care and avoid rush.</Text>
                <Text style={{fontSize:19}} >💧 Hydrate:     Drink a glass of water to start the day hydrated.</Text>
                <Text style={{fontSize:19}} >🥞 Healthy Breakfast:    Eat a nutritious breakfast that includes whole grains, fruits, and proteins.</Text>
                <Text style={{fontSize:19}} >💊 Prenatal Vitamins:    ake your prenatal vitamins as prescribed by your doctor.</Text>
            </View>
            <View style={{backgroundColor:"#3498db", borderRadius:15, marginBottom:12}}>
                <Text style={{fontSize:35}}>Mid-Morning Routine</Text>
                <Text style={{fontSize:19}} >🧘‍♀️ Light Exercise:   Engage in light exercise such as walking, prenatal yoga, or swimming. Consult with your healthcare provider before starting any new exercise routine.</Text>
                <Text style={{fontSize:19}} >🥗 Healthy Snack:    Have a healthy snack like nuts, yogurt, or a fruit to keep your energy levels up.
                </Text>
            </View>
            <View style={{backgroundColor:"#85c1e9", borderRadius:15, marginBottom:12}}>
                <Text style={{fontSize:35}}>Afternoon Routine</Text>
                <Text style={{fontSize:19}} >🍚  Balanced Lunch:     Eat a balanced lunch with a mix of lean proteins, vegetables, and whole grains.</Text>
                <Text style={{fontSize:19}} >💧 Hydrate:    Continue drinking water throughout the day to stay hydrated.</Text>
                <Text style={{fontSize:19}} >😴  Rest: Take a short nap or rest to recharge. Pregnancy can be tiring, and rest is important for both you and your baby.</Text>
            </View>
            <View style={{backgroundColor:"#58d68d", borderRadius:15, marginBottom:12}}>
                <Text style={{fontSize:35}}>Evening Routine</Text>
                <Text style={{fontSize:19}} >🍚 Healthy Dinner:    Ensure your dinner is nutritious and balanced, with a focus on vegetables, lean proteins, and healthy fats.</Text>
                <Text style={{fontSize:19}} >💧 Hydrate:     Drink a glass of water to start the day hydrated.</Text>
                <Text style={{fontSize:19}} >🧘‍♀️ Light Activity: Engage in light activities like a walk or some gentle stretching.</Text>
            </View>
            <View style={{backgroundColor:"#f9e79f", borderRadius:15, marginBottom:12}}>
                <Text style={{fontSize:35}}>Night
                Routine</Text>
                <Text style={{fontSize:19}} >🛀  Relax:    Spend some time relaxing, whether it’s reading a book, meditating, or taking a warm bath.</Text>
                <Text style={{fontSize:19}} >😪  Sleep Routine:   Establish a consistent sleep routine. Aim for 7-9 hours of sleep each night. Use pillows to support your body and make sleeping more comfortable.</Text>
                <Text style={{fontSize:19}} >🌛  Prepare for Tomorrow:    Plan and prepare for the next day to reduce stress and ensure you have healthy meals and snacks ready.</Text>
            </View>
            <View style={{backgroundColor:"#f39c12", borderRadius:15, marginBottom:12}}>
                <Text style={{fontSize:35}}>⭐Weekly Activities⭐</Text>
                <Text style={{fontSize:18,fontWeight:"600"}} >Doctor Appointments: Keep up with your prenatal appointments and any other healthcare visits.</Text>
                <Text style={{fontSize:18,fontWeight:"600"}} >Education: Attend prenatal classes to learn about childbirth, breastfeeding, and newborn care.</Text>
                <Text style={{fontSize:18,fontWeight:"600"}} >Social Support: Spend time with family and friends, and consider joining a support group for pregnant women.</Text>
                <Text style={{fontSize:18,fontWeight:"600"}} >House Preparation: Gradually prepare your home for the baby’s arrival, setting up the nursery and gathering necessary supplies.</Text>
            </View>
            <View style={{backgroundColor:"#ec7063", borderRadius:15, marginBottom:12}}>
                <Text style={{fontSize:35}}>⭐Mental Health⭐
                </Text>
                <Text style={{fontSize:18,fontWeight:"600"}} >Mindfulness: Practice mindfulness or meditation to reduce stress and anxiety.</Text>
                <Text style={{fontSize:18,fontWeight:"600"}} >Positive Thinking: Engage in positive thinking and visualization exercises about your pregnancy and childbirth.</Text>
                <Text style={{fontSize:18,fontWeight:"600"}} >Counseling: If you feel overwhelmed, don’t hesitate to seek counseling or talk to a mental health professional.</Text>
            </View>
            

        </ScrollView>
        </SafeAreaView>
    );
};

export default Droutine

const styles = StyleSheet.create({
    lottie: {
        marginLeft:8,
        width: 400,
        height: 500,
    }
})