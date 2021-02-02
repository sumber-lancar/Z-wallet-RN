import {Spinner} from 'native-base';
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
//redux
import {useSelector} from 'react-redux';

const Splash = ({navigation}) => {
  const token = useSelector((state) => state.auth.token);
  useEffect(() => {
    setTimeout(() => {
      token != null ? navigation.replace('Home') : navigation.replace('Login');
    }, 3000);
  });
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="#6379F4"
      />
      <Text style={styles.textSplash}>Z-Wallet</Text>
      <Spinner color="white" />
      <View style={styles.version}>
        <Text style={styles.textVersion}>V.0.1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6379F4',
  },
  textSplash: {
    fontSize: 32,
    color: 'white',
    marginTop: 150,
  },
  version: {
    height: 250,
    width: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textVersion: {
    color: 'white',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
});

export default Splash;
