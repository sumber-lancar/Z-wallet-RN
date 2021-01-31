import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { Checklist, ImgProfile } from '../../assets'

const Success = ({navigation}) => {
    return (
        <ScrollView>
            <View style={{marginTop: 50}}>
                <View style={styles.checklist}>
                    <Image source={Checklist}/>
                </View>
                <Text style={styles.trfSuccess}>Transfer Success</Text>
            </View>
            <Text style={styles.detail}>Details</Text>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={{fontSize: 16, color: '#7A7886'}}>Amount</Text>
                    <Text style={{fontSize: 22, fontWeight: 'bold',color: '#514F5B'}}>Rp.100.000</Text>
                </View>
                <View style={styles.card}>
                    <Text style={{fontSize: 16, color: '#7A7886'}}>Balance Left</Text>
                    <Text style={{fontSize: 22, fontWeight: 'bold',color: '#514F5B'}}>Rp20.000</Text>
                </View>
                <View style={styles.card}>
                    <Text style={{fontSize: 16, color: '#7A7886'}}>Date & Time</Text>
                    <Text style={{fontSize: 22, fontWeight: 'bold',color: '#514F5B'}}>May 11, 2020 - 12.20</Text>
                </View>
                <View style={styles.card}>
                    <Text style={{fontSize: 16, color: '#7A7886'}}>Notes</Text>
                    <Text style={{fontSize: 22, fontWeight: 'bold',color: '#514F5B'}}>For buying some socks</Text>
                </View>
            </View>
            <Text style={{marginLeft: 16, color: '#514F5B', fontSize: 18, fontWeight: 'bold'}}>Transfer to</Text>
            <View style={styles.card1}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.img} source={ImgProfile}/>
                    <View style={styles.nameNumber}>
                        <Text style={{fontSize:16, fontWeight: '700', color: '#4D4B57'}}>Samuel Suhi</Text>
                        <Text style={{color: '#7A7886'}}>+62 813-8492-9994</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity activeOpacity={0.5} style={styles.btn} onPress={() => {
                navigation.navigate("Home")
            }}>
                <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Back To Home</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    checklist : {
        height: 70,
        width: 70,
        backgroundColor: '#1EC15F',
        borderRadius: 35,
        justifyContent:'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    trfSuccess: {
        fontSize: 22,
        fontWeight: '800',
        marginTop: 30,
        alignSelf: 'center',
        marginBottom: 40,
        color: '#4D4B57'
    },
    detail: {
        fontSize: 18,
        fontWeight: '700', 
        color: '#514F5B',
        marginLeft: 16
    },
    container: {
        paddingHorizontal: 16,
        marginTop: 21,
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        height: 92,
        width: 343,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        justifyContent: 'space-between',
        marginBottom: 20
    },
    card1: {
        height: 96,
        width: 343,
        borderRadius: 10, 
        backgroundColor: 'white',
        marginTop: 20,
        alignSelf: 'center',
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center'
    },
    img: {
     width: 56,
     height: 56, 
     borderRadius: 10   
    },
    nameNumber: {
        height: 45,
        justifyContent: 'space-between',
        marginLeft: 15,
        marginTop: 2
    },
    btn: {
        height: 57,
        width: 343,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6379F4',
        borderRadius: 10, 
        marginTop: 40,
        marginBottom: 30
    }
})

export default Success
