import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import { useState} from 'react'
import Button from '../components/Button'
import ButtonLarge from '../components/ButtonLarge'
import Header from '../components/Header'

export default function PlayGame() {

    const [flashcards, setFlashcards] = useState([
        { "vietnamese": "tôn trọng, tuân theo", "english": "abide by" },
        { "vietnamese": "hợp đồng, giao kèo, sự đồng ý/thỏa thuận với nhau", "english": "agreement" },
        { "vietnamese": "sự cam đoan, bảo đảm", "english": "assurance" },
        { "vietnamese": "sự bãi bỏ, hủy bỏ", "english": "cancellation" },
        { "vietnamese": "quyết định, xác định", "english": "determine" }
      ]);
      

     const [cardCount, setCardCount] = useState(flashcards.length);
     const [isFlipped, setIsFlipped] = useState(false);

    const [currentCardIndex, setCurrentCardIndex] = useState(0);

    const [removedCards, setRemovedCards] = useState([]);

    const handleNextCard = () => {
        if (currentCardIndex < flashcards.length - 1) {
        setCurrentCardIndex(currentCardIndex + 1);
        setIsFlipped(false);

        }
    };

    const handlePreviousCard = () => {
        if (currentCardIndex > 0) {
        setCurrentCardIndex(currentCardIndex - 1);
        setIsFlipped(false);

        }
    };

    const handleRemove = () => {
        if (flashcards.length > 0) {
            const currentCard = flashcards[currentCardIndex];
            const updatedFlashCards = flashcards.filter((card, index) => index !== currentCardIndex);
            setRemovedCards([...removedCards, currentCard]);
            setFlashcards(updatedFlashCards);
            setCardCount(updatedFlashCards.length);
        } 
    };
    const handleReset = () => {
        if (removedCards.length >= 1) {
            removedCards.forEach((card) => {
              flashcards.push(card);
            });
            setCardCount(flashcards.length);
            setRemovedCards([]); 
          }
    };

  return (
    <View style={styles.playGameContainer}>
        <Header cardCount={cardCount}></Header>
        {flashcards.length == 0 ? (
        <Text style={styles.noCardsLeft}>Đã hết thẻ</Text>
      ) : (
        <Card
        isFlipped={isFlipped}
        onFlip={setIsFlipped}
        content={flashcards[currentCardIndex]}
            
        />
        )}

      <View style= {styles.btnGroup}>
        <Button title="Previous" onPress={handlePreviousCard} />
        <Button title="Next" onPress={handleNextCard} />
    </View>
    
    <View style= {styles.btnLagGroup}>
        <ButtonLarge title="Remove From Deck" onPress={handleRemove}></ButtonLarge>
        <ButtonLarge title="Reset Deck" onPress={handleReset}></ButtonLarge>
    </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
    playGameContainer: {
        width: '100%',
        marginTop: '0%'
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
    },
    noCardsLeft: {
        width: '90%',
        height: 420,
        backgroundColor: '#ea4559',
        borderRadius: 10,
        fontSize: 40,
        textAlign: 'center',
        paddingTop: 'auto',
        paddingBottom: 'auto',
        marginLeft:'auto',
        marginRight:'auto',
        color: 'white',
        fontWeight: 'bold',
        paddingTop: '40%'
    }
})