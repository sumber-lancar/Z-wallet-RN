import React, {useState, useRef} from 'react';
import {Dimensions, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';
import axios from 'axios';

import {API_URL} from '@env';

import {FONT_BOLD, COLOR_MAIN, FONT_REG} from '../../../utils/constans';

const AccountActivation = ({navigation, route}) => {
  const {email} = route.params;
  const [code, setCode] = useState('');
  const pinInput = useRef();

  const activation = () => {
    axios
      .get(`${API_URL}/auth/activate/${email}/${code}`)
      .then((res) => {
        ToastAndroid.showWithGravity(
          'Account Activated',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
        console.log(res);
        navigation.navigate('Login');
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
        <Text style={styles.login}>Account Activation</Text>
        <Text
          style={{
            ...styles.textlogininfo,
            marginTop: 25,
            textAlign: 'center',
            marginBottom: 20,
          }}>
          Please enter Activation Code has sent to your email
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
          onBackspace={() => console.log('No more back.')}
          keyboardType="default"
        />

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => {
            //console.log(code);
            activation();
          }}>
          <Text style={{color: '#fff', fontSize: 18}}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AccountActivation;

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
