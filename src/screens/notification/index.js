import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import style from './notifStyle';

import {useSelector} from 'react-redux';
import {API_URL} from '@env';
import axios from 'axios';

const toPrice = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const Notification = ({navigation}) => {
  useEffect(() => {
    getData();
    return () => {
      getData();
    };
  }, [history]);
  const token_user = useSelector((state) => state.auth.token);
  const [history, setHistory] = useState([]);

  const getData = () => {
    const config = {
      headers: {
        'x-access-token': 'Bearer ' + token_user,
      },
    };
    axios
      .get(API_URL + '/transaction/getAllInvoice', config)
      .then((res) => {
        setHistory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <View style={{...style.mainContainer}}>
      <View style={{...style.header, marginLeft: 8}}>
        <Icon
          name="arrowleft"
          size={25}
          onPress={() => {
            // dispatch(cancelTransferCreator())
            navigation.goBack();
          }}
        />
        <Text style={{marginLeft: 15, fontSize: 20}}>Notification</Text>
      </View>
      <ScrollView>
        <View style={{...style.textContainer}}>
          <Text style={{...style.textHeader}}>Today</Text>
          {history.length != 0 &&
            history.map(({id, amount, fullname, type}) => {
              return (
                <View key={id}>
                  <TouchableOpacity style={{...style.allContacts}}>
                    {type == 'in' ? (
                      <Iconn name="arrow-down" style={{...style.icon}} />
                    ) : (
                      <Iconn name="arrow-up" style={{...style.icona}} />
                    )}
                    <View style={{marginHorizontal: 15}}>
                      <Text style={{...style.textContacts}}>
                        {type == 'in' ? 'Transfered from' : 'Transfered to'}{' '}
                        {fullname}
                      </Text>
                      <Text style={{...style.textPhone}}>
                        Rp.{toPrice(amount)}
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Notification;
