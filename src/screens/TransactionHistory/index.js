import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const TransactionHistory = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text>This Week</Text>
        <Text>This Month</Text>
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
        <TouchableOpacity style={styles.filterByDate}>
          <Text>Filter By Date</Text>
        </TouchableOpacity>
      </View>
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
});
