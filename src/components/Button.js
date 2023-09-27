import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#efeff3',
    padding: 5,
    borderRadius: 5,
    borderColor: '#ea4559',
    margin: 10,
    borderWidth: 1,
    width: 120,
    
  },
  buttonText: {
    color: '#ea4559',
    fontSize: 18,
    alignSelf: 'center'
  },
});

export default Button;
