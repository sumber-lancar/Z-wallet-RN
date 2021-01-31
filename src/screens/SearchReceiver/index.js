import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {FlatGrid} from 'react-native-super-grid';

const SearchReceiver = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.formSearch}>
        <TouchableOpacity>
          <Icon
            name="search"
            size={30}
            color="#000000"
            style={{marginHorizontal: 5}}
          />
        </TouchableOpacity>
        <TextInput style={{width: '100%'}} placeholder="Search receiver here" />
      </View>
      <Text
        style={{
          color: '#4D4B57',
          fontSize: 18,
          fontWeight: '700',
          marginVertical: 15,
        }}>
        Quick Access
      </Text>
      <ScrollView horizontal>
        <TouchableOpacity style={styles.card}>
          <Image
            style={styles.img}
            source={require('../../assets/images/michi.png')}
          />

          <Text style={styles.textContacts}>Michi</Text>
          <Text style={styles.textPhone}>-9994</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            style={styles.img}
            source={require('../../assets/images/michi.png')}
          />

          <Text style={styles.textContacts}>Michi</Text>
          <Text style={styles.textPhone}>-9994</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            style={styles.img}
            source={require('../../assets/images/michi.png')}
          />

          <Text style={styles.textContacts}>Michi</Text>
          <Text style={styles.textPhone}>-9994</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <Image
            style={styles.img}
            source={require('../../assets/images/michi.png')}
          />

          <Text style={styles.textContacts}>Michi</Text>
          <Text style={styles.textPhone}>-9994</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={{marginVertical: 20}}>
        <Text
          style={{
            color: '#4D4B57',
            fontSize: 18,
            fontWeight: '700',
            marginVertical: 15,
          }}>
          All Contacts
        </Text>
        <Text style={{color: '#4D4B57', fontSize: 18, fontWeight: '400'}}>
          17 Contacts Founds
        </Text>
      </View>
      <TouchableOpacity style={styles.allContacts}>
        <Image
          style={styles.imgContact}
          source={require('../../assets/images/michi.png')}
        />
        <View style={{marginHorizontal: 15}}>
          <Text style={styles.textContacts}>Samuel Suhi</Text>
          <Text style={styles.textPhone}>+62 813-8492-9994</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.allContacts}>
        <Image
          style={styles.imgContact}
          source={require('../../assets/images/michi.png')}
        />
        <View style={{marginHorizontal: 15}}>
          <Text style={styles.textContacts}>Samuel Suhi</Text>
          <Text style={styles.textPhone}>+62 813-8492-9994</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.allContacts}>
        <Image
          style={styles.imgContact}
          source={require('../../assets/images/michi.png')}
        />
        <View style={{marginHorizontal: 15}}>
          <Text style={styles.textContacts}>Samuel Suhi</Text>
          <Text style={styles.textPhone}>+62 813-8492-9994</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SearchReceiver;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  formSearch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#B5BDCC',
    borderRadius: 10,
  },
  card: {
    width: 110,
    marginHorizontal: 5,
    marginVertical: 10,
    padding: 20,
    borderRadius: 20,
      backgroundColor: 'white',
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 10,
  },
  imgContact: {
    width: 70,
    height: 70,
    borderRadius: 15,
    overflow: 'hidden',
  },
  textPhone: {
    color: '#4D4B57',
    fontSize: 13,
    fontWeight: '400',
  },
  textContacts: {
    color: '#4D4B57',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 7,
  },
  allContacts: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 5,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    borderColor: 'black',
    alignItems: 'center',
    elevation: 5
  },
});
