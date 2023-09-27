import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const Card = ({ vietnamese, english }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <TouchableOpacity onPress={flipCard}>
      <View style={styles.cardContainer}>
        <Text style={styles.cardText}>
          {isFlipped ? english : vietnamese}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
        width: '90%',
        height: 420,
        backgroundColor: '#ea4559',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
      },
      cardText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
        marginBottom: 'auto',
        marginTop: 'auto'
      }
})
export default Card;
