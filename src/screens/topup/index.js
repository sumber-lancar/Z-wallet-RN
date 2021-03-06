import {Button} from 'native-base';
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Modal} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {IconBackWhite, ImgProfile, Pencil, Plus} from '../../assets';
import * as color from '../../utils/colors'

const TopUp = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isSelected , setIsSelected] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.sectionHeader}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={IconBackWhite} />
          </TouchableOpacity>
          <Text style={{fontSize: 20, color: 'white', fontWeight: '700'}}>
            Top UP
          </Text>
        </View>

        <View style={styles.card}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: 56,
                width: 56,
                borderRadius: 10,
                backgroundColor: '#EBEEF2',
              }}>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Image style={styles.img} source={Plus} />
              </TouchableOpacity>
            </View>
            <View style={styles.nameNumber}>
              <Text style={{fontSize: 16, fontWeight: '700', color: '#7A7886'}}>
                Virtual Account Number
              </Text>
              <Text style={{color: '#4D4B57'}}>2389 081393877946</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={{marginTop: 40, marginLeft: 16, marginBottom: 5}}>
        <Text style={{fontSize: 18, fontWeight: '700', color: '#514F5B'}}>
          How to Top-Up
        </Text>
      </View>
      <View style={styles.cardTopUp}>
        <Text style={styles.number}>1</Text>
        <View style={{maxWidth: 243, marginLeft: 25}}>
          <Text style={styles.detail}>
            Go to the nearest ATM or you can use E-Banking.
          </Text>
        </View>
      </View>
      <View style={styles.cardTopUp}>
        <Text style={styles.number}>2</Text>
        <View style={{maxWidth: 243, marginLeft: 25}}>
          <Text style={styles.detail}>
            Type your security number on the ATM or E-Banking.
          </Text>
        </View>
      </View>
      <View style={styles.cardTopUp}>
        <Text style={styles.number}>3</Text>
        <View style={{maxWidth: 243, marginLeft: 25}}>
          <Text style={styles.detail}>Select “Transfer” in the menu</Text>
        </View>
      </View>
      <View style={styles.cardTopUp}>
        <Text style={styles.number}>4</Text>
        <View style={{maxWidth: 243, marginLeft: 25}}>
          <Text style={styles.detail}>
            Type the virtual account number that we provide you at the top.
          </Text>
        </View>
      </View>
      <View style={styles.cardTopUp}>
        <Text style={styles.number}>5</Text>
        <View style={{maxWidth: 243, marginLeft: 25}}>
          <Text style={styles.detail}>
            Type the amount of the money you want to top up.
          </Text>
        </View>
      </View>
      <View style={styles.cardTopUp}>
        <Text style={styles.number}>6</Text>
        <View style={{maxWidth: 243, marginLeft: 25}}>
          <Text style={styles.detail}>Read the summary details</Text>
        </View>
      </View>
      <View style={styles.cardTopUp}>
        <Text style={styles.number}>7</Text>
        <View style={{maxWidth: 243, marginLeft: 25}}>
          <Text style={styles.detail}>Press transfer / top up</Text>
        </View>
      </View>
      <View style={{...styles.cardTopUp, marginBottom: 30}}>
        <Text style={styles.number}>8</Text>
        <View style={{maxWidth: 243, marginLeft: 25}}>
          <Text style={styles.detail}>
            You can see your money in Zwallet within 3 hours.
          </Text>
        </View>
      </View>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Bank BCA : </Text>
              <Button style={styles.buton} >
                <Text style={styles.modalText}>014 </Text>
              </Button>
            </View>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Bank Mandiri : </Text>
              <Button style={styles.buton}>
                <Text style={styles.modalText}>008 </Text>
              </Button>
            </View>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Bank BNI : </Text>
              <Button style={styles.buton}>
                <Text style={styles.modalText}>009 </Text>
              </Button>
            </View>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Bank BNI Syariah : </Text>
              <Button style={styles.buton}>
                <Text style={styles.modalText}>427 </Text>
              </Button>
            </View>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Bank BRI : </Text>
              <Button style={styles.buton}>
                <Text style={styles.modalText}>002 </Text>
              </Button>
            </View>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Bank Syariah Mandiri : </Text>
              <Button style={styles.buton}>
                <Text style={styles.modalText}>451 </Text>
              </Button>
            </View>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Bank CIMB Niaga : </Text>
              <Button style={styles.buton}>
                <Text style={styles.modalText}>022 </Text>
              </Button>
            </View>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Bank CIMB Niaga Syariah : </Text>
              <Button style={styles.buton}>
                <Text style={styles.modalText}>022 </Text>
              </Button>
            </View>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Bank Muamalat : </Text>
              <Button style={styles.buton}>
                <Text style={styles.modalText}>147 </Text>
              </Button>
            </View>
            <View style={styles.modalContainer}>
              <Text style={styles.modalText}>Bank DANAMON : </Text>
              <Button style={styles.buton}>
                <Text style={styles.modalText}>011 </Text>
              </Button>
            </View>
            <Button
                style={{...styles.closeButton, backgroundColor: 'lightgrey'}}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text style={{...styles.textStyle, color: 'black'}}>Close</Text>
              </Button>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 260,
    width: '100%',
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  sectionHeader: {
    marginTop: 44,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    width: 124,
    justifyContent: 'space-between',
  },
  card: {
    height: 96,
    width: 343,
    borderRadius: 10,
    backgroundColor: 'white',
    marginTop: 40,
    alignSelf: 'center',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    width: 56,
    height: 56,
    borderRadius: 10,
  },
  nameNumber: {
    height: 45,
    justifyContent: 'space-between',
    marginLeft: 15,
    marginTop: 2,
  },
  cardTopUp: {
    height: 88,
    width: 343,
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
    paddingLeft: 20,
    paddingVertical: 17,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    height: 'auto',
    width: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
    width: 'auto',
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
    marginBottom: 10,
    fontSize: 15,
  },
  modalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buton: {
    backgroundColor: color.white,
    padding: 5,
  },

  number: {fontSize: 18, color: '#6379F4', fontWeight: 'bold'},
  detail: {lineHeight: 27, fontSize: 16, color: '#7A7886'},
});

export default TopUp;
