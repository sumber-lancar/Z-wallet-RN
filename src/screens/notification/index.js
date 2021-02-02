import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import Iconn from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/AntDesign';
import style from './notifStyle';

const Notification = ({navigation}) => {
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
          <View>
            <TouchableOpacity
              style={{...style.allContacts}}
    >
              <Iconn name="arrow-down-alt" />
              <View style={{marginHorizontal: 15}}>
                <Text style={{...style.textContacts}}>Transfer</Text>
                <Text style={{...style.textPhone}}>Rp.2500000</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{...style.textContainer}}>
          <Text style={{...style.textHeader}}>This Week</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Notification;
