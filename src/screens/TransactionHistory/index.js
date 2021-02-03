import React, {createRef, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ActionSheet from 'react-native-actions-sheet';
import CalendarPicker from 'react-native-calendar-picker';
import CardHome from '../../components/card/cardHome';
import axios from 'axios'
import {API_URL} from "@env"
import {useSelector} from 'react-redux';

const actionSheetRef = createRef();

const TransactionHistory = ({navigation}) => {
  useEffect(() => {
    getHistoryToday();
    getHistoryWeek();
  }, [historyToday, historyWeek])

  const toPrice = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [historyToday, setHistoryToday] = useState([])
  const [historyWeek, setHistoryWeek] = useState([])
  const [urlToday, setUrlToday] = useState('/transaction/getAllInvoice?today=true')
  const [urlWeek, setUrlWeek] = useState('/transaction/getAllInvoice?thisWeek=true')
  const token_user = useSelector((state) => state.auth.token);
  const [getDatebyDate, setGetDatebyDate] = useState(false)
  const [historyDate, setHistoryDate] = useState([])


 
 

  const getHistoryToday = () => {
    const config = {
      headers: {
        'x-access-token': 'Bearer ' + token_user,
      },
    };
    axios.get(API_URL + urlToday , config)
    .then((res) => {
      console.log('this day',res.data.data)
      setHistoryToday(res.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const getHistoryWeek = () => {
    const config = {
      headers: {
        'x-access-token': 'Bearer ' + token_user,
      },
    };
    axios.get(API_URL + urlWeek , config)
    .then((res) => {
      console.log('this week', res.data.data)
      setHistoryWeek(res.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }

  const refresh = () => {
    getHistoryToday();
    getHistoryWeek();
  }

  const handleFilter = () => {
    const config = {
      headers: {
        'x-access-token': 'Bearer ' + token_user,
      },
    };
    // Start date
    const startday = startDate ?  '0' + startDate._i.day : ''
    const startMonth = startDate ?  '0' + (startDate._i.month + 1) : ''
    const startYear = startDate ? startDate._i.year : ''
    // End date
    const endDay = endDate ? '0' + endDate._i.day : ''
    const endMonth = endDate ? '0' + (endDate._i.month + 1) : ''
    const endYear = endDate ? endDate._i.year : ''
  
    const strtDate = `${startYear}-${startMonth}-${startday}`
    const endDatee = `${endYear}-${endMonth}-${endDay}`
    console.log('ini start date', strtDate)
    console.log('Ini end Date', endDatee)

    axios.get(API_URL + `/transaction/getAllInvoice?from=${strtDate}&to=${endDatee}`, config)
    .then((res) => {
      console.log('ini filter date',res)
      setHistoryDate(res.data.data)
    })
    .catch((err) => {
      console.log(err)
    })

  }


  const selectDate = (date, type) => {
    if (type === 'END_DATE') {
      setEndDate(date);
    } else {
      setStartDate(date), setEndDate(null);
    }
  };


  const startDatePick = startDate ? startDate.toString().split(' ').slice(1,4).join(' - ') : '';
  const endDatePick = endDate ? endDate.toString().split(' ').slice(1,4).join(' - ') : '';

  let historyTodays
  let historyWeeks
  let gethistoryByDate
 if(getDatebyDate){
  gethistoryByDate = 
  <>
    {historyDate && historyDate.map(({sender, receiver, photo, amount, notes, type, id}) => {
        return(
            <CardHome
              key={id}
              id={id}
              navigation={navigation}
              receiver={receiver}
              photo={photo}
              notes={notes}
              amount={toPrice(amount)}
              type={type}
              sender={sender}
            />
        )
      })}
  </>
 }else{
  if(historyToday.length > 0){
    historyTodays = 
    <>
    <Text style={styles.textThis}>Today</Text>
        {historyToday && historyToday.map(({sender, receiver, photo, amount, notes, type, id}) => {
          return(
              <CardHome
                key={id}
                id={id}
                navigation={navigation}
                receiver={receiver}
                photo={photo}
                notes={notes}
                amount={toPrice(amount)}
                type={type}
                sender={sender}
              />
          )
        })}
    </>
  }else{
    historyTodays = <></>
  }
  if(historyWeek.length > 0){
    historyWeeks = 
    <>
    <Text style={styles.textThis}>This Week</Text>
        {historyWeek && historyWeek.map(({sender, receiver, photo, amount, notes, type,id}) => {
          return(
              <CardHome
                key={id}
                id={id}
                navigation={navigation}
                receiver={receiver}
                photo={photo}
                notes={notes}
                amount={toPrice(amount)}
                type={type}
                sender={sender}
              />
          )
        })}
    </>
  }else{
    <></>
  }
 }

  return (
    <View style={styles.container}>
      <ScrollView>
        {gethistoryByDate}
        {historyTodays}
        {historyWeeks}

        
      </ScrollView>
      <View style={styles.filter}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.btn} onPress={() => {
            setUrlToday('/transaction/getInvoice?today=true&flow=out')
            setUrlWeek('/transaction/getInvoice?flow=out&thisWeek=true')
            setGetDatebyDate(false)
            refresh()
          }}>
            <Icon
              name="arrow-up"
              size={30}
              color="#FF5B37"
              style={{marginHorizontal: 5}}
            />
          </TouchableOpacity>
          <TouchableOpacity underlayColor="#6379F4" style={styles.btn} onPress={() => {
             setUrlToday('/transaction/getInvoice?today=true&flow=in')
             setUrlWeek('/transaction/getInvoice?flow=in&thisWeek=true')
             setGetDatebyDate(false)
             refresh()
          }}>
            <Icon
              name="arrow-down"
              size={30}
              color="#1EC15F"
              style={{marginHorizontal: 5}}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.filterByDate}
          onPress={() => {
            actionSheetRef.current?.setModalVisible();
          }}>
          <Text>Filter By Date</Text>
        </TouchableOpacity>
      </View>

      <ActionSheet gestureEnabled ref={actionSheetRef}>
        <View style={styles.containerCalendar}>
          <Text style={{marginVertical: 10}}>Filter By date</Text>
          <CalendarPicker
            selectedDayColor="#6379F4"
            selectedDayTextColor="white"
            allowRangeSelection={true}
            onDateChange={selectDate}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}>
            <View style={{margin: 10, width: '40%'}}>
              <Text>From</Text>
              <Text>{startDatePick}</Text>
            </View>
            <View style={{margin: 10, width: '40%'}}>
              <Text>To</Text>
              <Text>{endDatePick}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.applyBtn}
            onPress={() => {
              handleFilter()
              setGetDatebyDate(true)
              actionSheetRef.current?.hide()
              }}>
            <Text style={{color: 'white', fontSize: 16}}>Apply</Text>
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </View>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    // paddingHorizontal: 15,
    paddingVertical: 15,
  },
  textThis: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  card: {
    borderRadius: 10,
  },
  btn: {
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: 'white',
  },
  filter: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    bottom: 0,
    marginTop: 10
  },
  filterByDate: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  allContacts: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 5,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    borderColor: 'black',
    alignItems: 'center',
    elevation: 5,
  },
  imgContact: {
    width: 70,
    height: 70,
    borderRadius: 15,
    overflow: 'hidden',
  },
  textPhone: {
    color: '#4D4B57',
    fontSize: 13,
    fontWeight: '400',
  },
  textContacts: {
    color: '#4D4B57',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 7,
  },
  containerCalendar: {
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  applyBtn: {
    backgroundColor: '#6379F4',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
});
