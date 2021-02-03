import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Card1} from '../../assets';
import {API_URL} from '@env';

//redux
import {useSelector} from 'react-redux';

const Confirmation = ({navigation, route}) => {
  const {amount, notes} = route.params;
  const receiver = useSelector((state) => state.receiver);
  const balance = useSelector((state) => state.balance.balance);
  const date = Date().split(' ');
  console.log(date);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" translucent backgroundColor="white" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.detail}>Transfer to</Text>
        <View style={styles.allContacts}>
          <Image
            style={styles.imgContact}
            source={{uri: API_URL + receiver.photo, width: 50, height: 50}}
          />
          <View style={{marginHorizontal: 15}}>
            <Text style={styles.textContacts}>{receiver.name_user}</Text>
            <Text style={styles.textPhone}>{receiver.phone}</Text>
          </View>
        </View>
        <Text style={styles.detail}>Details</Text>
        <View style={styles.card}>
          <Text style={{fontSize: 16, color: '#7A7886'}}>Amount</Text>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#514F5B'}}>
            Rp{amount}
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={{fontSize: 16, color: '#7A7886'}}>Balance Left</Text>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#514F5B'}}>
            Rp{balance - Number(amount)}
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={{fontSize: 16, color: '#7A7886'}}>Date & Time</Text>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#514F5B'}}>
            {date[1]} {date[2]}, {date[3]} - {date[4].substring(0, 5)}
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={{fontSize: 16, color: '#7A7886'}}>Notes</Text>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#514F5B'}}>
            {notes}
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          bottom: 0,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 30,
          marginTop: 10,
        }}>
        <TouchableOpacity
          style={styles.btnContinue}
          onPress={() => {
            navigation.navigate('pinConfirm', {amount, notes});
          }}>
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
    elevation: 5,
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
    marginVertical: 10,
  },
  btnContinue: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    bottom: 0,
    backgroundColor: '#6379F4',
  },
});
