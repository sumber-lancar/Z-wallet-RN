import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import SmoothPinCode from 'react-native-smooth-pincode-input';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import axios from 'axios';

import Icon from 'react-native-vector-icons/AntDesign';
import style from './styleChangePin';
import {API_URL} from '@env';

const ChangePin = ({navigation}) => {
  // const userId = useSelector((state) => state.auth.id);
  const token = useSelector((state) => state.auth.token);
  const [pin, setPin] = useState('');
  // const [msg, setMsg] = useState(null);
  // const navigation = useNavigation();
  const updatePin = () => {
    const data = {
      pin,
    };
    const config = {
      headers: {
        'x-access-token': 'Bearer ' + token,
      },
    };
    axios
      .patch(`${API_URL}/user/changeInfo`, data, config)
      .then((res) => {
        console.log(res.msg);
      })
      .catch((err) => {
        console.log('error in here');
        console.log(err);
      });
    navigation.navigate('Home');
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
          ...style.contentTextLoginDesc,
          color: '#3A3D42',
          paddingTop: 40,
        }}>
        Enter your current 6 digits Zwallet PIN beloew to
      </Text>
      <Text style={{...style.contentTextLoginDesc, color: '#3A3D42'}}>
        continue to the next step
      </Text>
      <View style={style.formPin}>
        <SmoothPinCode
          autoFocus={true}
          codeLength={6}
          value={pin.toString()}
          cellStyle={style.cellPin}
          onTextChange={(pin) => setPin(pin)}
        />
      </View>
      {/* {msg !== null ? <Text style={errorStyle.error}>{msg}</Text> : null} */}
      {/* </View> */}
      <TouchableOpacity
        style={{
          ...style.loginBtn,
          backgroundColor: '#6379F4',
          alignSelf: 'center',
          position: 'absolute',
          top: '29%',
        }}
        onPress={updatePin}>
        <Text style={{color: 'white', fontSize: 20}}>Continue</Text>
      </TouchableOpacity>

      {/* <View style={{ alignItems: 'center', backgroundColor: 'white' }}>
                
            </View> */}
    </View>
  );
};

export default ChangePin;

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
