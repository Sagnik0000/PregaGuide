import React from 'react'
import { StyleSheet, Text, View, ScrollView } from "react-native";
import LottieView from 'lottie-react-native';


const Food = () => {
    return (
        <ScrollView style={{ backgroundColor: "#fff" }}>
            <LottieView
                source={require('../assets/Yes.json')}
                autoPlay
                loop
                style={styles.lottie}
            />
            <View style={{ backgroundColor: "#d5f5e3", borderRadius: 15, marginBottom: 12 }}>
                <Text style={{ fontSize: 35, fontWeight: "bold",marginBottom:11 }}>What You Should Eat</Text>
                <Text style={{ fontSize: 19, marginBottom:11 }} >Fruits and Vegetables

                    Variety: Aim for a colorful variety to ensure a wide range of nutrients.</Text>
                <Text style={{ fontSize: 19, marginBottom:11 }} >Folate-Rich: Spinach, asparagus, avocados, and oranges</Text>
                <Text style={{ fontSize: 19 , marginBottom:11 }} >Vitamin C: Citrus fruits, strawberries, bell peppers, and broccoli.</Text>
                <Text style={{ fontSize: 19 , marginBottom:11 }} >Whole Grains

                    Examples: Brown rice, oatmeal, quinoa, whole wheat bread, and whole grain pasta.
                    Benefits: Provide fiber, B vitamins, and essential minerals.</Text>
                <Text style={{ fontSize: 19 , marginBottom:11}} >Protein-Rich Foods

                    Lean Meats: Chicken, turkey, and lean cuts of beef and pork.
                    Fish: Low-mercury options like salmon, trout, and sardines.</Text>
                <Text style={{ fontSize: 19, marginBottom:11 }} >Plant-Based Proteins: Beans, lentils, tofu, and tempeh.
                    Dairy: Greek yogurt, milk, and cheese for calcium and protein.</Text>
                <Text style={{ fontSize: 19, marginBottom:11 }} >Healthy Fats

                    Omega-3 Fatty Acids: Found in fatty fish, flaxseeds, chia seeds, and walnuts.
                    Monounsaturated Fats: Olive oil, avocados, and nuts.</Text>
            </View>

            <LottieView
                source={require('../assets/No.json')}
                autoPlay
                loop
                style={styles.lottie}
            />

            <View style={{ backgroundColor: "#f5b7b1", borderRadius: 15, marginBottom: 12 }}>
                <Text style={{ fontSize: 35, fontWeight: "bold" }}>What You Should Not Eat</Text>
                <Text style={{ fontSize: 19, marginBottom:11 }} >High-Mercury Fish

                    Examples:   Shark, swordfish, king mackerel, and tilefish.
                    Alternative: Opt for low-mercury fish like salmon, tilapia, and cod.</Text>
                <Text style={{ fontSize: 19, marginBottom:11 }} >Undercooked or Raw Seafood

                    Examples:  Sushi, sashimi, raw oysters, and clams.
                    Risk:  Can contain harmful bacteria and parasites.
                </Text>
                <Text style={{ fontSize: 19, marginBottom:    11 }} >Undercooked or Raw Meat and Poultry

                    Examples:   Rare or medium-rare meats, raw sausages.
                    Risk:   May contain harmful bacteria like E. coli, Salmonella, or Listeria.
                </Text>
                <Text style={{ fontSize: 19, marginBottom:11 }} >Raw or Undercooked Eggs

                    Examples:   Raw cookie dough, homemade Caesar dressing, and hollandaise sauce.
                    Risk:  Risk of Salmonella.
                </Text>
                <Text style={{ fontSize: 19, marginBottom:11 }} >Certain Soft Cheeses

                    Risk:  If made from unpasteurized milk, they can carry Listeria.
                </Text>
                <Text style={{ fontSize: 19, marginBottom:11 }} >Alcohol

                    Risk:  Can lead to fetal alcohol spectrum disorders (FASDs).
                </Text>
                <Text style={{ fontSize: 19, marginBottom:11 }} >Excessive Sodium

                    Sources:  Processed and packaged foods, canned soups.
                    Risk:  Can cause high blood pressure and water retention.
                </Text>


            </View>



        </ScrollView>
    );
};

export default Food

const styles = StyleSheet.create({
    lottie: {
        marginLeft: 8,
        width: 400,
        height: 500,
    }
})