import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

const AddPhoneNumber = () => {
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.textInfo}>
            Add at least one phone number for the transfer ID so you can start
            transfering your money to another user.
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 1,
              marginVertical: 15,
            }}>
            <Icon
              style={{marginHorizontal: 5}}
              name="phone"
              size={20}
              color="#A9A9A9"
            />
            <Text style={{marginHorizontal: 5}}>+62</Text>
            <TextInput
              style={{marginHorizontal: 5}}
              keyboardType={'phone-pad'}
              placeholder="Enter your phone number"
            />
          </View>
        </ScrollView>
  
        <TouchableOpacity
          style={{
            width: '100%',
            paddingVertical: 15,
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#6379F4',
            borderRadius: 10,
            bottom: 0,
          }}>
          <Text style={{fontSize: 18, fontWeight: '700', color: 'white'}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AddPhoneNumber;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  textInfo: {
    fontSize: 16,
    fontWeight: '400',
    color: '#7A7886',
    marginVertical: 15,
  },
});
