import {Button} from 'native-base';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ToastAndroid,
  Modal,
} from 'react-native';
// import {useDispatch , useSelector} from 'react-redux';
import {Input} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/AntDesign';

import styles from './styleChangePass';
import * as color from '../../utils/colors';
import {useForm, Controller} from 'react-hook-form';
import axios from 'axios';
import {API_URL} from '@env';
import {connect, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ChangePass = ({navigation}) => {
  const [securePassword1, setSecurePassword1] = useState(true);
  const [securePassword2, setSecurePassword2] = useState(true);
  const [securePassword3, setSecurePassword3] = useState(true);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword1, setNewPassword1] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [fail, setFail] = useState(false);

  const email_user = useSelector((state) => state.auth.email_user);
  const handleShowPassword1 = () => {
    setSecurePassword1(!securePassword1);
  };
  const handleShowPassword2 = () => {
    setSecurePassword2(!securePassword2);
  };
  const handleShowPassword3 = () => {
    setSecurePassword3(!securePassword3);
  };

  console.log(email_user);
  console.log('test', oldPassword);
  console.log('gfgf', newPassword);

  const changePass = () => {
    // const strongRegex =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})([a-zA-Z0-9!@#\$%\^&\*{8,}]+)$/
    // const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    // const regexPwd = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/
    const regexPwd = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
    if (oldPassword == '') {
      setErrMsg(`Old password can't be null`);
    } else if (newPassword1 == '') {
      setErrMsg(`New password can't be null`);
    } else if (newPassword == '') {
      setErrMsg(`Repeat password can't be null`);
    } else if (newPassword1 !== newPassword) {
      setErrMsg(`Password do not match`);
    } else if (!regexPwd.test(newPassword1) && !regexPwd.test(newPassword)) {
      setErrMsg(
        `Password must contain at least 1 lowercase and 1 uppercase alphabetical, 1 numerical`,
      );
    } else {
      const data = {
        email: email_user,
        old_password: oldPassword,
        new_password: newPassword,
      };
      axios
        .patch(`${API_URL}/auth/change-password`, data)
        .then((res) => {
          const changePassMsg = res.data.message;
          navigation.navigate('Profile');
          console.log(changePassMsg);
        })
        .catch((err) => {
          console.log(err);
          setFail(true);
        });
    }
  };

  const {control, handleSubmit, errors, getValues} = useForm();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={{...styles.header, marginLeft: 8}}>
          <Icons
            name="arrowleft"
            size={25}
            onPress={() => {
              // dispatch(cancelTransferCreator())
              navigation.goBack();
            }}
          />
          <Text style={{marginLeft: 15, fontSize: 20}}>Change password</Text>
        </View>
        <Text style={styles.subtitle}>
          You must enter your current password and then type your new password
          twice.
        </Text>
        <Text style={{color: 'red', fontSize: 14, marginHorizontal: 10}}>
          {fail ? 'Your old password wrong!' : errMsg}
        </Text>
        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <Input
              placeholder="Current Password"
              leftIcon={<Icon name="lock" size={20} color={color.input} />}
              rightIcon={
                <Icon
                  onPress={handleShowPassword1}
                  name={securePassword1 ? 'eye-off' : 'eye'}
                  size={18}
                  color={color.input}
                />
              }
              inputContainerStyle={styles.input}
              inputStyle={styles.input}
              placeholderTextColor={color.input}
              secureTextEntry={securePassword1}
              onBlur={onBlur}
              onChangeText={(oldPassword) => setOldPassword(oldPassword)}
              value={oldPassword}
            />
          )}
          name="password"
          rules={{
            required: true,
            pattern: {
              value: /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/,
              message:
                'Password must contain at least 1 number, and be longer than 8 charaters',
            },
          }}
          defaultValue=""
        />
        {errors.password && errors.password.type === 'required' && (
          <Text style={{color: 'red', marginTop: -25, marginLeft: 25}}>
            Required.
          </Text>
        )}
        {errors.password && errors.password.type === 'pattern' && (
          <Text style={{color: 'red', marginTop: -20, marginLeft: 25}}>
            {errors.password.message}
          </Text>
        )}

        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <Input
              placeholder="New Password"
              leftIcon={<Icon name="lock" size={20} color={color.input} />}
              rightIcon={
                <Icon
                  onPress={handleShowPassword2}
                  name={securePassword2 ? 'eye-off' : 'eye'}
                  size={18}
                  color={color.input}
                />
              }
              inputContainerStyle={styles.input}
              inputStyle={styles.input}
              placeholderTextColor={color.input}
              secureTextEntry={securePassword2}
              onBlur={onBlur}
              onChangeText={(newPassword1) => setNewPassword1(newPassword1)}
              value={newPassword1}
            />
          )}
          name="newPassword"
          rules={{
            required: true,
            pattern: {
              value: /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/,
              message:
                'Password must contain at least 1 number, and be longer than 8 charaters',
            },
          }}
          defaultValue=""
        />
        {errors.newPassword && errors.newPassword.type === 'required' && (
          <Text style={{color: 'red', marginTop: -25, marginLeft: 25}}>
            Required.
          </Text>
        )}
        {errors.newPassword && errors.newPassword.type === 'pattern' && (
          <Text style={{color: 'red', marginTop: -20, marginLeft: 25}}>
            {errors.newPassword.message}
          </Text>
        )}

        <Controller
          control={control}
          render={({onChange, onBlur, value}) => (
            <Input
              placeholder="Repeat Password"
              leftIcon={<Icon name="lock" size={20} color={color.input} />}
              rightIcon={
                <Icon
                  onPress={handleShowPassword3}
                  name={securePassword3 ? 'eye-off' : 'eye'}
                  size={18}
                  color={color.input}
                />
              }
              inputContainerStyle={styles.input}
              inputStyle={styles.input}
              placeholderTextColor={color.input}
              secureTextEntry={securePassword3}
              onBlur={onBlur}
              onChangeText={(newPassword) => setNewPassword(newPassword)}
              value={newPassword}
            />
          )}
          name="newPasswordRepeat"
          rules={{
            required: true,
            pattern: {
              value: /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/,
              message:
                'Password must contain at least 1 number, and be longer than 8 charaters',
            },
          }}
          defaultValue=""
        />
        {errors.newPasswordRepeat &&
          errors.newPasswordRepeat.type === 'required' && (
            <Text style={{color: 'red', marginTop: -25, marginLeft: 25}}>
              Required.
            </Text>
          )}
        {errors.newPasswordRepeat &&
          errors.newPasswordRepeat.type === 'pattern' && (
            <Text style={{color: 'red', marginTop: -20, marginLeft: 25}}>
              {errors.newPasswordRepeat.message}
            </Text>
          )}

        {getValues('newPassword') !== getValues('newPasswordRepeat') && (
          <Text style={styles.textFormError}>Password didn't match.</Text>
        )}
      </View>
      {/* <Button
        title="Change Password"
        buttonStyle={styles.buttonSubmit}
        titleStyle={styles.buttonSubmitText}
        onPress={() => setModalVisible(true)}
      /> */}
      <TouchableOpacity
        style={{
          alignSelf: 'center',
          height: 50,
          width: 343,
          borderRadius: 10,
          backgroundColor: '#6379F4',
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 20,
        }}
        onPress={() => setModalVisible(true)}>
        <Text style={{color: 'white'}}>Change Password</Text>
      </TouchableOpacity>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure want to change password?
            </Text>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'space-between',
              }}>
              <Button
                style={{...styles.closeButton, backgroundColor: 'lightgrey'}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={{...styles.textStyle, color: 'black'}}>No</Text>
              </Button>
              <Button
                style={styles.closeButton}
                onPress={() => {
                  changePass();
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Yes</Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email_user) => dispatch(login(email_user)),
  };
};

export default connect(null, mapDispatchToProps)(ChangePass);
