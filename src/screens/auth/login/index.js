import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {FONT_BOLD, COLOR_MAIN} from '../../../utils/constans';

const Login = () => {
  return (
    <View>
      <Text style={{fontSize: 26, fontFamily: FONT_BOLD, color: COLOR_MAIN}}>
        Zwallet
      </Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
