import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Weight = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [week, setWeek] = useState('');
  const [weightGain, setWeightGain] = useState('');

  const calculateWeightGain = () => {
    const prePregnancyBMI = weight / ((height / 100) ** 2);
    let recommendedGain;

    if (prePregnancyBMI < 18.5) {
      recommendedGain = 12.5 + (week / 40) * 5.5; // Underweight
    } else if (prePregnancyBMI >= 18.5 && prePregnancyBMI < 24.9) {
      recommendedGain = 11.5 + (week / 40) * 3.5; // Normal weight
    } else if (prePregnancyBMI >= 25 && prePregnancyBMI < 29.9) {
      recommendedGain = 7 + (week / 40) * 2; // Overweight
    } else {
      recommendedGain = 5 + (week / 40) * 1; // Obese
    }

    setWeightGain(recommendedGain.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pregnancy Weight Gain Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Pre-pregnancy Weight (kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Height (cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Current Week of Pregnancy"
        keyboardType="numeric"
        value={week}
        onChangeText={setWeek}
      />
      <TouchableOpacity style={styles.button} onPress={calculateWeightGain}>
        <Text style={styles.buttonText}>Calculate</Text>
      </TouchableOpacity>
      {weightGain ? (
        <Text style={styles.resultText}>Recommended Weight Gain: {weightGain} kg,.....</Text>
      ) : null}
    </View>
  );
};

export default Weight;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    width: '80%',
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'pink',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultText: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  },
});
