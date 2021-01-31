import React from 'react'
import { View, Text, StyleSheet,Image } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { ArrowUp, Bell, Blanja, Card1, NetFlix, Plus, Profile, Spotify } from '../../assets'
import CardHome from '../../components/card/cardHome'

const Home = () => {
    return (
        <View>
            {/* header */}
            <View style={styles.containerHeader}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.imageProfile} source={Profile} />
                    <View style={{marginLeft: 20, height: '100%', justifyContent: 'space-around' }} >
                        <Text>Hello,</Text>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Fachri Ghiffary</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Image source={Bell} />
                </TouchableOpacity>
            </View>

            {/* balance */}
            <View style={styles.containerBalance}>
                <View style={styles.balanceSection}>
                    <Text style={styles.txtBalance}>Balance</Text>
                    <Text style={styles.txtmoney}>Rp120.000</Text>
                    <Text style={styles.txtBalance}>+62 813-9387-7946</Text>
                </View>
            </View>

            {/* transfer & topup */}
            <View style={styles.TrfTop}>
                <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
                    <View style={styles.containerTopup}>
                        <Image source={ArrowUp} />
                        <Text>Transfer</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
                    <View style={styles.containerTopup}>
                        <Image source={Plus}/>
                        <Text>Top Up</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.sectionTrans}>
                <Text  style={{fontSize: 18, fontWeight: 'bold'}}>Transaction History</Text>
                <TouchableOpacity>
                    <Text style={{color: '#6379F4', fontWeight: '600'}}>See all</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={{height: 320, width: '100%', marginTop: 25, alignSelf: 'center'}}>
                <CardHome name="Samuel Suhi" iconImg={Card1} status="Subscription" price="-Rp. 149.000"/>
                <CardHome name="Netflix" iconImg={NetFlix} status="Subscription" price="-Rp. 149.000"/>
                <CardHome name="Blanja" iconImg={Blanja} status="Subscription" price="-Rp. 350.000"/>
                <CardHome name="Spotify" iconImg={Spotify} status="Subscription" price="-Rp. 200.000"/>
                <CardHome name="netflix" iconImg={NetFlix} status="Subscription" price="-Rp. 149.000"/>
                <CardHome name="netflix" iconImg={NetFlix} status="Subscription" price="-Rp. 149.000"/>
            </ScrollView>

        </View>
    )
}


const styles = StyleSheet.create({
    containerHeader: {
        height: 60,
        width: 343,
        alignSelf: 'center',
        marginTop: 48,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageProfile: {
        height: 52, 
        width: 52,
        borderRadius: 10,
        alignSelf: 'center'
    },
    containerBalance : {
        height: 141,
        width: 343,
        backgroundColor : '#6379F4',
        alignSelf: 'center',
        marginTop: 29,
        borderRadius: 20,
        justifyContent: 'center',
        padding: 25,
    },
    balanceSection: {
        height: 91, 
        width: 134, 
        justifyContent: 'space-between'
    },
    txtBalance: {
        color: '#D0D0D0',
    },
    txtmoney: {
        color: 'white', 
        fontSize: 24,
        fontWeight: 'bold'
    },
    TrfTop: {
        height: 57,
        width: 343,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
        marginTop: 30
    },
    btn : {
        height: 57,
        width: 162,
        backgroundColor: '#E5E8ED',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center'
    },
    containerTopup: {
        width: 100, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    sectionTrans: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        width: 343, 
        alignSelf: 'center', 
        marginTop: 40, 
        alignItems: 'center'
    }
})

export default Home
