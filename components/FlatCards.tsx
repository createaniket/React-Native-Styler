import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>

      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>RED</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Pink</Text>
        </View>

        <View style={[styles.card, styles.cardFour]}>
          <Text>Green</Text>
        </View>

        <View style={[styles.card, styles.cardFive]}>
          <Text>Purple</Text>
        </View>

        <View style={[styles.card, styles.cardSix]}>
          <Text>Lime Green</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    fontSize: 28,

    textAlign: 'center',
    margin:10
  },
  container: {
    display: 'flex',
     alignItems: 'center',
     justifyContent: 'center',
     flexDirection:"row",
     flexWrap:'wrap'
},

  card: {

    width: 100,
    height: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding:10,
    margin:10
  },
  cardOne: {
    backgroundColor: 'red',
  },

  cardTwo: {
    backgroundColor: '#00e6f9',
  },

  cardThree: {
    backgroundColor: 'pink',
  },


  cardFour: {
    backgroundColor: '#00f99e',
  },

  cardFive: {
    backgroundColor: '#7100f9',
  },

  cardSix: {
    backgroundColor: '#DAF7A6',
  },
});
