import axios from 'axios';
import {Icon} from 'native-base';
import React, {useState, useRef} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import {
  IconEyeOpen,
  IconLock,
  IconMail,
  IconEyeClosed,
} from '../../../../assets/icons';
import {
  FONT_BOLD,
  COLOR_MAIN,
  FONT_REG,
  FONT_LIGHT,
} from '../../../utils/constans';

import {API_URL} from '@env';

const Pin = ({navigation, route}) => {
  const {token} = route.params;
  const [code, setCode] = useState('');
  const pinInput = useRef();
  const checkCode = (code) => {
    if (code != '1234') {
      console.log('pin wrong');
    } else {
      console.log('pin success');
    }
  };
  const postPin = () => {
    const config = {
      headers: {
        'x-access-token': 'bearer ' + token,
      },
    };
    const data = {
      PIN: code,
    };
    axios
      .patch(`${API_URL}/auth/setPIN`, data, config)
      .then((res) => {
        console.log(res);
        navigation.navigate('PinSuccess');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Zwallet</Text>
      </View>
      <View style={styles.mainInput}>
        <Text style={styles.login}>Create Security PIN</Text>
        <Text style={{...styles.textlogininfo, marginTop: 25}}>
          Create a PIN that’s contain 6 digits number for
        </Text>
        <Text style={{...styles.textlogininfo, marginTop: 5, marginBottom: 20}}>
          security purpose in Zwallet.
        </Text>

        <SmoothPinCodeInput
          ref={pinInput}
          codeLength={6}
          cellStyle={{
            borderWidth: 1,
            borderRadius: 5,
            marginHorizontal: 2,
            borderColor: COLOR_MAIN,
          }}
          value={code}
          onTextChange={(code) => setCode(code)}
          onFulfill={checkCode}
          onBackspace={() => console.log('No more back.')}
        />

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => {
            console.log(code);
            postPin();
          }}>
          <Text style={{color: '#fff', fontSize: 18}}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Pin;

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#f2f2f2',
    height: windowHeight * 0.3,
  },
  title: {
    fontSize: 26,
    fontFamily: FONT_BOLD,
    color: COLOR_MAIN,
    marginTop: windowHeight * 0.11,
    marginHorizontal: windowWidth * 0.38,
  },
  mainInput: {
    height: windowHeight * 0.7,
    width: windowWidth,
    backgroundColor: '#fff',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
  },
  login: {
    fontFamily: FONT_BOLD,
    fontSize: 24,
    lineHeight: 32,
    marginTop: 30,
  },
  textlogininfo: {
    fontFamily: FONT_REG,
    color: '#3A3D42',
    marginHorizontal: 44,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLOR_MAIN,
    width: windowWidth * 0.85,
    marginTop: 30,
  },
  btnLogin: {
    backgroundColor: COLOR_MAIN,
    width: windowWidth * 0.85,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 200,
    marginBottom: 5,
  },
});
