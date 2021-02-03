import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, Image, ActivityIndicator} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {
  ArrowUp,
  Bell,
  Blanja,
  Card1,
  NetFlix,
  Plus,
  ImgProfile,
  Spotify,
} from '../../assets';
import CardHome from '../../components/card/cardHome';
import {useSelector} from 'react-redux';
import {API_URL} from '@env';

//notif
import PushNotification from 'react-native-push-notification';
import {showNotification} from '../../notif';

//context
import {useSocket} from '../../utils/Context/SocketProvider';
import {connect} from 'react-redux';
import {addBalance} from '../../../src/utils/redux/action/balanceAction';

const Home = ({navigation, addBalance}) => {
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
  useEffect(() => {
    getData();
    return () => {
      getData();
    };
  }, [history]);

  const toPrice = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };
  const socket = useSocket();
  const balance = useSelector((state) => state.balance.balance);
  console.log(typeof balance);
  const phone = useSelector((state) => state.auth.phone_user);
  const token_user = useSelector((state) => state.auth.token);
  const name = useSelector((state) => state.auth.name_user);
  const photo_user = useSelector((state) => state.auth.photo_user);
  let httpImage = {uri: API_URL + photo_user};
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    socket.on('transfer out', (msg) => {
      console.log('Transfer here: ', msg);
      showNotification('Notification', msg, channel);
      getData();
    });
    return () => {
      socket.off('transfer out');
      getData();
    };
  }, []);

  useEffect(() => {
    socket.on('transfer in', (msg, amount) => {
      console.log('Transfer here: ', msg);
      showNotification('Notification', msg, channel);
      const numAmount = Number(amount);
      //console.log(typeof numAmount);
      addBalance(numAmount);
      getData();
    });
    return () => {
      socket.off('transfer in');
      getData();
    };
  }, []);

  const getData = () => {
    const config = {
      headers: {
        'x-access-token': 'Bearer ' + token_user,
      },
    };
    axios
      .get(API_URL + '/transaction/getAllInvoice', config)
      .then((res) => {
        setLoading(true)
        setHistory(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ScrollView>
      {/* header */}
      <View style={styles.containerHeader}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Image style={styles.imageProfile} source={httpImage} />
          </TouchableOpacity>
          <View
            style={{
              marginLeft: 20,
              height: '100%',
              justifyContent: 'space-around',
            }}>
            <Text>Hello,</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{name}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Notification');
          }}>
          <Image source={Bell} />
        </TouchableOpacity>
      </View>

      {/* balance */}
      <View style={styles.containerBalance}>
        <View style={styles.balanceSection}>
          <Text style={styles.txtBalance}>Balance</Text>
          <Text style={styles.txtmoney}>Rp. {toPrice(balance)}</Text>
          <Text style={styles.txtBalance}>{phone}</Text>
        </View>
      </View>

      {/* transfer & topup */}
      <View style={styles.TrfTop}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btn}
          onPress={() => {
            navigation.navigate('Search');
          }}>
          <View style={styles.containerTopup}>
            <Image source={ArrowUp} />
            <Text>Transfer</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.btn}
          onPress={() => navigation.navigate('TopUp')}>
          <View style={styles.containerTopup}>
            <Image source={Plus} />
            <Text>Top Up</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Transaction history */}
      <View style={styles.sectionTrans}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>
          Transaction History
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Transaction History')}>
          <Text style={{color: '#6379F4', fontWeight: '600'}}>See all</Text>
        </TouchableOpacity>
      </View>
      {loading ? (
        <> 
        {history &&
          history.map(
            ({sender, receiver, fullname, photo, amount, type, id, notes, created_at}) => {
              return (
                <CardHome
                  key={id}
                  id={id}
                  name={fullname}
                  navigation={navigation}
                  receiver={receiver}
                  photo={photo}
                  notes={notes}
                  amount={toPrice(amount)}
                  type={type}
                  sender={sender}
                  date={created_at}
                />
              );
            },
          )}
        </>
      ) : (
        <View style={{justifyContent: 'center', alignItems: 'center', height: 300}}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  containerHeader: {
    height: 60,
    width: 343,
    alignSelf: 'center',
    marginTop: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageProfile: {
    height: 52,
    width: 52,
    borderRadius: 10,
    alignSelf: 'center',
  },
  containerBalance: {
    height: 141,
    width: 343,
    backgroundColor: '#6379F4',
    alignSelf: 'center',
    marginTop: 29,
    borderRadius: 20,
    justifyContent: 'center',
    padding: 25,
  },
  balanceSection: {
    height: 91,
    width: 200,
    justifyContent: 'space-between',
  },
  txtBalance: {
    color: '#D0D0D0',
  },
  txtmoney: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  TrfTop: {
    height: 57,
    width: 343,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    marginTop: 30,
  },
  btn: {
    height: 57,
    width: 162,
    backgroundColor: '#E5E8ED',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerTopup: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTrans: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 343,
    alignSelf: 'center',
    marginTop: 40,
    alignItems: 'center',
    marginBottom: 20,
  },
});

const mapDispatchToProps = (dispatch) => {
  return {
    addBalance: (amount) => dispatch(addBalance(amount)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
