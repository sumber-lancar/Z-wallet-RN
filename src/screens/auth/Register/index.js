import {Icon} from 'native-base';
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
import {
  FONT_BOLD,
  COLOR_MAIN,
  FONT_REG,
  FONT_LIGHT,
} from '../../../utils/constans';

const Register = ({navigation}) => {
  const [secureText, setSecureText] = useState(true);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Zwallet</Text>
      </View>
      <View style={styles.mainInput}>
        <Text style={styles.login}>Sign Up</Text>
        <Text style={{...styles.textlogininfo, marginTop: 25}}>
          Create your account to access Zwallet.
        </Text>
        <View style={{...styles.form, marginTop: 20}}>
          <IconPerson />
          <TextInput
            style={{
              width: windowWidth * 0.73,
              marginRight: 10,
            }}
          />
        </View>
        <View style={styles.form}>
          <IconMail />
          <TextInput
            style={{
              width: windowWidth * 0.73,
              marginRight: 10,
            }}
          />
        </View>
        <View style={styles.form}>
          <IconLock />
          <TextInput
            secureTextEntry={secureText}
            style={{width: windowWidth * 0.65}}
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
            navigation.navigate('Pin');
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
    marginTop: 20,
  },
  btnLogin: {
    backgroundColor: COLOR_MAIN,
    width: windowWidth * 0.85,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 55,
    marginBottom: 5,
  },
});
