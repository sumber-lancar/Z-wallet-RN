import React from 'react'
import { View, Text, StyleSheet, Image, TextInput, KeyboardAvoidingView } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { IconBackWhite, ImgProfile, Pencil } from '../../assets'

const Transfer = ({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.header}>
                <View style={styles.sectionHeader}>
                    <Image source={IconBackWhite} />
                    <Text style={{fontSize: 20, color: 'white', fontWeight: '700'}}>Transfer</Text>
                </View>
                <View style={styles.card}>
                    <View style={{flexDirection: 'row'}}>
                        <Image style={styles.img} source={ImgProfile}/>
                        <View style={styles.nameNumber}>
                            <Text style={{fontSize:16, fontWeight: '700', color: '#4D4B57'}}>Samuel Suhi</Text>
                            <Text style={{color: '#7A7886'}}>+62 813-8492-9994</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.inputSection}>
                <TextInput keyboardType="number-pad" style={{fontSize: 42, fontWeight: 'bold', color: '#6379F4'}} placeholder="0.00" />
                <Text style={{fontSize: 16, color: '#7C7895', marginTop: 20}}>Rp.120.000 Available</Text>
            </View>
            <View style={styles.noteSection}>
                <View style={{flexDirection: 'row', height: 50, alignItems: 'center'}}>
                    <Image source={Pencil} />
                    <TextInput style={{marginLeft: 17}} placeholder="Add some notes" />
                </View>
                <View style={{height:1, width: 343, backgroundColor:'#A9A9A9'}} />
            </View>
            <TouchableOpacity style={styles.btnNext} onPress={() => navigation.navigate('Confirmation')}>
                <Text style={{fontSize: 20, color: 'white'}}>Next</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 260,
        width: '100%',
        backgroundColor: '#6379F4',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },
    sectionHeader: {
        marginTop: 44,
        flexDirection: 'row',
        alignItems:'center',
        marginLeft: 16,
        width: 124,
        justifyContent: 'space-between'
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
    inputSection : {
        alignSelf: 'center',
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noteSection: {
        marginTop: 60,
        alignSelf: 'center',
        width: 343,
        height:30,
        marginBottom: 50
    },
    btnNext : {
        alignSelf: 'center',
        height: 57,
        width: 343,
        backgroundColor: '#6379F4',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems:  'center',
        marginTop: 70
    }
})

export default Transfer
