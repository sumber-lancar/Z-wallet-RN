import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector, connect} from 'react-redux';
import {setPhone} from '../../utils/redux/action/authAction';
import axios from 'axios';
import {API_URL} from '@env';

const AddPhoneNumber = ({navigation, setPhone}) => {
  const [phoneNumber, setPhoneNumber] = useState('+62');
  const [errMsg, setErrMsg] = useState('');
  const token = useSelector((state) => state.auth.token);

  const addPhone = () => {
    if (phoneNumber == '+62') {
      setErrMsg('Phone number must be fill');
    } else if (phoneNumber == '+6') {
      setErrMsg('Phone number must be fill');
    } else if (phoneNumber == '+') {
      setErrMsg('Phone number must be fill');
    } else if (phoneNumber == '') {
      setErrMsg('Phone number must be fill');
    } else {
      const data = {
        phone: phoneNumber,
      };
      axios
        .patch(`${API_URL}/user/changeInfo`, data, {
          headers: {
            'x-access-token': 'Bearer ' + token,
          },
        })
        .then((res) => {
          const phoneNum = res.data.data.phone;
          // setPhoneNumber(phoneNum);
          setPhone(phoneNum);
          navigation.navigate('Profile');
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.textInfo}>
            Add at least one phone number for the transfer ID so you can start
            transfering your money to another user.
          </Text>
          <Text style={{color: 'red', fontSize: 14, marginHorizontal: 10}}>
            {errMsg}
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
            {/* <Text style={{marginHorizontal: 5}}>+62</Text> */}
            <TextInput
              style={{marginHorizontal: 5}}
              label="phone"
              keyboardType={'phone-pad'}
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChangeText={(phoneNumber) => setPhoneNumber(phoneNumber)}
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
          }}
          onPress={() => addPhone()}>
          <Text style={{fontSize: 18, fontWeight: '700', color: 'white'}}>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPhone: (phone_user) => dispatch(setPhone(phone_user)),
  };
};
export default connect(null, mapDispatchToProps)(AddPhoneNumber);

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
