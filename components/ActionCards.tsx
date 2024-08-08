import {Image, Linking, StyleSheet, Text, Touchable, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function ActionCards() {
  function OpenWebsite(WebsiteLink: string) {
    Linking.openURL(WebsiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>About Me</Text>

      <View style={styles.cardContainer}>

        <View style={styles.card}>
    

          <Image
          style={styles.CardImage}
          source={{uri:"https://aniketdev-portfolio.netlify.app/static/media/heroimg.c936b0d7f879aed1d342.png"}}
          
          />

          <View style={styles.cardBody} >

          <Text style={styles.cardTitle}>Aniket pratap Singh</Text>

          <Text style={styles.cardDesc} numberOfLines={3}>As a Full-stack Developer at Inciterz, I design, develop, test, debug, and deploy web and mobile applications using the MERN stack. I have over two years of experience working with fast-paced start-ups and delivering high-quality products that meet the needs and expectations of the clients and users.</Text>
          </View>

          <View>

            <TouchableOpacity 
            onPress={ () => OpenWebsite('https://in.linkedin.com/in/aniket-mern')}>

                <Text style={styles.cardButton}>More About Me</Text>
            </TouchableOpacity>
       

          </View>


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
    margin: 10,
  },

  cardContainer: {},
  card: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
  },
  CardImage:{
    height:350,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    padding: 10,
  },
  cardTitle: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 28,
    marginBottom:10

  },

  cardDesc: {
    color: '#000',
    fontSize: 14,
  },

  cardButton:{

    color:"#fff",
    backgroundColor:'#06e3fd',
    width:'40%',
    padding:10,
    textAlign:'center',
    margin:5,
    borderRadius:5

  }

});
