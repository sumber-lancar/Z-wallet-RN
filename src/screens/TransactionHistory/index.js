import React, {createRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ActionSheet from 'react-native-actions-sheet';
import CalendarPicker from 'react-native-calendar-picker';

const actionSheetRef = createRef();
const TransactionHistory = () => {
  let actionSheet;
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  console.log(startDate);

  const selectDate = (date, type) => {
    if (type === 'END_DATE' ) {
      setEndDate(date)
    } else {
      setStartDate(date),
      setEndDate(null)
    }
  }

  const startDatePick  =  startDate ? startDate.toString() : '';
    const endDatePick = endDate ? endDate.toString() : '';
    // const minDate = new Date(); // Today
    // const maxDate = new Date(2017, 6, 3);

    console.log("start date", startDatePick);
    console.log("end date", endDatePick);

    console.log("start date type",typeof startDatePick);



  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>This Week</Text>
        <TouchableOpacity style={styles.allContacts}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.imgContact}
              source={require('../../assets/images/michi.png')}
            />
            <View style={{marginHorizontal: 15}}>
              <Text style={styles.textContacts}>Samuel Suhi</Text>
              <Text style={styles.textPhone}>Transfer</Text>
            </View>
          </View>
          <Text style={{color: '#1EC15F'}}>+Rp.50.000</Text>
        </TouchableOpacity>
        <Text>This Month</Text>
        <TouchableOpacity style={styles.allContacts}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={styles.imgContact}
              source={require('../../assets/images/michi.png')}
            />
            <View style={{marginHorizontal: 15}}>
              <Text style={styles.textContacts}>Samuel Suhi</Text>
              <Text style={styles.textPhone}>Transfer</Text>
            </View>
          </View>
          <Text style={{color: '#FF5B37'}}>-Rp.150.000</Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={styles.filter}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.btn}>
            <Icon
              name="arrow-up"
              size={30}
              color="#FF5B37"
              style={{marginHorizontal: 5}}
            />
          </TouchableOpacity>
          <TouchableOpacity underlayColor="#6379F4" style={styles.btn}>
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
          selectedDayColor='#6379F4'
          selectedDayTextColor='white'
          allowRangeSelection={true}
          onDateChange={selectDate}
          />
          <View style={{flexDirection: 'row', justifyContent:  'space-between', width: '100%'}}>
            <View style={{margin: 10, width: '40%'}}>
              <Text>From</Text>
              <Text>{startDatePick}</Text>
            </View>
            <View style={{margin: 10, width: '40%'}}>
              <Text>To</Text>
              <Text>{endDatePick}</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.applyBtn} onPress={() => actionSheetRef.current?.hide()}>
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
    paddingHorizontal: 15,
    paddingVertical: 15,
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
    marginVertical: 10
  },
});
