import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, StatusBar} from 'react-native';
import {Card1} from '../../assets';

const Confirmation = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="white"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.detail}>Transfer to</Text>
        <View
          style={styles.allContacts}>
          <Image style={styles.imgContact} source={Card1} />
          <View style={{marginHorizontal: 15}}>
            <Text style={styles.textContacts}>Samuel Suhi</Text>
            <Text style={styles.textPhone}>+62 813 8492-9994</Text>
          </View>
        </View>
        <Text style={styles.detail}>Details</Text>
        <View style={styles.card}>
          <Text style={{fontSize: 16, color: '#7A7886'}}>Amount</Text>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#514F5B'}}>
            Rp.100.000
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={{fontSize: 16, color: '#7A7886'}}>Balance Left</Text>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#514F5B'}}>
            Rp20.000
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={{fontSize: 16, color: '#7A7886'}}>Date & Time</Text>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#514F5B'}}>
            May 11, 2020 - 12.20
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={{fontSize: 16, color: '#7A7886'}}>Notes</Text>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#514F5B'}}>
            For buying some socks
          </Text>
        </View>
      </ScrollView>
      <View style={{bottom: 0, justifyContent: 'center', alignItems: 'center', marginBottom: 30, marginTop: 10}}>
      <TouchableOpacity style={styles.btnContinue}>
          <Text style={{fontSize: 16, color: 'white'}}>Continue</Text>
      </TouchableOpacity>

      </View>
    </View>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 16,
    marginTop: 21,
    // justifyContent: 'center',
    // alignItems: 'center',
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
  card: {
    height: 92,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    fontWeight: '700',
    color: '#514F5B',
    // marginLeft: 16
    marginVertical: 10
  },
  btnContinue:{
      width: '100%',
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center',
      bottom: 0,
      backgroundColor: '#6379F4'
  }
});
