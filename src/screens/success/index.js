import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Checklist, ImgProfile} from '../../assets';
import {API_URL} from '@env';

//redux
import {useSelector} from 'react-redux';

const Success = ({navigation, route}) => {
  const {amount, notes} = route.params;
  const balance = useSelector((state) => state.balance.balance);
  const receiver = useSelector((state) => state.receiver);
  const date = Date().split(' ');
  const toPrice = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return (
    <ScrollView>
      <View style={{marginTop: 50}}>
        <View style={styles.checklist}>
          <Image source={Checklist} />
        </View>
        <Text style={styles.trfSuccess}>Transfer Success</Text>
      </View>
      <Text style={styles.detail}>Details</Text>
      <View style={styles.container}>
        <View style={styles.card}>
          <Text style={{fontSize: 16, color: '#7A7886'}}>Amount</Text>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#514F5B'}}>
            Rp.{toPrice(amount)}
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={{fontSize: 16, color: '#7A7886'}}>Balance Left</Text>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: '#514F5B'}}>
            Rp.{toPrice(balance - amount)}
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
      </View>
      <Text
        style={{
          marginLeft: 16,
          color: '#514F5B',
          fontSize: 18,
          fontWeight: 'bold',
        }}>
        Transfer to
      </Text>
      <View style={styles.card1}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.img}
            source={{uri: API_URL + receiver.photo, width: 50, height: 50}}
          />
          <View style={styles.nameNumber}>
            <Text style={{fontSize: 16, fontWeight: '700', color: '#4D4B57'}}>
              {receiver.name_user}
            </Text>
            <Text style={{color: '#7A7886'}}>{receiver.phone}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.btn}
        onPress={() => {
          navigation.navigate('Home');
        }}>
        <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
          Back To Home
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  checklist: {
    height: 70,
    width: 70,
    backgroundColor: '#1EC15F',
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  trfSuccess: {
    fontSize: 22,
    fontWeight: '800',
    marginTop: 30,
    alignSelf: 'center',
    marginBottom: 40,
    color: '#4D4B57',
  },
  detail: {
    fontSize: 18,
    fontWeight: '700',
    color: '#514F5B',
    marginLeft: 16,
  },
  container: {
    paddingHorizontal: 16,
    marginTop: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 92,
    width: 343,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card1: {
    height: 96,
    width: 343,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 20,
    alignSelf: 'center',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 56,
    height: 56,
    borderRadius: 10,
  },
  nameNumber: {
    height: 45,
    justifyContent: 'space-between',
    marginLeft: 15,
    marginTop: 2,
  },
  btn: {
    height: 57,
    width: 343,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6379F4',
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 30,
  },
});

export default Success;
