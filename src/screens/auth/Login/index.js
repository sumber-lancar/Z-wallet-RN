import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
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
  FONT_SEMIBOLD,
} from '../../../utils/constans';
import axios from 'axios';

import {API_URL} from '@env';

const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//redux
import {connect} from 'react-redux';
import {login} from '../../../utils/redux/action/authAction';
import {setBalance} from '../../../utils/redux/action/balanceAction';
import {useSelector} from 'react-redux';

const Login = ({navigation, loginRedux, setBalance}) => {
  const [secureText, setSecureText] = useState(true);
  const [fail, setFail] = useState(false);
  const [errorFrom, setErrorForm] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user_name = useSelector((state) => state.auth.name_user);
  const login = () => {
    setErrorForm('');
    setFail(false);
    if (email === '' || password === '') {
      return setErrorForm('kosong');
    } else if (!regexEmail.test(email)) {
      return setErrorForm('errormail');
    }
    const data = {
      email: email,
      password: password,
    };
    axios
      .post(`${API_URL}/auth/login`, data)
      .then((res) => {
        //console.log(res.data.data);
        const token = res.data.data.token;
        if (res.data.status == 206) {
          return navigation.replace('Pin', {token});
        }
        const id = res.data.data.id;
        const name = res.data.data.fullname;
        const email = res.data.data.email;
        const photo = res.data.data.photo;
        const phone = res.data.data.phone;
        const balance = res.data.data.balance;
        //console.log(token, id, name, email, photo);
        loginRedux(token, id, name, email, photo, phone);
        setBalance(balance);
        navigation.replace('Home');
      })
      .catch((err) => {
        console.log(err);
        setFail(true);
      });
  };
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Zwallet</Text>
        <Text>{user_name}</Text>
      </View>
      <View style={styles.mainInput}>
        <Text style={styles.login}>Login</Text>
        <Text style={{color: 'red'}}>
          {errorFrom == 'kosong'
            ? 'Fill All Form Input'
            : errorFrom == 'errormail'
            ? 'Please enter email correctly'
            : ''}
        </Text>
        <Text style={{...styles.textlogininfo, marginTop: 25}}>
          Login to your existing account to access
        </Text>
        <Text style={{...styles.textlogininfo, marginTop: 5}}>
          all the features in Zwallet.
        </Text>
        <View
          style={
            fail ? {...styles.form, borderBottomColor: '#FF5B37'} : styles.form
          }>
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
        <View
          style={
            fail ? {...styles.form, borderBottomColor: '#FF5B37'} : styles.form
          }>
          <IconLock />
          <TextInput
            secureTextEntry={secureText}
            style={{width: windowWidth * 0.65}}
            placeholder="Enter your password"
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
          }}>
          <TouchableOpacity
            style={{
              alignItems: 'flex-end',
              width: windowWidth * 0.34,
              marginTop: 5,
            }}
            onPress={() => navigation.navigate('ForgotPass')}>
            <Text>Forgot password?</Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            color: '#FF5B37',
            fontFamily: FONT_SEMIBOLD,
            marginTop: 20,
            fontSize: 16,
          }}>
          {fail ? 'Email or Password Invalid' : ''}
        </Text>

        <TouchableOpacity style={styles.btnLogin} onPress={login}>
          <Text style={{color: '#fff', fontSize: 18}}>Login</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <Text>Don’t have an account? Let’s </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{color: COLOR_MAIN}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRedux: (token, id, name, email, photo, phone) =>
      dispatch(login(token, id, name, email, photo, phone)),
    setBalance: (balance) => dispatch(setBalance(balance)),
  };
};

export default connect(null, mapDispatchToProps)(Login);

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
    marginTop: 40,
    marginBottom: 5,
  },
});
