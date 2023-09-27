import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import { useState, useEffect} from 'react'
import Button from '../components/Button'
import ButtonLarge from '../components/ButtonLarge'

export default function PlayGame({route, navigation}) {
    const [flashcards, setFlashcards] = useState([
        { "vietnamese": "tôn trọng, tuân theo", "english": "abide by" },
        { "vietnamese": "hợp đồng, giao kèo, sự đồng ý/thỏa thuận với nhau", "english": "agreement" },
        { "vietnamese": "sự cam đoan, bảo đảm", "english": "assurance" },
        { "vietnamese": "sự bãi bỏ, hủy bỏ", "english": "cancellation" },
        { "vietnamese": "quyết định, xác định", "english": "determine" }
      ]);
      
      const [noCardsLeft, setNoCardsLeft] = useState(false);

      const updateCardCount = () => {
        const cardCount = flashcards.length > 0 ? flashcards.length : "Đã hết thẻ";
        navigation.setParams({ cardCount });
      };

      useEffect(() => {
        updateCardCount(); 
      }, []);
      
    const [currentCardIndex, setCurrentCardIndex] = useState(0);
    const [removedCards, setRemovedCards] = useState([]);

    const handleNextCard = () => {
        if (currentCardIndex < flashcards.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
        }
    };

    const handlePreviousCard = () => {
        if (currentCardIndex > 0) {
        setCurrentCardIndex(currentCardIndex - 1);
        }
    };

    const handleRemove = () => {
        if (flashcards.length > 0) {
            const currentCard = flashcards[currentCardIndex];
            const updatedFlashCards = flashcards.filter((card, index) => index !== currentCardIndex);
            setRemovedCards([...removedCards, currentCard]);
            setCurrentCardIndex(0);
            setFlashcards(updatedFlashCards);
            updateCardCount();
        } else {
            setNoCardsLeft(true);
        }
    };
    const handleReset = () => {
        if (removedCards.length >= 1) {
            removedCards.forEach((card) => {
              flashcards.push(card);
            });
            updateCardCount();
            setRemovedCards([]); 
          }
    };

  return (
    <View style={styles.playGameContainer}>
        {noCardsLeft ? (
        <Text style={styles.noCardsLeftText}>Đã hết thẻ</Text>
      ) : (
        <>
        <Card
            vietnamese={flashcards[currentCardIndex].vietnamese}
            english={flashcards[currentCardIndex].english}
        />
        <View style= {styles.btnGroup}>
            <Button title="Previous" onPress={handlePreviousCard} />
            <Button title="Next" onPress={handleNextCard} />
        </View>
        
        <View style= {styles.btnLagGroup}>
            <ButtonLarge title="Remove From Deck" onPress={handleRemove}></ButtonLarge>
            <ButtonLarge title="Reset Deck" onPress={handleReset}></ButtonLarge>

        </View>
        </>
      )}
     
    </View>
  )
}

const styles = StyleSheet.create({
    playGameContainer: {
        width: '100%',
        marginTop: '10%'
    },
    btnGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '94%',
        alignSelf: 'center',
        marginTop: 15
    },
    btnLagGroup: {
        width: '94%',
        alignSelf: 'center',
        marginTop: 15
    }
})