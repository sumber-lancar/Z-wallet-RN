import {Button} from 'native-base';
import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Switch,
  Modal,
  Alert,
} from 'react-native';
import {IconBack, IconNext, ImgProfile, Pencil} from '../../assets';

//redux
import {connect} from 'react-redux';
import {logout} from '../../utils/redux/action/authAction';

const Profile = ({navigation, logoutRedux}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [modalVisible, setModalVisible] = useState(false);
  const handleLogout = () => {
    navigation.navigate('Login');
    logoutRedux();
  };
  return (
    <View>
      <TouchableOpacity
        style={{width: 40, marginTop: 30, marginLeft: 20}}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image source={IconBack} />
      </TouchableOpacity>
      <View
        style={{
          alignSelf: 'center',
          marginTop: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{height: 80, width: 80, borderRadius: 10}}
          source={ImgProfile}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 10,
            height: 27,
            width: 49,
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity>
            <Image source={Pencil} />
          </TouchableOpacity>
          <Text style={{fontSize: 16, color: '#7A7886'}}>Edit</Text>
        </View>
        <Text style={{fontSize: 24, color: '#4D4B57', marginTop: 16}}>
          Fachri Ghiffary
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#4D4B57',
            marginTop: 10,
            marginBottom: 45,
          }}>
          +62 813-9387-7946
        </Text>
      </View>

      {/* btn navigation */}
      <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
        <Text style={styles.fontBtn}>Personal Information</Text>
        <Image source={IconNext} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.btn}
        onPress={() => navigation.navigate('ChangePass')}>
        <Text style={styles.fontBtn}>Change Password</Text>
        <Image source={IconNext} />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.btn}
        onPress={() => navigation.navigate('ChangePin')}>
        <Text style={styles.fontBtn}>Change PIN</Text>
        <Image source={IconNext} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
        <Text style={styles.fontBtn}>Notification</Text>
        <Switch
          trackColor={{false: '#grey', true: '#6379F4'}}
          thumbColor={isEnabled ? '#white' : 'white'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.btn}
        onPress={() => {
          setModalVisible(true);
        }}>
        <Text style={styles.fontBtn}>Logout</Text>
        <Image source={IconNext} />
      </TouchableOpacity>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure want to logout?</Text>
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                width: 250,
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
                  handleLogout();
                  setModalVisible(!modalVisible);
                }}>
                <Text style={styles.textStyle}>Yes</Text>
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 343,
    height: 58,
    borderRadius: 10,
    backgroundColor: '#E5E8ED',
    alignSelf: 'center',
    marginBottom: 25,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fontBtn: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4D4B57',
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
    fontSize: 25,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    logoutRedux: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(Profile);
