import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {Michi, Card1, ImgProfile, IconBackWhite} from '../../assets';
import {FlatGrid} from 'react-native-super-grid';
import CardSearchReceiver from '../../components/card/cardSearchReceiver';

const SearchReceiver = ({navigation}) => {
  return (
    <>
    <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="#6379F4"
      />
      <View style={styles.header}>
        <View style={styles.sectionHeader}>
          <Image source={IconBackWhite} />
          <Text style={{fontSize: 20, marginLeft: 15, color: 'white', fontWeight: '400'}}>
            Find Receiver
          </Text>
        </View>
        <View style={styles.formSearch}>
          <TouchableOpacity>
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
            17 Contacts Founds
          </Text>
        </View>
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
        />
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
    // height: 260,
    width: '100%',
    backgroundColor: '#6379F4',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  sectionHeader: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 35,
    width: '100%',
    // justifyContent: 'space-between',
  },
  formSearch: {
    flexDirection: 'row',
    marginHorizontal:15,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 25
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
