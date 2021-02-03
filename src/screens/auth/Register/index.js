import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {
  IconEyeOpen,
  IconLock,
  IconMail,
  IconEyeClosed,
  IconPerson,
} from '../../../../assets/icons';
import {FONT_BOLD, COLOR_MAIN, FONT_REG} from '../../../utils/constans';
import axios from 'axios';

import {API_URL} from '@env';

const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const regexPwd = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;

const Register = ({navigation}) => {
  const [secureText, setSecureText] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorFrom, setErrorForm] = useState('');

  const register = () => {
    //validation//
    setErrorForm('');
    if (firstName === '' || email === '' || password === '') {
      return setErrorForm('kosong');
    } else if (firstName.length < 3 || firstName.length > 10) {
      return setErrorForm('errorname');
    } else if (!regexEmail.test(email)) {
      return setErrorForm('errormail');
    } else if (password.length < 4 || password.length > 12) {
      return setErrorForm('errorpass');
    } else if (!regexPwd.test(password)) {
      return setErrorForm('strongpass');
    }
    //validation//
    const data = {
      firstname: firstName,
      //lastname: lastName,
      email: email,
      password: password,
    };
    axios
      .post(`${API_URL}/auth/signup`, data)
      .then((res) => {
        console.log(res);
        navigation.navigate('AccountActivation', {email});
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
        <Text style={styles.login}>Sign Up</Text>
        <Text style={{color: 'red', textAlign: 'center', marginHorizontal: 5}}>
          {errorFrom == 'kosong'
            ? 'Fill All Form Input'
            : errorFrom == 'errorname'
            ? 'Name Character Min 3 and Max 10'
            : errorFrom == 'errormail'
            ? 'Please enter email correctly'
            : errorFrom == 'errorpass'
            ? 'Enter Password Min 4 and Max 12'
            : errorFrom == 'strongpass'
            ? 'Password should at least have 1 LowCase (a-z), 1 UpperCase (A-Z), 1 Number (0-9)'
            : ''}
        </Text>
        <Text style={{...styles.textlogininfo, marginTop: 15}}>
          Create your account to access Zwallet.
        </Text>
        <View style={{...styles.form, marginTop: 15}}>
          <IconPerson />
          <TextInput
            style={{
              width: windowWidth * 0.73,
              marginRight: 10,
            }}
            placeholder="Enter your First Name"
            defaultValue={firstName}
            onChangeText={(firstName) => setFirstName(firstName)}
          />
        </View>
        {/* <View style={styles.form}>
          <IconPerson />
          <TextInput
            style={{
              width: windowWidth * 0.73,
              marginRight: 10,
            }}
            placeholder="Enter your Last Name"
            defaultValue={lastName}
            onChangeText={(lastName) => setLastName(lastName)}
          />
        </View> */}
        <View style={styles.form}>
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
        <View style={styles.form}>
          <IconLock />
          <TextInput
            secureTextEntry={secureText}
            style={{width: windowWidth * 0.65}}
            placeholder="Create your password"
            defaultValue={password}
            onChangeText={(password) => setPassword(password)}
          />
          {secureText ? (
            <IconEyeClosed onPress={() => setSecureText(false)} />
          ) : (
            <IconEyeOpen onPress={() => setSecureText(true)} />
          )}
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            width: windowWidth * 0.8,
          }}></View>
        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => {
            register();
          }}>
          <Text style={{color: '#fff', fontSize: 18}}>Sign Up</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text>Already have an account? Let’s </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{color: COLOR_MAIN}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Register;

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
    marginTop: 10,
  },
  btnLogin: {
    backgroundColor: COLOR_MAIN,
    width: windowWidth * 0.85,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 40,
    marginBottom: 5,
  },
});
