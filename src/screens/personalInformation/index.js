import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector, connect} from 'react-redux';
import {updateName} from '../../utils/redux/action/authAction';
import axios from 'axios';
import {API_URL} from '@env';

const PersonalInformation = ({navigation, updateName}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const user_name = useSelector((state) => state.auth.name_user).split(' ');
  const email_user = useSelector((state) => state.auth.email_user);
  const phone = useSelector((state) => state.auth.phone_user);
  const token = useSelector((state) => state.auth.token);

  console.log('ini telepon', phoneNumber);
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

  const updateProfile = () => {
    const data = {
      firstname: firstName,
      lastname: lastName,
    };
    axios
      .patch(`${API_URL}/user/changeInfo`, data, {
        headers: {
          'x-access-token': 'Bearer ' + token,
        },
      })
      .then((res) => {
        const stName = res.data.data.firstname;
        const ndName = res.data.data.lastname;
        console.log("fullname", stName, ndName);
        const fullname = stName.concat(ndName)
        // // console.log(phoneNum);
        // updateName(fullname);
        // setFirstName(stName);
        // setLastName(ndName);
        // navigation.navigate('Profile');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textInfo}>
        We got your personal information from the sign up proccess. If you want
        to make changes on your information, contact our support.
      </Text>
      <ScrollView style={{marginVertical: 20}}>
        <View style={styles.card}>
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={styles.dataInfo}
            value={firstName}
            onChangeText={(firstName) => setFirstName(firstName)}
          />
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={styles.dataInfo}
            value={lastName}
            onChangeText={(lastName) => setLastName(lastName)}
          />
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>Verified E-mail</Text>
          <Text style={styles.dataInfo}>{email}</Text>
        </View>
        {phoneNumber !== '' ? (
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
          <View style={styles.card}>
            <Text style={styles.label}>Phone Number</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('Add Phone Number')}>
              <Text style={styles.addPhone}>Add Phone Number</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
      <TouchableOpacity
        style={styles.btnUpdate}
        onPress={() => updateProfile()}>
        <Text style={{color: 'white', fontSize: 14, fontWeight: '600'}}>
          Update Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    updateName: (updateFullname) => dispatch(updateName(updateFullname)),
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
  btnUpdate: {
    width: '100%',
    marginVertical: 5,
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#6379F4',
    borderRadius: 10,
    bottom: 0,
  },
});
