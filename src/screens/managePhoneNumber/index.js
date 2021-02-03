import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Modal} from 'react-native';
import {Button} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import {setPhone} from '../../utils/redux/action/authAction';
import {useSelector, connect} from 'react-redux';
import axios from 'axios';
import {API_URL} from '@env';

const ManagePhoneNumber = ({navigation, setPhone}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const token = useSelector((state) => state.auth.token);
  const phone = useSelector((state) => state.auth.phone_user);

  console.log('ini token', token);
  const listPhoneNumber = () => {
    setPhoneNumber(phone);
  };

  useEffect(() => {
    listPhoneNumber();
  });

  const deletePhone = () => {
    const data = {
      phone: '',
    };
    axios
      .patch(`${API_URL}/user/changeInfo`, data, {
        headers: {
          'x-access-token': 'Bearer ' + token,
        },
      })
      .then((res) => {
        // const phoneNum = res.data.data.phone
        // setPhoneNumber(phoneNum);
        setPhone('');
        navigation.navigate('Profile');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.textInfo}>
          You can only delete the phone number and then you must add another
          phone number.
        </Text>
        <View style={styles.cardPhone}>
          <View>
            <Text style={styles.label}>Phone Number</Text>
            <Text style={styles.dataInfo}>{phoneNumber}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Icon
                style={{marginHorizontal: 5}}
                name="trash"
                size={20}
                color="#A9A9A9"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Are you sure want to delete phone number?
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
                  deletePhone();
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Yes</Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPhone: (phone_user) => dispatch(setPhone(phone_user)),
  };
};
export default connect(null, mapDispatchToProps)(ManagePhoneNumber);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  cardPhone: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginVertical: 40,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: 200,
    width: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    backgroundColor: '#6379F4',
    height: 40,
    width: 100,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20,
  },
});
