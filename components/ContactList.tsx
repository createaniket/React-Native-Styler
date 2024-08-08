import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function ContactList() {
  const Members = [
    {
      id: 1,
      name: 'Nandini Kishore',
      post: 'Dev Intern',
      staus:"Doing their Best",
      ImageUrl:
        'https://media.licdn.com/dms/image/v2/D4E03AQELaNFImdhUKg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1679732133430?e=2147483647&v=beta&t=OHXGC9EniniLinQoO1fMi56_xCjzOrrGk3pelVWe4E4',
    },
    {
      id: 2,
      name: 'Karan Negi',
      post: 'Dev Intern',
      staus:"Doing their Best",
      ImageUrl:
        'https://media.licdn.com/dms/image/D4D03AQEfEnZQefxTkw/profile-displayphoto-shrink_200_200/0/1722250099395?e=2147483647&v=beta&t=o1Dy1eUL9oFErBq_L7j6WMIaB6lp3mCiGArv_6vkUDg',
    },
    {
      id: 3,
      name: 'Soumya Juyal',
      post: 'SEO Specialist',
      staus:"Doing their Best",
      ImageUrl:
        'https://media.licdn.com/dms/image/D5603AQHVZYEKHKDL1w/profile-displayphoto-shrink_200_200/0/1694359200599?e=2147483647&v=beta&t=k8JQGxyCn79qrYjQnoKUxg0OsbzCZ9sNGQ45ubgUauc',
    },
    {
      id: 4,
      name: 'Damyanti Uniyal',
      post: 'Marketing Head',
      staus:"Doing their Best",
      ImageUrl:
        'https://media.licdn.com/dms/image/D5603AQEr7pqgf1tWGQ/profile-displayphoto-shrink_200_200/0/1702699643260?e=2147483647&v=beta&t=l0M-3zLeACgEV00f62Be-2uwbPDK50uf6vQSmVu1NWM',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Team Members</Text>
      <ScrollView style={styles.MembersContainer}>
        {Members.map(item => (
          <View key={item.id} style={styles.card}>
            <View>
              <Image source={{uri: item.ImageUrl}} style={styles.MemberImage} />
            </View>

            <TouchableOpacity
              onPress={() => Linking.openURL(`${item.ImageUrl}`)}>
              <View style={styles.MmeberContennt}>
                <Text style={styles.MmemberName}>{item.name}</Text>
                <Text>{item.post} {item.staus}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
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
  MembersContainer: {
    width: '100%',
    padding:10

  },

  card: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 3,
    backgroundColor:'#9933ff',
    borderRadius:10,
    padding:5,
  },

  MemberImage: {
    height: 60,
    width: 60,

    borderRadius: 60 / 2,
  },
  MmemberName: {
    fontWeight: 'normal',
    fontSize: 18,
  },
  MmeberContennt: {
    padding: 10,
    width: '100%',
  },
});
