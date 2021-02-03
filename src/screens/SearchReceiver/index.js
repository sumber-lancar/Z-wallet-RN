import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Michi, Card1, ImgProfile, IconBackWhite} from '../../assets';
import {FlatGrid} from 'react-native-super-grid';
import CardSearchReceiver from '../../components/card/cardSearchReceiver';
import axios from 'axios';
import {API_URL} from '@env';
import {useSelector} from 'react-redux';

const SearchReceiver = ({navigation}) => {
  const [receiver, setContact] = useState([]);
  const [searchName, setSearchName] = useState('');
  const token = useSelector((state) => state.auth.token);

  const listContact = () => {
    const config = {
      headers: {
        'x-access-token': 'Bearer ' + token,
      },
    };
    axios
      .get(`${API_URL}/transfer/userContact`, config)
      .then(({data}) => {
        console.log('sukses get data');
        setContact(data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  const handleSearch = () => {
    const config = {
      headers: {
        'x-access-token': 'Bearer ' + token,
      },
    };
    axios
      .get(`${API_URL}/transfer/search?name=` + searchName, config)
      .then(({data}) => {
        setContact(data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    listContact();
    // return function cleanup() {
    //   listContact();
    //   handleSearch();
    // };
  }, []);
  console.log(receiver);
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="#6379F4"
      />
      <View style={styles.header}>
        <View style={styles.sectionHeader}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={IconBackWhite} />
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 20,
              marginLeft: 15,
              color: 'white',
              fontWeight: '400',
            }}>
            Find Receiver
          </Text>
        </View>
        <View style={styles.formSearch}>
          <TouchableOpacity onPress={handleSearch}>
            <Icon
              name="search"
              size={30}
              color="#000000"
              style={{marginHorizontal: 5}}
            />
          </TouchableOpacity>
          <TextInput
            style={{width: '100%'}}
            placeholder="Search receiver here"
            onChangeText={(text) => setSearchName(text)}
          />
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={{marginBottom: 20}}>
          <Text
            style={{
              color: '#4D4B57',
              fontSize: 18,
              fontWeight: '700',
              marginTop: 15,
              marginBottom: 10,
            }}>
            Contacts
          </Text>
          <Text style={{color: '#4D4B57', fontSize: 18, fontWeight: '400'}}>
            {receiver.length} Contacts Founds
          </Text>
        </View>
        {receiver &&
          receiver.map(({id, name, phone, photo}) => {
            //  let httpImage = { uri : API_URL + photo}
            return (
              <CardSearchReceiver
                key={id}
                id={id}
                navigation={navigation}
                name={name}
                photo={photo}
                phone={phone}
              />
            );
          })}
        {/* <CardSearchReceiver
          navigation={navigation}
          iconImg={Michi}
          name="Michi Chan"
          phoneNumber="+62 896-7101-6784"
        />
        <CardSearchReceiver
          navigation={navigation}
          iconImg={Card1}
          name="Samuel Suhi"
          phoneNumber="+62 813-8492-9994"
        />
        <CardSearchReceiver
          navigation={navigation}
          iconImg={ImgProfile}
          name="Robert Chandler"
          phoneNumber="+62 838-8490-5678"
        />
        <CardSearchReceiver
          navigation={navigation}
          iconImg={Michi}
          name="Michi Chan"
          phoneNumber="+62 896-7101-6784"
        />
        <CardSearchReceiver
          navigation={navigation}
          iconImg={Card1}
          name="Samuel Suhi"
          phoneNumber="+62 813-8492-9994"
        />
        <CardSearchReceiver
          navigation={navigation}
          iconImg={ImgProfile}
          name="Robert Chandler"
          phoneNumber="+62 838-8490-5678"
        /> */}
      </ScrollView>
    </>
  );
};

export default SearchReceiver;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
    paddingBottom: 15,
  },
  header: {
    height: 218,
    width: '100%',
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  sectionHeader: {
    marginTop: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 35,
    width: '100%',
    // justifyContent: 'space-between',
  },
  formSearch: {
    flexDirection: 'row',
    marginHorizontal: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 25,
    marginTop: 40,
  },
  card: {
    width: 110,
    marginRight: 20,
    marginVertical: 10,
    padding: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 10,
  },
});
