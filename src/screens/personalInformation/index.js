import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const PersonalInformation = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textInfo}>
        We got your personal information from the sign up proccess. If you want
        to make changes on your information, contact our support.
      </Text>
      <View style={{marginVertical: 20}}>
        <View style={styles.card}>
          <Text style={styles.label}>First Name</Text>
          <Text style={styles.dataInfo}>Robert</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Last Name</Text>
          <Text style={styles.dataInfo}>Chandler</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Verified E-mail</Text>
          <Text style={styles.dataInfo}>pewdiepie1@gmail.com</Text>
        </View>
        <View style={styles.cardPhone}>
          <View>
            <Text style={styles.label}>Phone Number</Text>
            <Text style={styles.dataInfo}>+62 813-9387-7946</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={{fontSize: 14, fontWeight: '600', color: '#6379F4'}}>Manage</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PersonalInformation;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  card:{
      width: '100%',
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 10,
      marginVertical: 10,
      elevation: 5
  },
  cardPhone:{
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
    width: '100%', 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between'
  },
  textInfo: {
    fontSize: 16,
    fontWeight: '400',
    color: '#7A7886',
    marginVertical: 15,
  },
  label: {
      fontSize: 16,
      fontWeight: '400',
      color: '#7A7886'
  },
  dataInfo: {
      fontSize: 22,
      fontWeight: '700',
  }

});
