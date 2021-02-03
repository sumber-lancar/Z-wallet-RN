import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import SmoothPinCode from 'react-native-smooth-pincode-input';
// import {useNavigation, useRoute} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/AntDesign';
import style from './pinStyle';

import {API_URL} from '@env';
import axios from 'axios';

//redux
import {useSelector} from 'react-redux';

const pinConfirmChange = ({navigation}) => {
  const [pin, setPin] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const token = useSelector((state) => state.auth.token);

  const postPinConfirmation = () => {
    setMsg('');
    console.log('pressed', pin);
    if (pin.length !== 6) {
      return setMsg('kosong'), setLoading(false);
    }
    const config = {
      headers: {
        'x-access-token': 'bearer ' + token,
      },
    };
    axios
      .get(`${API_URL}/auth/check-pin/${pin}`, config)
      .then((res) => {
        console.log(res);
        console.log('success');
        navigation.navigate('ChangePin');
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setMsg('false');
      });
  };

  return (
    <View style={{...style.mainContiner}}>
      <View style={{...style.header, marginLeft: 8}}>
        <Icon
          name="arrowleft"
          size={25}
          onPress={() => {
            // dispatch(cancelTransferCreator())
            navigation.goBack();
          }}
        />
        <Text style={{marginLeft: 15, fontSize: 20}}>Change Pin</Text>
      </View>
      <Text
        style={{
          color: '#3A3D42',
          paddingTop: 40,
          textAlign: 'center',
        }}>
        Enter your current 6 digits Zwallet PIN below to
      </Text>
      <Text
        style={{
          color: '#3A3D42',
          textAlign: 'center',
          marginTop: 10,
        }}>
        continue to the next steps.
      </Text>
      <Text style={{color: 'red', textAlign: 'center', marginTop: 10}}>
        {msg == 'kosong'
          ? 'Please Enter Your Pin'
          : msg == 'false'
          ? 'Pin Wrong'
          : ''}
      </Text>
      <View style={style.formPin}>
        <SmoothPinCode
          password
          mask="﹡"
          autoFocus={true}
          codeLength={6}
          value={pin.toString()}
          cellStyle={style.cellPin}
          onTextChange={(pin) => setPin(pin)}
        />
      </View>
      {!loading ? (
        <TouchableOpacity
          style={{
            ...style.loginBtn,
            backgroundColor: '#6379F4',
            alignSelf: 'center',
            position: 'absolute',
            top: '29%',
          }}
          onPress={() => {
            setLoading(true);
            postPinConfirmation();
          }}>
          <Text style={{color: 'white', fontSize: 20}}>Transfer Now</Text>
        </TouchableOpacity>
      ) : (
        <View
          style={{
            ...style.loginBtn,
            backgroundColor: '#6379F4',
            alignSelf: 'center',
            position: 'absolute',
            top: '29%',
          }}>
          <ActivityIndicator size="large" color="white" />
        </View>
      )}
      {/* <View style={{ alignItems: 'center', backgroundColor: 'white' }}>
                
            </View> */}
    </View>
  );
};

export default pinConfirmChange;

const styles = StyleSheet.create({
  error: {
    color: 'red',
    alignSelf: 'center',
    position: 'absolute',
    top: 175,
  },
  container: {
    flex: 1,
  },
});
