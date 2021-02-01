import React, {useState} from 'react';
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

const Login = ({navigation}) => {
  const [secureText, setSecureText] = useState(true);
  const [fail, setFail] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Zwallet</Text>
      </View>
      <View style={styles.mainInput}>
        <Text style={styles.login}>Login</Text>
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

        <TouchableOpacity
          style={styles.btnLogin}
          onPress={() => {
            setFail(!fail);
            navigation.replace('Home');
          }}>
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

export default Login;

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
