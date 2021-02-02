import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, connect} from 'react-redux';

const PersonalInformation = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const user_name = useSelector((state) => state.auth.name_user).split(' ');
  const email_user = useSelector((state) => state.auth.email_user);
  const phone = useSelector((state) => state.auth.phone_user);

  console.log(phone);
  const getFirstName = () => {
    setFirstName(user_name[0]);
  };
  const getLastName = () => {
    setLastName(user_name[1]);
  };
  const getEmail = () => {
    setEmail(email_user);
  };
  const getPhone = () => {
    setPhoneNumber(phone);
  };
  useEffect(() => {
    getFirstName();
    getLastName();
    getEmail();
    getPhone();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.textInfo}>
        We got your personal information from the sign up proccess. If you want
        to make changes on your information, contact our support.
      </Text>
      <View style={{marginVertical: 20}}>
        <View style={styles.card}>
          <Text style={styles.label}>First Name</Text>
          <Text style={styles.dataInfo}>{firstName}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Last Name</Text>
          <Text style={styles.dataInfo}>{lastName}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Verified E-mail</Text>
          <Text style={styles.dataInfo}>{email}</Text>
        </View>
        {phoneNumber !== undefined ? (
          <View style={styles.cardPhone}>
            <View>
              <Text style={styles.label}>Phone Number</Text>
              <Text style={styles.dataInfo}>{phoneNumber}</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Manage Phone Number')}>
                <Text
                  style={{fontSize: 14, fontWeight: '600', color: '#6379F4'}}>
                  Manage
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={styles.cardPhone}>
            <View>
              <Text style={styles.label}>Phone Number</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Add Phone Number')}>
                <Text style={styles.addPhone}>Add Phone Number</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (token, name_user, email_user) =>
      dispatch(login(token, name_user, email_user)),
  };
};

export default connect(null, mapDispatchToProps)(PersonalInformation);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  card: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
  },
  cardPhone: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    elevation: 5,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInfo: {
    fontSize: 16,
    fontWeight: '400',
    color: '#7A7886',
    marginVertical: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '400',
    color: '#7A7886',
  },
  dataInfo: {
    fontSize: 22,
    fontWeight: '700',
  },
  addPhone: {
    fontSize: 22,
    fontWeight: '700',
    color: '#6379F4',
  },
});
