import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, ToastAndroid, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {IconMail} from '../../../../assets/icons';
import {FONT_BOLD, COLOR_MAIN, FONT_REG} from '../../../utils/constans';
import axios from 'axios';
import {API_URL} from '@env';

const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const ForgotPass = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [errorFrom, setErrorForm] = useState('');
  const forgotpass = () => {
    setErrorForm('');
    if (email === '') {
      return setErrorForm('kosong');
    } else if (!regexEmail.test(email)) {
      return setErrorForm('errormail');
    }
    const data = {
      email,
    };
    console.log('here');
    axios
      .post(`${API_URL}/auth/forgot-password`, data)
      .then((res) => {
        console.log(res);
        ToastAndroid.showWithGravity(
          'OTP Sent to your email',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
        navigation.navigate('Otp', {email});
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
        <Text style={styles.login}>Reset Password</Text>
        <Text style={{color: 'red'}}>
          {errorFrom == 'kosong'
            ? 'Please Enter Your Email'
            : errorFrom == 'errormail'
            ? 'Enter Email Properly'
            : ''}
        </Text>
        <Text
          style={{...styles.textlogininfo, marginTop: 25, textAlign: 'center'}}>
          Enter your Zwallet e-mail so we can send you a password reset link.
        </Text>
        <View style={{...styles.form, marginTop: 10}}>
          <IconMail />
          <TextInput
            style={{
              width: windowWidth * 0.73,
              marginRight: 10,
            }}
            placeholder="Enter your e-mail"
            defaultValue={email}
            onChangeText={(email) => setEmail(email)}
          />
        </View>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => {
            console.log('Pressed');
            forgotpass();
            //navigation.navigate('Otp');
          }}>
          <Text style={{color: '#fff', fontSize: 18}}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ForgotPass;

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
    marginTop: windowHeight * 0.3,
    marginBottom: 5,
  },
});
