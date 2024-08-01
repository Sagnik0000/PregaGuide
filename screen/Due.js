import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import LottieView from 'lottie-react-native';

const Due = () => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [dueDate, setDueDate] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const calculateDueDate = () => {
    let lmp = new Date(date);
    lmp.setFullYear(lmp.getFullYear() + 1);
    lmp.setMonth(lmp.getMonth() - 3);
    lmp.setDate(lmp.getDate() + 7);
    setDueDate(lmp.toDateString());
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/babyy.json')}
        autoPlay
        loop
        style={styles.lottie}
      />
      <TouchableOpacity style={styles.button} onPress={showDatepicker}>
        <Text style={styles.buttonText}>👉First Select Last Menstrual Period</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={'date'}
          display="default"
          onChange={onChange}
        />
      )}
      <TouchableOpacity style={styles.button} onPress={calculateDueDate}>
        <Text style={styles.buttonText}>🌺Calculate Due Date🌺</Text>
      </TouchableOpacity>
      {dueDate ? <Text style={styles.resultText}>Estimated Due Date: {dueDate}</Text> : null}
    </View>
  );
};

export default Due;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgreen',
    padding: 20,
  },
  button: {
    backgroundColor: 'yellow',
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
  lottie: {
    marginLeft: 8,
    width: 200,
    height: 200,
  },
});
