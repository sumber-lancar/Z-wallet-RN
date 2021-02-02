import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from "react-native-vector-icons/Feather";

const ManagePhoneNumber = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textInfo}>
        You can only delete the phone number and then you must add another phone
        number.
      </Text>
      <View style={styles.cardPhone}>
          <View>
            <Text style={styles.label}>Phone Number</Text>
            <Text style={styles.dataInfo}>+62 813-9387-7946</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Icon style={{marginHorizontal: 5}} name="trash" size={20} color="#A9A9A9"/>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
};

export default ManagePhoneNumber;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 15,
        paddingVertical: 10,
      },
      cardPhone: {
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        marginVertical: 40,
        elevation: 5,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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
        color: '#7A7886',
      },
      dataInfo: {
        fontSize: 22,
        fontWeight: '700',
      },
});
