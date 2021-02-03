import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {
  IconEyeClosed,
  IconEyeOpen,
  IconLock,
  IconMail,
} from '../../../../assets/icons';
import {FONT_BOLD, COLOR_MAIN, FONT_REG} from '../../../utils/constans';

import axios from 'axios';

import {API_URL} from '@env';

const regexPwd = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

const ResetPass = ({navigation, route}) => {
  //const [email, setEmail] = useState('');
  //route && route.params && setEmail(route.params.email);
  const {email} = route.params;
  const [secureText, setSecureText] = useState(true);
  const [newpass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [errorFrom, setErrorForm] = useState('');

  const resetpass = () => {
    setErrorForm('');
    if (newpass == '' || confirm == '') {
      return setErrorForm('kosong');
    } else if (newpass.length < 4 || newpass.length > 12) {
      return setErrorForm('errorpass');
    } else if (newpass !== confirm) {
      return setErrorForm('errorconfirm');
    } else if (!regexPwd.test(newpass)) {
      return setErrorForm('fail');
    }
    const data = {
      email: email,
      newPassword: newpass,
    };
    axios
      .patch(`${API_URL}/auth/reset-password`, data)
      .then((res) => {
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
        <Text style={styles.login}>Reset Password</Text>
        <Text style={{color: 'red', textAlign: 'center'}}>
          {errorFrom == 'kosong'
            ? 'Please enter new password'
            : errorFrom == 'errorpass'
            ? 'Enter Password Min 4 and Max 12'
            : errorFrom == 'errorconfirm'
            ? `Password didn't match`
            : errorFrom == 'fail'
            ? 'Password should at least have 1 LowCase (a-z), 1 UpperCase (A-Z), 1 Number (0-9)'
            : ''}
        </Text>
        <Text
          style={{...styles.textlogininfo, marginTop: 25, textAlign: 'center'}}>
          Create and confirm your new password so you can login to Zwallet.
        </Text>
        <View style={styles.form}>
          <IconLock />
          <TextInput
            secureTextEntry={secureText}
            style={{width: windowWidth * 0.65}}
            placeholder="Create new password"
            defaultValue={newpass}
            onChangeText={(newpass) => setNewPass(newpass)}
          />
          {secureText ? (
            <IconEyeClosed onPress={() => setSecureText(false)} />
          ) : (
            <IconEyeOpen onPress={() => setSecureText(true)} />
          )}
        </View>
        <View style={styles.form}>
          <IconLock />
          <TextInput
            secureTextEntry={secureText}
            style={{width: windowWidth * 0.65}}
            placeholder="Confirm new password"
            defaultValue={confirm}
            onChangeText={(confirm) => setConfirm(confirm)}
          />
          {secureText ? (
            <IconEyeClosed onPress={() => setSecureText(false)} />
          ) : (
            <IconEyeOpen onPress={() => setSecureText(true)} />
          )}
        </View>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => {
            console.log('Pressed');
            resetpass();
          }}>
          <Text style={{color: '#fff', fontSize: 18}}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ResetPass;

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
    marginTop: windowHeight * 0.15,
    marginBottom: 5,
  },
});
