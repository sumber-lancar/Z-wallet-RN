import { Button } from 'native-base';
import React, { useState } from 'react';
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
import { Camera, Gallery, IconBack, IconNext, ImgProfile, Pencil } from '../../assets';
import { API_URL } from '@env'
//redux
import { useSelector } from 'react-redux'
import { connect } from 'react-redux';
import { logout } from '../../utils/redux/action/authAction';
import { ScrollView } from 'react-native-gesture-handler';
import PushNotification from 'react-native-push-notification';
import { showNotification } from '../../notif';
import ImagePicker from 'react-native-image-crop-picker'
import axios from 'axios'

const Profile = ({ navigation, logoutRedux }) => {
  const channel = 'notif';
  PushNotification.createChannel(
    {
      channelId: 'notif',
      channelName: 'My Notification channel',
      channelDescription: 'A channel to categories your notification',
      soundName: 'default',
      importance: 4,
      vibrate: true,
    },
    (created) => console.log(`createchannel returned '${created}'`),
  );
  // code to run on component mount
  PushNotification.getChannels((channel_ids) => {
    console.log(channel_ids);
  });

  const token = useSelector((state) => state.auth.token);
  const [photo, setPhoto] = useState([])
  const phone = useSelector(state => state.auth.phone)
  const userName = useSelector(state => state.auth.name_user);
  const photoProfile = useSelector(state => state.auth.photo_user);
  let images = { uri: API_URL + photoProfile }
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => showNotification('Notification', 'Transfer Success', channel);;
  const [modalVisible, setModalVisible] = useState(false);
  const [editVisible, setEditVisible] = useState(false);
  const config = {
    headers: {
      'x-access-token': 'bearer ' + token,
    },
  };

  const chooseFile = () => {
    ImagePicker.openPicker({
      multiple: true,
      mediaType: 'photo',
    })
      .then((images) => {
        console.log(images);
        setPhoto(images)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const takePicture = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
      mediaType: 'photo',
    })
      .then((images) => {
        console.log(images.length);
        setPhoto(images);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const uploadPicture = () => {
    const pictureData = new FormData()
    for (let i = 0; i < photo.length; i++) {
      pictureData.append('image',
        {
          name: photo[i].path.split('/').pop(),
          type: photo[i].mime,
          uri:
            Platform.OS === 'android'
              ? photo[i].path
              : photo[i].path.replace('file://', ''),
        }
      );
    }
    axios.patch(API_URL + `/user/changePhoto`, pictureData, config)
      .then(({ data }) => {
        navigation.replace('Home')
      }).catch(({ response }) => {
        console.log(response.data)
      })
  }

  const handleLogout = () => {
    navigation.navigate('Login');
    logoutRedux();
  };
  return (
    <ScrollView>
      <TouchableOpacity
        style={{ width: 40, marginTop: 30, marginLeft: 20 }}
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
          style={{ height: 80, width: 80, borderRadius: 10 }}
          source={images}
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
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center', width: 50, justifyContent: 'space-between' }}
            onPress={() => {
              setEditVisible(true)
            }}>
            <Image source={Pencil} />
            <Text style={{ fontSize: 16, color: '#7A7886' }}>Edit</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 24, color: '#4D4B57', marginTop: 16 }}>
          {userName}
        </Text>
        <Text
          style={{
            fontSize: 16,
            color: '#4D4B57',
            marginTop: 10,
            marginBottom: 45,
          }}>
          {phone}
        </Text>
      </View>

      {/* btn navigation */}
      <TouchableOpacity activeOpacity={0.5} style={styles.btn} onPress={() => {
        navigation.navigate("Personal Information")
      }}>
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
          trackColor={{ false: '#grey', true: '#6379F4' }}
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
                style={{ ...styles.closeButton, backgroundColor: 'lightgrey' }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={{ ...styles.textStyle, color: 'black' }}>No</Text>
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
      <Modal animationType="fade" transparent={true} visible={editVisible}>
        <View style={styles.centeredView}>
          <View style={{ ...styles.modalView, height: 230, width: '100%', marginTop: -200, borderRadius: 0 }}>
            <Text style={styles.modalText}>Select Picture From</Text>
            <View
              style={{
                flexDirection: 'row',
                width: 250,
                justifyContent: 'space-between',
              }}>
              <Button
                style={{ ...styles.closeButton, backgroundColor: 'white', height: 100, width: 100 }}
                onPress={chooseFile}>
                <Image source={Gallery} />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Gallery</Text>
              </Button>
              <Button
                style={{ ...styles.closeButton, backgroundColor: 'white', height: 100, width: 100 }}
                onPress={takePicture}>
                <Image source={Camera} />
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Camera</Text>
              </Button>
            </View>
            <View style={styles.editWrapper}>
              <TouchableOpacity style={{marginRight:10}}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{marginLeft:10}} onPress={uploadPicture}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>




    </ScrollView>
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
    flexDirection: 'column'
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
  editWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10
  }
});

const mapDispatchToProps = (dispatch) => {
  return {
    logoutRedux: () => dispatch(logout()),
  };
};

export default connect(null, mapDispatchToProps)(Profile);
