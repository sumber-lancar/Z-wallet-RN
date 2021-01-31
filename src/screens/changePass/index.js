import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, StyleSheet, ToastAndroid} from 'react-native';
// import {useDispatch , useSelector} from 'react-redux';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/AntDesign';

import styles from './styleChangePass';
import * as color from '../../utils/colors';
import {useForm , Controller} from 'react-hook-form'


const ChangePass = ({navigation}) => {
  const [securePassword1, setSecurePassword1] = useState(true);
  const [securePassword2, setSecurePassword2] = useState(true);
  const [securePassword3, setSecurePassword3] = useState(true);
  const handleShowPassword1 = () => {
    setSecurePassword1(!securePassword1);
  };
  const handleShowPassword2 = () => {
    setSecurePassword2(!securePassword2);
  };
  const handleShowPassword3 = () => {
    setSecurePassword3(!SecurePassword3);
  };

  const { control, handleSubmit, errors, getValues } = useForm();
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
              onChangeText={(text) => onChange(text)}
              value={value}
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
              onChangeText={(text) => onChange(text)}
              value={value}
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
              onChangeText={(text) => onChange(text)}
              value={value}
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
      <Button
        title="Change Password"
        buttonStyle={styles.buttonSubmit}
        titleStyle={styles.buttonSubmitText}
        
      />
    </SafeAreaView>
  );
};

export default ChangePass;
