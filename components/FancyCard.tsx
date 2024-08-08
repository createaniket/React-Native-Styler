import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>

          <View style={[styles.card, styles.elevatedCard]}>
            <Image
              style={styles.CardImage}
              source={{
                uri: 'https://www.thegranddragonladakh.com/blog/admin/assets/img/post/image_2023-08-22-05-49-39_64e44c731bc7e.jpg',
              }}
            />
    
            <View style={styles.cardBody}>
              <Text style={styles.cardTitle}>Leh</Text>
              <Text style={styles.cardLabel}>Ladakh</Text>
              <Text style={styles.cardDesc}>
                Leh is a city in Ladakh in the Himalayan region. It is the largest
                city and the joint capital of Ladakh. Leh, located in the Leh
                district, was also the historical capital of the Kingdom of Ladakh.
              </Text>
            </View>
          </View>
      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          style={styles.CardImage}
          source={{
            uri: 'https://r2.community.samsung.com/t5/image/serverpage/image-id/1156318i27DAFEC1CE031188/image-size/large?v=v2&px=999',
          }}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Nainital</Text>
          <Text style={styles.cardLabel}>City of Taals</Text>
          <Text style={styles.cardDesc}>
            Nainital (Kumaoni: Naintāl; pronounced [nɛnːtaːl]) is a town and
            headquarters of Nainital district of Kumaon division, Uttarakhand,
            India. It is the judicial capital of Uttarakhand, the High Court of
            the state being located there and is the headquarters of an
            eponymous district.
          </Text>
        </View>
      </View>

      <View style={[styles.card, styles.elevatedCard]}>
        <Image
          style={styles.CardImage}
          source={{
            uri: 'https://www.tripsavvy.com/thmb/ZDRQXV-PiFDTFZu4x22mZkYuw9s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-930881934-5ae56fe48023b90036464e72.jpg',
          }}
        />

        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Manali</Text>
          <Text style={styles.cardLabel}>Bestum Best</Text>
          <Text style={styles.cardDesc}>
            Manali is a high-altitude Himalayan resort town in India’s northern
            Himachal Pradesh state. It has a reputation as a backpacking center
            and honeymoon destination. Set on the Beas River, it’s a gateway for
            skiing in the Solang Valley and trekking in Parvati Valley. It's
            also a jumping-off point for paragliding, rafting and mountaineering
            in the Pir Panjal mountains, home to 4,000m-high Rohtang Pass.
          </Text>
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
  card: {
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
  },
  elevatedCard: {},

  CardImage: {
    height: 200,
    // width:100
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
  },
  cardLabel: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'normal',
    marginBottom: 5,
  },
  cardDesc: {
    color: '#000',
    fontSize: 14,
  },
});
