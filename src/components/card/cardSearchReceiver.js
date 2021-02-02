import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {API_URL} from '@env';
const CardSearchReceiver = (props) => {
  return (
    <View>
      <TouchableOpacity style={styles.allContacts} onPress={() => props.navigation.navigate("Transfer")}>
        <Image
          style={styles.imgContact}
          source={{uri: API_URL + props.photo, width:50, height:50}}
        />
        <View style={{marginHorizontal: 15}}>
          <Text style={styles.textContacts}>{props.name}</Text>
          <Text style={styles.textPhone}>{props.phone}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardSearchReceiver;

const styles = StyleSheet.create({
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
