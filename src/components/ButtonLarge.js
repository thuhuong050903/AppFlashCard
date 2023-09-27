import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const ButtonLarge = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
    margin: 10,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,

  },
  buttonText: {
    color: '#ea4559',
    fontSize: 18,
    alignSelf: 'center'
  },
});

export default ButtonLarge;
