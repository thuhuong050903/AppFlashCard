import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header({cardCount}) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Play {cardCount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        width: '100%',
        height: 90,
        paddingTop: 20,
        marginBottom: 40
    },
    headerText: {
        fontSize: 40,
        alignSelf: 'center',
        fontWeight: 'bold'
    }
})