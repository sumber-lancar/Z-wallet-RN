import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import {API_URL} from '@env';

const CardHome = ({
  id,
  navigation,
  receiver,
  photo,
  notes,
  amount,
  type,
  sender,
  date,
}) => {
  const name = useSelector((state) => state.auth.name_user);
  //console.log(date);
  var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const year = new Date(date).getFullYear();
  const month = new Date(date).getMonth();
  const setdate = new Date(date).getDate();
  console.log(months[month], setdate, year);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate('History Detail', {
          amount,
          notes,
          receiver,
          photo,
          type,
          sender,
        });
      }}>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.containerImage}>
          <Image
            style={styles.img}
            source={{uri: API_URL + photo, height: 56, width: 56}}
          />
        </View>
        <View style={styles.txtContainer}>
          <Text style={styles.txtName}>
            {receiver === name ? sender : receiver}
          </Text>
          <Text style={styles.status}>
            {type == 'in' ? 'Income' : 'Expense'}
          </Text>
        </View>
      </View>
      <View>
        <Text style={{...styles.price, color: type == 'in' ? 'green' : 'red'}}>
          {type == 'in' ? '+ ' : '- '} Rp.{amount}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 96,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginBottom: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerImage: {
    height: 56,
    width: 56,
    backgroundColor: '#EBEEF2',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    maxHeight: 56,
    maxWidth: 56,
    borderRadius: 10,
  },
  txtContainer: {
    marginLeft: 15,
    height: 50,
    justifyContent: 'space-between',
  },
  txtName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    color: '#7A7886',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CardHome;
