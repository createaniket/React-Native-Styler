import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>

      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.elevtedcardtext}>Tap</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.elevtedcardtext}>Me</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.elevtedcardtext}>To</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.elevtedcardtext}>Scroll</Text>
        </View>

        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.elevtedcardtext}>Line</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

    headingText: {
        fontWeight: 'bold',
        fontSize: 28,
        textAlign: 'center',
        margin:10,
      },
      container:{
        padding:10,
      },
      card:{
        width:100,
        height:100,
        borderRadius:10,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
  


      },

      cardElevated:{
        backgroundColor:'#f1f1f1',
        margin:5,
        // elevation:4


      },

      elevtedcardtext:{
        color:'#000'
      }
});
